"use client";

import { Fade } from "react-awesome-reveal";
import StatsCounter from "@/components/stats-counter";

export default function StatsSection() {
	return (
		<section className="py-20 lg:py-24 bg-hrz-blue">
			<div className="container mx-auto px-6">
				<Fade triggerOnce>
					<div className="text-center mb-14">
						<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
							Our Track Record
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-white mt-3 text-balance">
							Numbers That Speak for Themselves
						</h2>
					</div>
				</Fade>
				<Fade triggerOnce delay={200}>
					<div className="max-w-4xl mx-auto">
						<StatsCounter variant="dark" />
					</div>
				</Fade>
			</div>
		</section>
	);
}
