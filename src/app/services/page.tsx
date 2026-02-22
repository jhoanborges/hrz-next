import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    image: "/assets/img/storage-service.jpg",
    title: "Storage",
    description:
      "We offer our customers flexible storage options with excellent warehousing facilities. Our facilities are completely equipped to handle bulk cargo including various other requirements such as break bulk.",
  },
  {
    image: "/assets/img/logistics-service.jpg",
    title: "Logistics",
    description:
      "Let us simplify and connect your supply chain from end to end with our comprehensive logistics management solutions.",
  },
  {
    image: "/assets/img/cargo-service.jpg",
    title: "Cargo",
    description:
      "Our Cargo Setups, adjacent to all terminals, are open 24/7 providing safe and speedy dispatch and delivery of cargo consignments to our clients.",
  },
  {
    image: "/assets/img/trucking-service.jpg",
    title: "Trucking",
    description:
      "Our loyal fleet of over 600,000 independent truckers is always ready to roll for your delivery and distribution needs.",
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
      "HRZ designs customised warehouse logistics solutions for your business model and your operations. We attach great importance to flexibility and transparency.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-hrz-blue py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hrz-red/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-hrz-red/5 rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 leading-tight text-balance">
              Our Services
            </h1>
            <p className="text-background/60 mt-5 text-lg leading-relaxed">
              We store a vast array of inventory for our clients and our
              warehouse storage and distribution services are unique to each
              client.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-hrz-light py-3 border-b border-border/50">
        <div className="container mx-auto px-6">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/"
                className="hover:text-hrz-red transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-muted-foreground/40">/</li>
            <li className="text-hrz-blue font-medium">Services</li>
          </ol>
        </div>
      </nav>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
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
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Need a custom solution? Let us know about your requirements.
            </p>
            <Button
              asChild
              className="bg-hrz-red hover:bg-hrz-red/90 text-background rounded-lg px-8 h-12 text-base font-medium shadow-lg shadow-hrz-red/20"
            >
              <Link href="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
