"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 232, suffix: "+", label: "Clients Worldwide" },
  { end: 521, suffix: "+", label: "Projects Delivered" },
  { end: 1453, suffix: "", label: "Hours of Support" },
  { end: 32, suffix: "+", label: "Team Members" },
];

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatItem({
  end,
  label,
  suffix,
  dark,
}: {
  end: number;
  label: string;
  suffix: string;
  dark: boolean;
}) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-4xl lg:text-5xl font-bold tracking-tight ${
          dark ? "text-background" : "text-hrz-red"
        }`}
      >
        {count}
        <span className={dark ? "opacity-70" : "opacity-70"}>{suffix}</span>
      </div>
      <div
        className={`mt-2 text-sm font-medium uppercase tracking-wider ${
          dark ? "text-background/60" : "text-muted-foreground"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter({
  variant = "default",
}: {
  variant?: "default" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <StatItem
          key={stat.label}
          end={stat.end}
          label={stat.label}
          suffix={stat.suffix}
          dark={isDark}
        />
      ))}
    </div>
  );
}
