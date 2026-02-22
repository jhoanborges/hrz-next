"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

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
			{ threshold: 0.5 },
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
					dark ? "text-white" : "text-hrz-red"
				}`}
			>
				{count}
				<span className="opacity-70">{suffix}</span>
			</div>
			<div
				className={`mt-2 text-sm font-medium uppercase tracking-wider ${
					dark ? "text-white/60" : "text-muted-foreground"
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
	const t = useTranslations("Stats");

	const stats = [
		{ end: 232, suffix: "+", labelKey: "clientsWorldwide" as const },
		{ end: 521, suffix: "+", labelKey: "projectsDelivered" as const },
		{ end: 1453, suffix: "", labelKey: "hoursOfSupport" as const },
		{ end: 32, suffix: "+", labelKey: "teamMembers" as const },
	];

	return (
		<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
			{stats.map((stat) => (
				<StatItem
					key={stat.labelKey}
					end={stat.end}
					label={t(stat.labelKey)}
					suffix={stat.suffix}
					dark={isDark}
				/>
			))}
		</div>
	);
}
