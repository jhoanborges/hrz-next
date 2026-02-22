import { Globe, Shield, Clock, Truck } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "Present in over 50 countries with warehouses strategically located near major ports and transportation hubs.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description:
      "State-of-the-art security systems and full regulatory compliance to protect your valuable inventory at every step.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description:
      "Round-the-clock operations ensure your goods are always moving, with real-time tracking and dedicated support.",
  },
  {
    icon: Truck,
    title: "Flexible Solutions",
    description:
      "From full truck loads to parcel delivery, we tailor our solutions to match your specific business requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
              Why HRZ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-hrz-blue mt-3 leading-tight text-balance">
              Why Choose Us as Your Logistics Partner
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-lg">
              We approach warehouse design as a science which needs an in-depth
              knowledge of the entire supply chain to implement successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl border border-border/50 hover:border-hrz-red/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-hrz-red/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-hrz-red" />
                </div>
                <h3 className="font-semibold text-hrz-blue mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
