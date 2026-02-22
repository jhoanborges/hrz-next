"use client";

import { ArrowRight, BoxesIcon, PackageOpen, Truck } from "lucide-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const featuredServices = [
	{
		icon: PackageOpen,
		title: "Warehousing",
		description:
			"More than just storage, our warehouses are your supply chain pit-stop, expertly designed to keep your products flowing at the pace of your choosing. Present in over 50 countries.",
	},
	{
		icon: Truck,
		title: "Distribution",
		description:
			"Take advantage of our extensive distribution network for product deliveries to your end customer; whether DC, wholesaler, retail store or end-consumer.",
	},
	{
		icon: BoxesIcon,
		title: "Value Added",
		description:
			"Save time and costs by customising on the go. From scanning and labelling to product customisation and late localisation with ultimate flexibility.",
	},
];

export default function FeaturedServices() {
	return (
		<section className="py-20 lg:py-24 bg-background">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
					{featuredServices.map((service, i) => (
						<Fade key={service.title} triggerOnce delay={i * 150}>
							<div className="group relative p-8 rounded-2xl border border-border/50 bg-background hover:border-hrz-red/20 hover:shadow-lg hover:shadow-hrz-red/5 transition-all duration-300 h-full">
								<div className="w-14 h-14 bg-hrz-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-hrz-red/15 transition-colors">
									<service.icon className="h-7 w-7 text-hrz-red" />
								</div>
								<h3 className="font-semibold text-xl text-hrz-blue dark:text-white mb-3">
									{service.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed text-sm">
									{service.description}
								</p>
								<Link
									href="/services"
									className="inline-flex items-center gap-1.5 text-sm font-medium text-hrz-red hover:gap-3 transition-all mt-5"
								>
									Learn More <ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</Fade>
					))}
				</div>
			</div>
		</section>
	);
}
