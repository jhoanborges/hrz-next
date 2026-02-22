"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

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

export default function ServicesPage() {
	const t = useTranslations("ServicesPage");

	return (
		<>
			{/* Page Header */}
			<section className="relative bg-hrz-blue py-24 lg:py-32 overflow-hidden">
				<div className="absolute top-0 right-0 w-96 h-96 bg-hrz-red/5 rounded-full translate-x-1/2 -translate-y-1/2" />
				<div className="absolute bottom-0 left-0 w-72 h-72 bg-hrz-red/5 rounded-full -translate-x-1/3 translate-y-1/3" />
				<div className="container mx-auto px-6 relative">
					<div className="max-w-2xl mx-auto text-center">
						<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
							{t("badge")}
						</span>
						<h1 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight text-balance">
							{t("title")}
						</h1>
						<p className="text-white/60 mt-5 text-lg leading-relaxed">
							{t("description")}
						</p>
					</div>
				</div>
			</section>

			{/* Breadcrumb */}
			<nav className="bg-hrz-light dark:bg-hrz-dark py-3 border-b border-border/50">
				<div className="container mx-auto px-6">
					<ol className="flex items-center gap-2 text-sm text-muted-foreground">
						<li>
							<Link href="/" className="hover:text-hrz-red transition-colors">
								{t("breadcrumbHome")}
							</Link>
						</li>
						<li className="text-muted-foreground/40">/</li>
						<li className="text-hrz-blue dark:text-white font-medium">
							{t("breadcrumbServices")}
						</li>
					</ol>
				</div>
			</nav>

			{/* Services Grid */}
			<section className="py-20 lg:py-28 bg-background">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service) => (
							<div
								key={service.titleKey}
								className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-hrz-blue/5 transition-all duration-500"
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
								</div>
							</div>
						))}
					</div>

					{/* CTA */}
					<div className="text-center mt-16">
						<p className="text-muted-foreground mb-6">{t("ctaText")}</p>
						<Button
							asChild
							className="bg-hrz-red hover:bg-hrz-red/90 text-white rounded-lg px-8 h-12 text-base font-medium shadow-lg shadow-hrz-red/20"
						>
							<Link href="/contact">
								{t("getQuote")}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
}
