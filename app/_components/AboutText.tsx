const Highlight = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <span className="text-zinc-200 dark:text-black font-semibold">
    {children}
  </span>
);

export const AboutText = () => (
  <p className="text-base md:text-lg font-sans leading-relaxed text-zinc-400 dark:text-black">
    I started learning web development because I was
    <Highlight> curious</Highlight> about how things work. That curiosity slowly
    turned into <Highlight>passion</Highlight>, and that passion turned into{" "}
    <Highlight>real projects</Highlight>. Today, I turn{" "}
    <Highlight>coffee</Highlight> into <Highlight>clean code</Highlight> and{" "}
    ideas into <Highlight>real, working applications</Highlight>.
  </p>
);
