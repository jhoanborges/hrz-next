import StatsCounter from "@/components/stats-counter";

export default function StatsSection() {
  return (
    <section className="py-20 lg:py-24 bg-hrz-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-hrz-red text-sm font-semibold uppercase tracking-wider">
            Our Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-background mt-3 text-balance">
            Numbers That Speak for Themselves
          </h2>
        </div>
        <div className="max-w-4xl mx-auto [&_*]:!text-background [&_.text-hrz-red]:!text-hrz-red [&_.text-hrz-red\\/70]:!text-hrz-red/70 [&_.text-muted-foreground]:!text-background/60">
          <StatsCounter />
        </div>
      </div>
    </section>
  );
}
