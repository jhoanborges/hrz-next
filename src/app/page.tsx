import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PackageOpen,
  Truck,
  BoxesIcon,
  ArrowRight,
  Check,
} from "lucide-react";
import StatsCounter from "@/components/stats-counter";

const featuredServices = [
  {
    icon: PackageOpen,
    title: "Warehousing",
    description:
      "More than just storage, our warehouses are your supply chain pit-stop, expertly designed to keep your products flowing through the supply chain at a pace of your choosing. Lean, efficient and highly compliant with a host of value-added services, we have warehouses in over 50 countries.",
  },
  {
    icon: Truck,
    title: "Distribution services",
    description:
      "Perfectly complementing our warehouses, take advantage of our extensive distribution network for product deliveries to your end customer; whether it be DC, wholesaler, retail store or end-consumer. We are set up to cater for Full Truck Loads, Less than Truck Loads or parcel delivery.",
  },
  {
    icon: BoxesIcon,
    title: "Value added services",
    description:
      "Save time and costs by customising on the go. Everything from scanning and labelling to product customisation and late localisation, our warehouse operations can offer a vast array of value-added services to give you the ultimate flexibility.",
  },
];

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

const features = [
  {
    image: "/assets/img/warehousing-service.jpg",
    title: "Warehouse Management System",
    subtitle:
      "We can control our warehouse's entire inbound inventory process in México through this warehouse management system.",
    items: ["Warehouse.", "Crossdock Services.", "Logistics management."],
    reverse: false,
  },
  {
    image: "/assets/img/storage-service.jpg",
    title: "Engineering and management of a logistics project",
    subtitle:
      "Is your aim to optimise the management of your production sites and warehouses? We offer you customised and secure solutions, adapted to the specifics of your industry.",
    items: [
      "Engineering and design of optimised solutions",
      "Staff training of GEFCO operations",
      "Implementation of GEFCO quality standards, definition of performance indicators",
      "Stock management, warehousing and value-added services",
      "Stock management and order preparation",
      "Management of shipments",
      "Maintenance of the installations",
    ],
    reverse: true,
  },
  {
    image: "/assets/img/trucking-service.jpg",
    title: "Optimise your distribution",
    subtitle:
      "To ensure products availability at your points of sale and customers, we implement dedicated or shared logistics solutions to optimise your costs:",
    items: [
      "Reception and quality control",
      "Optimisation and management of customs operations",
      "Storage",
      "Stock management",
      "Order preparation",
      "Delayed differentiation",
      "Management of your promotional operations",
      "Management and preparation of shipments",
    ],
    reverse: false,
  },
  {
    image: "/assets/img/features-4.jpg",
    title: "Engineering and management of a logistics project",
    subtitle: "Benefit from operational support to implement the most adapted solution",
    description:
      "Our engineering and project management department designs with you the most adapted solution for your inbound and outbound challenges. Our department is made up of logistics, transport and IT engineers helping to achieve the most robust and competitive solutions. We also rely on Human Ressources and legal expertise to support with the transferring of staff.",
    items: [],
    reverse: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-hrz-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hrz-blue mb-4">
                Warehousing and Distribution
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                HRZ takes care of your end-to-end warehousing and distribution
                logistics, from our strategic network of storage facilities;
                capable to fulfill your customer&apos;s demands.
              </p>

              <StatsCounter />
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="/img/warehouse.png"
                alt="Warehouse"
                width={600}
                height={400}
                className="w-full max-w-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-hrz-red/10 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-hrz-red" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-hrz-blue mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm text-hrz-red hover:underline mt-2"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-hrz-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-hrz-red font-medium">Our Services</span>
            <h2 className="text-3xl font-bold text-hrz-blue mt-2">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <Link href="/services" className="hover:text-hrz-red transition-colors">
                      {service.title}
                    </Link>
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

      {/* CTA Section */}
      <section className="relative bg-hrz-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Local expertise, global coverage
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Present in over 50 countries and backed by our extensive ocean
            network, our teams of local experts-on-the-ground are ready to
            advise you on the best solution for your business.
          </p>
          <Button asChild size="lg" className="bg-hrz-red hover:bg-hrz-red/90 text-white">
            <Link href="/contact">Quote now</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                feature.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-hrz-blue mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground italic mb-4">
                  {feature.subtitle}
                </p>
                {"description" in feature && feature.description && (
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                )}
                {feature.items.length > 0 && (
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-hrz-red flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
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
      </section>
    </>
  );
}
