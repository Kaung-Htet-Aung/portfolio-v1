"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ParticleCursor() {
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  useEffect(() => {
    // 1. Check device capability immediately inside the component
    const hasHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!hasHover) {
      return; // Exit early. Do not attach mousemove listeners.
    }

    // 2. If it is a desktop, enable the UI and attach listeners
    setIsHoverDevice(true);

    const moveCursor = (e: MouseEvent) => {
      // Your cursor tracking logic here
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // 3. Return null on mobile so the DOM remains clean

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Better performance on supported browsers
    });
    if (!ctx) return;

    // ============================================
    // CONFIGURATION
    // ============================================
    const CONFIG = {
      maxParticles: 250,
      spawnRate: 2,
      minSize: 0.5,
      maxSize: 2.5,
      friction: 0.96,
      gravity: 0.015,
      velocityInheritance: 0.06,
      randomness: 1.2,
      baseHue: 160,
      hueVariation: 15,
      saturation: 70,
      lightness: 55,
      connectionDistance: 100,
      connectionDistanceSq: 100 * 100, // Pre-calculated
      connectionOpacity: 0.35,
      glowIntensity: 12,
      trailLength: 2,
      burstCount: 35,
      burstVelocity: 30,
    };

    // ============================================
    // OBJECT POOL - Reuse particles instead of GC
    // ============================================
    class ParticlePool {
      private pool: Particle[] = [];
      private active: Particle[] = [];
      private maxPoolSize: number;

      constructor(maxSize: number) {
        this.maxPoolSize = maxSize;
      }

      get(
        x: number,
        y: number,
        vx: number,
        vy: number,
        type: "trail" | "burst",
      ): Particle {
        let particle = this.pool.pop();
        if (particle) {
          particle.reset(x, y, vx, vy, type);
        } else {
          particle = new Particle(x, y, vx, vy, type);
        }
        this.active.push(particle);
        return particle;
      }

      release(particle: Particle) {
        const idx = this.active.indexOf(particle);
        if (idx > -1) {
          this.active.splice(idx, 1);
          if (this.pool.length < this.maxPoolSize) {
            this.pool.push(particle);
          }
        }
      }

      getActive(): Particle[] {
        return this.active;
      }

      getLength(): number {
        return this.active.length;
      }

      releaseAll(idx: number) {
        const particle = this.active[idx];
        if (particle) {
          this.active.splice(idx, 1);
          if (this.pool.length < this.maxPoolSize) {
            this.pool.push(particle);
          }
        }
      }
    }

    // ============================================
    // SPATIAL HASH GRID - O(n) instead of O(n²)
    // ============================================
    class SpatialHash {
      private cellSize: number;
      private grid: Map<string, Particle[]>;

      constructor(cellSize: number) {
        this.cellSize = cellSize;
        this.grid = new Map();
      }

      clear() {
        this.grid.clear();
      }

      private getKey(x: number, y: number): string {
        const cx = Math.floor(x / this.cellSize);
        const cy = Math.floor(y / this.cellSize);
        return `${cx},${cy}`;
      }

      insert(particle: Particle) {
        const key = this.getKey(particle.x, particle.y);
        let cell = this.grid.get(key);
        if (!cell) {
          cell = [];
          this.grid.set(key, cell);
        }
        cell.push(particle);
      }

      getNearby(particle: Particle): Particle[] {
        const result: Particle[] = [];
        const cx = Math.floor(particle.x / this.cellSize);
        const cy = Math.floor(particle.y / this.cellSize);

        // Check 9 neighboring cells (3x3)
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${cx + dx},${cy + dy}`;
            const cell = this.grid.get(key);
            if (cell) {
              result.push(...cell);
            }
          }
        }
        return result;
      }
    }

    // ============================================
    // PARTICLE CLASS
    // ============================================
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 1;
      baseSize: number = 1;
      speedX: number = 0;
      speedY: number = 0;
      life: number = 1;
      maxLife: number = 1;
      hue: number = CONFIG.baseHue;
      type: "trail" | "burst" = "trail";
      rotation: number = 0;
      rotationSpeed: number = 0;
      history: Float32Array = new Float32Array(CONFIG.trailLength * 2);
      historyIndex: number = 0;
      historyCount: number = 0;

      constructor(
        x: number,
        y: number,
        vx: number,
        vy: number,
        type: "trail" | "burst" = "trail",
      ) {
        this.history = new Float32Array(CONFIG.trailLength * 2);
        this.historyIndex = 0;
        this.historyCount = 0;
        this.reset(x, y, vx, vy, type);
      }

      reset(
        x: number,
        y: number,
        vx: number,
        vy: number,
        type: "trail" | "burst",
      ) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.baseSize =
          Math.random() * (CONFIG.maxSize - CONFIG.minSize) + CONFIG.minSize;
        this.size = this.baseSize;
        this.speedX =
          vx * CONFIG.velocityInheritance +
          (Math.random() - 0.5) * CONFIG.randomness;
        this.speedY =
          vy * CONFIG.velocityInheritance +
          (Math.random() - 0.5) * CONFIG.randomness;
        this.maxLife = type === "burst" ? 1.4 : 0.9;
        this.life = this.maxLife;
        this.hue = CONFIG.baseHue + (Math.random() - 0.5) * CONFIG.hueVariation;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.08;
        this.historyIndex = 0;
        this.historyCount = 0;
      }

      update(time: number) {
        // Store position history
        if (this.historyCount < CONFIG.trailLength) {
          this.historyCount++;
        }
        this.history[this.historyIndex * 2] = this.x;
        this.history[this.historyIndex * 2 + 1] = this.y;
        this.historyIndex = (this.historyIndex + 1) % CONFIG.trailLength;

        // Physics
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += CONFIG.gravity;
        this.speedX *= CONFIG.friction;
        this.speedY *= CONFIG.friction;
        this.rotation += this.rotationSpeed;

        // Life & size
        this.life -= 0.014;
        const pulse = Math.sin(time * 4 + this.rotation) * 0.2;
        this.size = this.baseSize * Math.max(0, this.life) * (1 + pulse);

        if (this.type === "burst" && this.life > this.maxLife * 0.8) {
          this.size *= 1.2;
        }
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        if (this.life <= 0) return;

        const alpha = Math.max(0, Math.min(1, this.life));
        const h = this.hue;
        const s = CONFIG.saturation;
        const l = CONFIG.lightness;

        // Draw trail (optimized - single path)
        if (this.historyCount > 1) {
          ctx.beginPath();
          const startIdx =
            (this.historyIndex - this.historyCount + CONFIG.trailLength) %
            CONFIG.trailLength;
          ctx.moveTo(
            this.history[startIdx * 2],
            this.history[startIdx * 2 + 1],
          );

          for (let i = 1; i < this.historyCount; i++) {
            const idx = (startIdx + i) % CONFIG.trailLength;
            ctx.lineTo(this.history[idx * 2], this.history[idx * 2 + 1]);
          }
          ctx.lineTo(this.x, this.y);
          ctx.strokeStyle = `hsla(${h}, ${s}%, ${l}%, ${alpha * 0.25})`;
          ctx.lineWidth = this.size * 0.4;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        // Glow (only for larger particles to save performance)
        if (this.size > 1) {
          ctx.shadowBlur = CONFIG.glowIntensity * alpha;
          ctx.shadowColor = `hsla(${h}, ${s}%, ${l + 15}%, ${alpha})`;
        }

        // Main particle
        ctx.fillStyle = `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow immediately
        if (this.size > 1) {
          ctx.shadowBlur = 0;
        }
      }
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    const pool = new ParticlePool(CONFIG.maxParticles * 2);
    const spatialHash = new SpatialHash(CONFIG.connectionDistance);

    let mouse = { x: -100, y: -100, vx: 0, vy: 0 };
    let lastMouse = { x: -100, y: -100 };
    let animationFrameId: number;
    let time = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    let reducedMotion = false;

    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
    }

    // ============================================
    // CANVAS SETUP
    // ============================================
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // ============================================
    // INPUT HANDLERS
    // ============================================
    const handleMouseMove = (event: MouseEvent) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.vx = mouse.x - lastMouse.x;
      mouse.vy = mouse.y - lastMouse.y;

      if (pool.getLength() < CONFIG.maxParticles) {
        for (let i = 0; i < CONFIG.spawnRate; i++) {
          pool.get(mouse.x, mouse.y, mouse.vx, mouse.vy, "trail");
        }
      }
    };

    const handleMouseClick = (event: MouseEvent) => {
      const currentLen = pool.getLength();
      if (currentLen > CONFIG.maxParticles - CONFIG.burstCount) {
        // Release oldest particles
        const toRemove = currentLen - (CONFIG.maxParticles - CONFIG.burstCount);
        for (let i = 0; i < toRemove; i++) {
          pool.releaseAll(0);
        }
      }

      // Create burst in circular pattern
      for (let i = 0; i < CONFIG.burstCount; i++) {
        const angle = (i / CONFIG.burstCount) * Math.PI * 2;
        const speed = CONFIG.burstVelocity * (0.5 + Math.random() * 0.5);
        pool.get(
          event.clientX,
          event.clientY,
          Math.cos(angle) * speed,
          Math.sin(angle) * speed,
          "burst",
        );
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;

      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = touch.clientX;
      mouse.y = touch.clientY;
      mouse.vx = mouse.x - lastMouse.x;
      mouse.vy = mouse.y - lastMouse.y;

      if (pool.getLength() < CONFIG.maxParticles) {
        for (let i = 0; i < CONFIG.spawnRate; i++) {
          pool.get(mouse.x, mouse.y, mouse.vx, mouse.vy, "trail");
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) {
        handleMouseClick({
          clientX: touch.clientX,
          clientY: touch.clientY,
        } as MouseEvent);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseClick);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    // ============================================
    // OPTIMIZED CONNECTION RENDERING
    // ============================================
    const drawConnections = () => {
      const particles = pool.getActive();
      const len = particles.length;
      if (len < 2) return;

      // Build spatial hash
      spatialHash.clear();
      for (let i = 0; i < len; i++) {
        spatialHash.insert(particles[i]);
      }

      // Draw connections using spatial hash
      for (let i = 0; i < len; i++) {
        const pA = particles[i];
        if (pA.life <= 0) continue;

        const nearby = spatialHash.getNearby(pA);
        for (let j = 0; j < nearby.length; j++) {
          const pB = nearby[j];
          if (pB === pA || pB.life <= 0) continue;

          const dx = pA.x - pB.x;
          const dy = pA.y - pB.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONFIG.connectionDistanceSq && distSq > 1) {
            const distance = Math.sqrt(distSq);
            const opacity =
              (1 - distance / CONFIG.connectionDistance) *
              Math.min(pA.life, pB.life) *
              CONFIG.connectionOpacity;

            if (opacity > 0.01) {
              // Simple solid line (gradient is expensive)
              ctx.strokeStyle = `hsla(${CONFIG.baseHue}, ${CONFIG.saturation}%, ${CONFIG.lightness}%, ${opacity})`;
              ctx.lineWidth = opacity * 1.5;
              ctx.beginPath();
              ctx.moveTo(pA.x, pA.y);
              ctx.lineTo(pB.x, pB.y);
              ctx.stroke();
            }
          }
        }
      }
    };

    // ============================================
    // MOUSE GLOW
    // ============================================
    const drawMouseGlow = () => {
      if (mouse.x < 0 || mouse.y < 0) return;

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        80,
      );
      gradient.addColorStop(
        0,
        `hsla(${CONFIG.baseHue}, ${CONFIG.saturation}%, ${CONFIG.lightness}%, 0.12)`,
      );
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
      ctx.fill();
    };

    // ============================================
    // MAIN RENDER LOOP
    // ============================================
    const animate = (currentTime: number) => {
      // Delta time for consistent animation
      const deltaTime = Math.min((currentTime - lastTime) / 16.67, 2);
      lastTime = currentTime;
      time += 0.016 * deltaTime;
      frameCount++;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Skip heavy effects if reduced motion preferred
      if (!reducedMotion) {
        drawMouseGlow();
        drawConnections();
      }

      // Update and draw particles
      const particles = pool.getActive();
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update(time);

        if (particle.life <= 0) {
          pool.releaseAll(i);
        } else {
          particle.draw(ctx, time);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // ============================================
    // CLEANUP
    // ============================================
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseClick);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  if (!isHoverDevice) return null;
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
