export function GridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet/20 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-magenta/20 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan/15 blur-[160px] animate-pulse-glow" />
    </div>
  );
}

export function Particles() {
  const dots = Array.from({ length: 30 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute block h-1 w-1 rounded-full bg-white/40"
          style={{
            top: `${(i * 53) % 100}%`,
            left: `${(i * 37) % 100}%`,
            animation: `float-slow ${6 + (i % 7)}s ease-in-out ${i * 0.2}s infinite`,
            opacity: 0.2 + ((i % 5) / 10),
          }}
        />
      ))}
    </div>
  );
}
