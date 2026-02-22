"use client";

import { Clock, Globe, Shield, Truck } from "lucide-react";
import { useTranslations } from "next-intl";
import { Fade, Slide } from "react-awesome-reveal";

const reasons = [
	{ icon: Globe, titleKey: "globalCoverage", descKey: "globalCoverageDesc" },
	{ icon: Shield, titleKey: "secureCompliant", descKey: "secureCompliantDesc" },
	{ icon: Clock, titleKey: "operations247", descKey: "operations247Desc" },
	{
		icon: Truck,
		titleKey: "flexibleSolutions",
		descKey: "flexibleSolutionsDesc",
	},
] as const;

export default function WhyChooseUs() {
	const t = useTranslations("WhyChooseUs");

	return (
		<section className="py-20 lg:py-28 bg-background">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<Slide direction="left" triggerOnce>
						<div>
							<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
								{t("badge")}
							</span>
							<h2 className="text-3xl md:text-4xl font-bold text-hrz-blue dark:text-white mt-3 leading-tight text-balance">
								{t("title")}
							</h2>
							<p className="text-muted-foreground mt-4 leading-relaxed max-w-lg">
								{t("description")}
							</p>
						</div>
					</Slide>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{reasons.map((reason, i) => (
							<Fade key={reason.titleKey} triggerOnce delay={i * 120}>
								<div className="p-6 rounded-2xl border border-border/50 hover:border-hrz-red/20 hover:shadow-md transition-all duration-300 h-full">
									<div className="w-12 h-12 bg-hrz-red/10 rounded-xl flex items-center justify-center mb-4">
										<reason.icon className="h-6 w-6 text-hrz-red" />
									</div>
									<h3 className="font-semibold text-hrz-blue dark:text-white mb-2">
										{t(reason.titleKey)}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{t(reason.descKey)}
									</p>
								</div>
							</Fade>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
