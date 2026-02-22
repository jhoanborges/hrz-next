"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 232, label: "Clients" },
  { end: 521, label: "Projects" },
  { end: 1453, label: "Support" },
  { end: 32, label: "Workers" },
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

function StatItem({ end, label }: { end: number; label: string }) {
  const { count, ref } = useCountUp(end);
  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl font-bold text-hrz-red">{count}</span>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatItem key={stat.label} end={stat.end} label={stat.label} />
      ))}
    </div>
  );
}
