import { Check, X, Minus } from "lucide-react";

const competitors = ["mabl", "Leapwork", "Testim", "Katalon"];

const comparisons = [
  {
    feature: "Starting Price",
    blockqa: "$60/mo",
    competitors: ["$400+/mo", "$2000+/mo", "$450+/mo", "$200+/mo"],
  },
  {
    feature: "Per-User Charges",
    blockqa: "none",
    competitors: ["yes", "yes", "yes", "yes"],
    isBoolean: true,
    blockqaBool: false,
    competitorsBool: [true, true, true, true],
  },
  {
    feature: "Unlimited Users",
    blockqa: "included",
    competitors: ["no", "no", "no", "no"],
    isBoolean: true,
    blockqaBool: true,
    competitorsBool: [false, false, false, false],
  },
  {
    feature: "Multi-Browser",
    blockqa: "included",
    competitors: ["paid", "paid", "paid", "paid"],
    isBoolean: true,
    blockqaBool: true,
    competitorsBool: [false, false, false, false],
  },
  {
    feature: "Parallel Execution",
    blockqa: "included",
    competitors: ["limited", "extra", "paid", "paid"],
    isBoolean: true,
    blockqaBool: true,
    competitorsBool: [false, false, false, false],
  },
  {
    feature: "No-Code Required",
    blockqa: "true",
    competitors: ["medium", "low-med", "medium", "medium"],
    isBoolean: true,
    blockqaBool: true,
    competitorsBool: [false, false, false, false],
  },
  {
    feature: "Setup Time",
    blockqa: "Minutes",
    competitors: ["Days", "Days", "Days", "Days"],
  },
  {
    feature: "24/7 Support",
    blockqa: "included",
    competitors: ["extra", "limited", "limited", "limited"],
    isBoolean: true,
    blockqaBool: true,
    competitorsBool: [false, false, false, false],
  },
  {
    feature: "Best For",
    blockqa: "Everyone",
    competitors: ["Enterprise", "Enterprise", "Engineers", "QA Teams"],
  },
];

const ComparisonTable = () => {
  return (
    <section id="comparison" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Comparison
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            See How We
            <span className="gradient-text-accent"> Stack Up</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Enterprise-level capabilities at a fraction of the cost.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 sm:p-6 font-display font-semibold text-base sm:text-lg">Feature</th>
                    <th className="p-4 sm:p-6 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm sm:text-base">
                          BlockQA
                        </span>
                      </div>
                    </th>
                    {competitors.map((comp) => (
                      <th key={comp} className="p-4 sm:p-6 text-center text-muted-foreground font-medium text-sm sm:text-base">
                        {comp}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="p-4 sm:p-6 font-medium text-sm sm:text-base">{row.feature}</td>
                      <td className="p-4 sm:p-6 text-center">
                        {row.isBoolean ? (
                          row.blockqaBool ? (
                            <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto" />
                          ) : (
                            <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive mx-auto" />
                          )
                        ) : (
                          <span className="text-accent font-semibold text-sm sm:text-base">{row.blockqa}</span>
                        )}
                      </td>
                      {row.competitors.map((val, i) => (
                        <td key={i} className="p-4 sm:p-6 text-center text-muted-foreground text-sm">
                          {row.isBoolean ? (
                            row.competitorsBool?.[i] ? (
                              <X className="w-5 h-5 text-destructive/70 mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-muted-foreground mx-auto" />
                            )
                          ) : (
                            val
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {comparisons.map((row, index) => (
            <div key={index} className="glass-card p-4">
              <h3 className="font-display font-semibold text-base mb-3">{row.feature}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <span className="text-xs text-primary font-medium block mb-1">BlockQA</span>
                  {row.isBoolean ? (
                    row.blockqaBool ? (
                      <Check className="w-5 h-5 text-accent" />
                    ) : (
                      <X className="w-5 h-5 text-destructive" />
                    )
                  ) : (
                    <span className="text-accent font-semibold text-sm">{row.blockqa}</span>
                  )}
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <span className="text-xs text-muted-foreground block mb-1">Others</span>
                  <span className="text-muted-foreground text-sm">{row.competitors[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
