import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
	{
		image: "/assets/img/storage-service.jpg",
		title: "Storage",
		description:
			"Flexible storage options with excellent warehousing facilities, completely equipped to handle bulk cargo and break bulk requirements.",
	},
	{
		image: "/assets/img/logistics-service.jpg",
		title: "Logistics",
		description:
			"Let us simplify and connect your supply chain from end to end with our comprehensive logistics solutions.",
	},
	{
		image: "/assets/img/cargo-service.jpg",
		title: "Cargo",
		description:
			"Our Cargo Setups, adjacent to all terminals, are open 24/7 providing safe and speedy dispatch and delivery.",
	},
	{
		image: "/assets/img/trucking-service.jpg",
		title: "Trucking",
		description:
			"Our loyal fleet of over 600,000 independent truckers is always ready to roll for your delivery needs.",
	},
	{
		image: "/assets/img/packaging-service.jpg",
		title: "Packaging",
		description:
			"We help with all types of packing operations, no matter the location or destination of your products.",
	},
	{
		image: "/assets/img/warehousing-service.jpg",
		title: "Warehousing",
		description:
			"Customised warehouse logistics solutions with great importance on flexibility, transparency and best practice.",
	},
];

export default function ServicesGrid() {
	return (
		<section className="py-20 lg:py-28 bg-hrz-light">
			<div className="container mx-auto px-6">
				<div className="text-center mb-14">
					<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
						What We Do
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-hrz-blue mt-3 text-balance">
						Our Services
					</h2>
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
						Comprehensive warehousing and logistics solutions tailored to your
						business needs across the globe.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => (
						<Link
							href="/services"
							key={service.title}
							className="group relative bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-hrz-blue/5 transition-all duration-500"
						>
							<div className="relative h-52 overflow-hidden">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-hrz-blue/20 group-hover:bg-hrz-blue/10 transition-colors duration-500" />
							</div>
							<div className="p-6">
								<h3 className="font-semibold text-lg text-hrz-blue mb-2 group-hover:text-hrz-red transition-colors">
									{service.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{service.description}
								</p>
								<div className="flex items-center gap-1.5 text-sm font-medium text-hrz-red mt-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
									Learn More <ArrowRight className="h-4 w-4" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
