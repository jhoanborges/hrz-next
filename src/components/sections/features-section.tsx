import { Check } from "lucide-react";
import Image from "next/image";

const features = [
	{
		image: "/assets/img/warehousing-service.jpg",
		title: "Warehouse Management System",
		subtitle:
			"We can control our warehouse's entire inbound inventory process in Mexico through this warehouse management system.",
		items: ["Warehouse.", "Crossdock Services.", "Logistics management."],
		reverse: false,
	},
	{
		image: "/assets/img/storage-service.jpg",
		title: "Engineering & Management of Logistics Projects",
		subtitle:
			"Optimise the management of your production sites and warehouses with customised and secure solutions, adapted to the specifics of your industry.",
		items: [
			"Engineering and design of optimised solutions",
			"Staff training of operations",
			"Implementation of quality standards and performance indicators",
			"Stock management, warehousing and value-added services",
			"Management of shipments",
		],
		reverse: true,
	},
	{
		image: "/assets/img/trucking-service.jpg",
		title: "Optimise Your Distribution",
		subtitle:
			"Ensure product availability at your points of sale and customers with dedicated or shared logistics solutions to optimise your costs.",
		items: [
			"Reception and quality control",
			"Optimisation of customs operations",
			"Stock management and order preparation",
			"Management of promotional operations",
			"Management and preparation of shipments",
		],
		reverse: false,
	},
	{
		image: "/assets/img/features-4.jpg",
		title: "Operational Support & Solutions",
		subtitle:
			"Benefit from operational support to implement the most adapted solution.",
		description:
			"Our engineering and project management department designs with you the most adapted solution for your inbound and outbound challenges, relying on logistics, transport and IT engineers.",
		items: [],
		reverse: true,
	},
];

export default function FeaturesSection() {
	return (
		<section className="py-20 lg:py-28 bg-hrz-light">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
						Capabilities
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-hrz-blue mt-3 text-balance">
						End-to-End Logistics Solutions
					</h2>
				</div>

				<div className="space-y-24">
					{features.map((feature) => (
						<div
							key={feature.title}
							className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
								feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
							}`}
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
										alt={feature.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-700"
									/>
								</div>
							</div>

							<div>
								<h3 className="text-2xl md:text-3xl font-bold text-hrz-blue mb-4 leading-tight">
									{feature.title}
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-6">
									{feature.subtitle}
								</p>
								{"description" in feature && feature.description && (
									<p className="text-muted-foreground leading-relaxed mb-6">
										{feature.description}
									</p>
								)}
								{feature.items.length > 0 && (
									<ul className="space-y-3">
										{feature.items.map((item) => (
											<li key={item} className="flex items-start gap-3">
												<div className="w-5 h-5 bg-hrz-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
													<Check className="h-3 w-3 text-hrz-red" />
												</div>
												<span className="text-muted-foreground text-sm leading-relaxed">
													{item}
												</span>
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
