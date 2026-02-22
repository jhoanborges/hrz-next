import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
	return (
		<section className="relative py-24 lg:py-32 bg-hrz-blue overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-hrz-red/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute bottom-0 right-0 w-72 h-72 bg-hrz-red/5 rounded-full translate-x-1/3 translate-y-1/3" />

			<div className="container mx-auto px-6 relative">
				<div className="max-w-3xl mx-auto text-center">
					<span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
						Get Started
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mt-4 leading-tight text-balance">
						Local Expertise, Global Coverage
					</h2>
					<p className="text-background/70 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
						Present in over 50 countries and backed by our extensive network,
						our teams of local experts are ready to advise you on the best
						solution for your business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
						<Button
							asChild
							size="lg"
							className="bg-hrz-red hover:bg-hrz-red/90 text-background rounded-lg px-8 h-12 text-base font-medium shadow-lg shadow-hrz-red/30"
						>
							<Link href="/contact">
								Request a Quote
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="rounded-lg px-8 h-12 text-base font-medium border-background/20 text-background hover:bg-background/10"
						>
							<Link href="/services">Explore Services</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
