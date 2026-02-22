import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const services = [
	{
		image: "/assets/img/storage-service.jpg",
		title: "Storage",
		description:
			"We offer our customers flexible storage option with excellent warehousing facility. Our warehousing facilities are completely equipped to handle bulk cargo including various other requirements such as Break bulk.",
	},
	{
		image: "/assets/img/logistics-service.jpg",
		title: "Logistics",
		description:
			"Let us simplify and connect your supply chain from end to end.",
	},
	{
		image: "/assets/img/cargo-service.jpg",
		title: "Cargo",
		description:
			"Our Cargo Setups, adjacent to all terminals, are open 24/7 providing Safe & Speedy dispatch and delivery of cargo consignments to our clients.",
	},
	{
		image: "/assets/img/trucking-service.jpg",
		title: "Trucking",
		description:
			"Our loyal fleet of over 600,000 independent truckers is always ready to roll.",
	},
	{
		image: "/assets/img/packaging-service.jpg",
		title: "Packaging",
		description:
			"With our packing services, we can help you with all types of packing operations, no matter the location or where the products are going to be sent.",
	},
	{
		image: "/assets/img/warehousing-service.jpg",
		title: "Warehousing",
		description:
			"HRZ designs customised warehouse logistics solutions for your business model and your operations. We attach great importance to flexibility and transparency, measure our performance and bring best practice solutions from a variety of projects and industries into the partnership.",
	},
];

export default function ServicesPage() {
	return (
		<>
			{/* Breadcrumb / Header */}
			<section
				className="relative bg-cover bg-center py-20"
				style={{ backgroundImage: "url('/assets/img/page-header.jpg')" }}
			>
				<div className="absolute inset-0 bg-hrz-blue/70" />
				<div className="container mx-auto px-4 relative z-10 text-center">
					<h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Services
					</h1>
					<p className="text-gray-200 max-w-xl mx-auto">
						We store a vast array of inventory for our clients and our warehouse
						storage and distribution services are unique to each client. You
						shouldn&apos;t have to worry about storage overhead, peak season or
						inventory control.
					</p>
				</div>
			</section>

			<nav className="bg-hrz-light py-3">
				<div className="container mx-auto px-4">
					<ol className="flex items-center gap-2 text-sm text-muted-foreground">
						<li>
							<Link href="/" className="hover:text-hrz-red transition-colors">
								Home
							</Link>
						</li>
						<li>/</li>
						<li className="text-hrz-blue font-medium">Services</li>
					</ol>
				</div>
			</nav>

			{/* Services Grid */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<span className="text-hrz-red font-medium">Our Services</span>
						<h2 className="text-3xl font-bold text-hrz-blue mt-2">
							Our Services
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service) => (
							<Card
								key={service.title}
								className="overflow-hidden hover:shadow-lg transition-shadow"
							>
								<div className="relative h-48">
									<Image
										src={service.image}
										alt={service.title}
										fill
										className="object-cover"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="font-semibold text-lg text-hrz-blue mb-2">
										{service.title}
									</h3>
									<p className="text-sm text-muted-foreground">
										{service.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
