"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Fade, Slide } from "react-awesome-reveal";

const services = [
	{
		image: "/assets/img/storage-service.jpg",
		titleKey: "storage",
		descKey: "storageDesc",
	},
	{
		image: "/assets/img/logistics-service.jpg",
		titleKey: "logistics",
		descKey: "logisticsDesc",
	},
	{
		image: "/assets/img/cargo-service.jpg",
		titleKey: "cargo",
		descKey: "cargoDesc",
	},
	{
		image: "/assets/img/trucking-service.jpg",
		titleKey: "trucking",
		descKey: "truckingDesc",
	},
	{
		image: "/assets/img/packaging-service.jpg",
		titleKey: "packaging",
		descKey: "packagingDesc",
	},
	{
		image: "/assets/img/warehousing-service.jpg",
		titleKey: "warehousing",
		descKey: "warehousingDesc",
	},
] as const;

export default function ServicesGrid() {
	const t = useTranslations("ServicesGrid");

	return (
		<section className="py-20 lg:py-28 bg-hrz-light dark:bg-hrz-dark">
			<div className="container mx-auto px-6">
				<Slide direction="up" triggerOnce>
					<div className="text-center mb-14">
						<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
							{t("badge")}
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-hrz-blue dark:text-white mt-3 text-balance">
							{t("title")}
						</h2>
						<p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
							{t("description")}
						</p>
					</div>
				</Slide>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, i) => (
						<Fade key={service.titleKey} triggerOnce delay={i * 100}>
							<Link
								href="/services"
								className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-hrz-blue/5 transition-all duration-500 block h-full"
							>
								<div className="relative h-52 overflow-hidden">
									<Image
										src={service.image}
										alt={t(service.titleKey)}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-hrz-blue/20 group-hover:bg-hrz-blue/10 transition-colors duration-500" />
								</div>
								<div className="p-6">
									<h3 className="font-semibold text-lg text-hrz-blue dark:text-white mb-2 group-hover:text-hrz-red transition-colors">
										{t(service.titleKey)}
									</h3>
									<p className="text-sm text-muted-foreground leading-relaxed">
										{t(service.descKey)}
									</p>
									<div className="flex items-center gap-1.5 text-sm font-medium text-hrz-red mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
										{t("learnMore")} <ArrowRight className="h-4 w-4" />
									</div>
								</div>
							</Link>
						</Fade>
					))}
				</div>
			</div>
		</section>
	);
}
