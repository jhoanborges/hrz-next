import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PackageOpen,
  Truck,
  BoxesIcon,
  ArrowRight,
  Check,
  Globe,
  Shield,
  Clock,
} from "lucide-react";
import StatsCounter from "@/components/stats-counter";
import HeroSection from "@/components/sections/hero-section";
import FeaturedServices from "@/components/sections/featured-services";
import ServicesGrid from "@/components/sections/services-grid";
import CtaSection from "@/components/sections/cta-section";
import FeaturesSection from "@/components/sections/features-section";
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
