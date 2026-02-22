import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative bg-hrz-light overflow-hidden">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 opacity-[0.03]">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
				/>
			</div>

			<div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 relative">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div className="order-2 lg:order-1">
						<div className="inline-flex items-center gap-2 bg-hrz-red/10 text-hrz-red text-sm font-medium px-4 py-1.5 rounded-full mb-6">
							<span className="w-2 h-2 bg-hrz-red rounded-full" />
							Trusted Logistics Partner
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hrz-blue leading-tight tracking-tight text-balance">
							Warehousing <span className="text-hrz-red">&</span> Distribution
						</h1>

						<p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-xl">
							HRZ takes care of your end-to-end warehousing and distribution
							logistics, from our strategic network of storage facilities;
							capable to fulfill your customer&apos;s demands.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mt-10">
							<Button
								asChild
								size="lg"
								className="bg-hrz-red hover:bg-hrz-red/90 text-background rounded-lg px-8 h-12 text-base font-medium shadow-lg shadow-hrz-red/20"
							>
								<Link href="/contact">
									Get a Quote
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								className="rounded-lg px-8 h-12 text-base font-medium bg-transparent border border-hrz-blue/20 text-hrz-blue hover:bg-hrz-blue hover:text-background"
							>
								<Link href="/services">Our Services</Link>
							</Button>
						</div>
					</div>

					<div className="order-1 lg:order-2 flex justify-center">
						<div className="relative">
							<div className="absolute -inset-4 bg-hrz-red/5 rounded-3xl -rotate-3" />
							<Image
								src="/img/warehouse.png"
								alt="Modern warehouse facility"
								width={600}
								height={400}
								className="relative w-full max-w-lg rounded-2xl"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
