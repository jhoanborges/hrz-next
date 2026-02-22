"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Fade, Slide } from "react-awesome-reveal";

const features = [
	{
		image: "/assets/img/warehousing-service.jpg",
		titleKey: "wmsTitle",
		subtitleKey: "wmsSubtitle",
		items: ["wmsItem1", "wmsItem2", "wmsItem3"],
		reverse: false,
	},
	{
		image: "/assets/img/storage-service.jpg",
		titleKey: "engineeringTitle",
		subtitleKey: "engineeringSubtitle",
		items: [
			"engineeringItem1",
			"engineeringItem2",
			"engineeringItem3",
			"engineeringItem4",
			"engineeringItem5",
		],
		reverse: true,
	},
	{
		image: "/assets/img/trucking-service.jpg",
		titleKey: "distributionTitle",
		subtitleKey: "distributionSubtitle",
		items: [
			"distributionItem1",
			"distributionItem2",
			"distributionItem3",
			"distributionItem4",
			"distributionItem5",
		],
		reverse: false,
	},
	{
		image: "/assets/img/features-4.jpg",
		titleKey: "supportTitle",
		subtitleKey: "supportSubtitle",
		descriptionKey: "supportDescription",
		items: [],
		reverse: true,
	},
] as const;

export default function FeaturesSection() {
	const t = useTranslations("Features");

	return (
		<section className="py-20 lg:py-28 bg-hrz-light dark:bg-hrz-dark">
			<div className="container mx-auto px-6">
				<Slide direction="up" triggerOnce>
					<div className="text-center mb-16">
						<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
							{t("badge")}
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-hrz-blue dark:text-white mt-3 text-balance">
							{t("title")}
						</h2>
					</div>
				</Slide>

				<div className="space-y-24">
					{features.map((feature) => (
						<Fade key={feature.titleKey} triggerOnce>
							<div
								className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
									feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
								}`}
							>
								<Slide
									direction={feature.reverse ? "right" : "left"}
									triggerOnce
								>
									<div className="relative group">
										<div
											className={`absolute -inset-3 bg-hrz-red/5 rounded-3xl ${
												feature.reverse ? "rotate-2" : "-rotate-2"
											} group-hover:rotate-0 transition-transform duration-500`}
										/>
										<div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
											<Image
												src={feature.image}
												alt={t(feature.titleKey)}
												fill
												className="object-cover group-hover:scale-105 transition-transform duration-700"
											/>
										</div>
									</div>
								</Slide>

								<Slide
									direction={feature.reverse ? "left" : "right"}
									triggerOnce
								>
									<div>
										<h3 className="text-2xl md:text-3xl font-bold text-hrz-blue dark:text-white mb-4 leading-tight">
											{t(feature.titleKey)}
										</h3>
										<p className="text-muted-foreground leading-relaxed mb-6">
											{t(feature.subtitleKey)}
										</p>
										{"descriptionKey" in feature && feature.descriptionKey && (
											<p className="text-muted-foreground leading-relaxed mb-6">
												{t(feature.descriptionKey)}
											</p>
										)}
										{feature.items.length > 0 && (
											<ul className="space-y-3">
												{feature.items.map((itemKey) => (
													<li key={itemKey} className="flex items-start gap-3">
														<div className="w-5 h-5 bg-hrz-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
															<Check className="h-3 w-3 text-hrz-red" />
														</div>
														<span className="text-muted-foreground text-sm leading-relaxed">
															{t(itemKey)}
														</span>
													</li>
												))}
											</ul>
										)}
									</div>
								</Slide>
							</div>
						</Fade>
					))}
				</div>
			</div>
		</section>
	);
}
