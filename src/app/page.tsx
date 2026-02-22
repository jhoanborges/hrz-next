import CtaSection from "@/components/sections/cta-section";
import FeaturedServices from "@/components/sections/featured-services";
import FeaturesSection from "@/components/sections/features-section";
import HeroSection from "@/components/sections/hero-section";
import ServicesGrid from "@/components/sections/services-grid";
import StatsSection from "@/components/sections/stats-section";
import WhyChooseUs from "@/components/sections/why-choose-us";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeaturedServices />
			<StatsSection />
			<ServicesGrid />
			<WhyChooseUs />
			<FeaturesSection />
			<CtaSection />
		</>
	);
}
