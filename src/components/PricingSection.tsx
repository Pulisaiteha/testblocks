import { Button } from "@/components/ui/button";
import { Check, Github } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="hero-glow top-0 right-0 opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Free & <span className="gradient-text">Open Source</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            No subscriptions. No limits. No lock-in.  
            Build, automate, and scale — completely free.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div className="glass-card p-6 sm:p-8 relative glow-effect transition-all duration-300 hover:scale-[1.02] border-primary/50">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                Community & Enterprise
              </h3>

              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="font-display text-5xl sm:text-6xl font-bold gradient-text">
                  Free
                </span>
                {/* <span className="text-muted-foreground text-base">
                  forever
                </span> */}
              </div>

              <p className="text-sm text-muted-foreground">
                Fully open-source no-code automation platform for testers and teams.
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-8">
              {[
                "Unlimited test creation",
                "Unlimited users",
                "Multi-browser testing",
                "Parallel execution",
                "Custom Python blocks",
                "CI/CD integrations",
                "Local & offline execution",
                "No vendor lock-in",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="hero"
              size="lg"
              className="w-full gap-2"
              asChild
            >
              <a href="https://github.com/Pulisaiteha/NO_CODE_AUTOMATION_TOOL" target="_blank">
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Contributions welcome • Built by the community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
