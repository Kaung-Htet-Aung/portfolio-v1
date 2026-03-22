"use client"; // Required for Next.js to run this on the client side

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2000;

  // Generate random positions for the particles in a 3D box
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    return pos;
  }, [count]);

  const mouse = useRef(new THREE.Vector2(0, 0));

  useFrame((state) => {
    // Smoothly interpolate the mouse position for a fluid floating effect
    mouse.current.x = THREE.MathUtils.lerp(
      mouse.current.x,
      state.pointer.x,
      0.05,
    );
    mouse.current.y = THREE.MathUtils.lerp(
      mouse.current.y,
      state.pointer.y,
      0.05,
    );

    if (pointsRef.current) {
      // The entire particle field shifts and rotates toward the cursor
      pointsRef.current.rotation.y = mouse.current.x * 0.5;
      pointsRef.current.rotation.x = -mouse.current.y * 0.5;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]} // <-- THIS IS THE FIX
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      {/* Material tailored to your #51C29A mint green accent */}
      <pointsMaterial
        size={0.04}
        color="#51C29A"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    // position fixed to lock it to the viewport, z-0 to push it behind content
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
