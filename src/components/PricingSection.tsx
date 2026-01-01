import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$60",
    period: "/month",
    description: "Perfect for small teams getting started with automation",
    features: [
      "Unlimited test creation",
      "Up to 5 users included",
      "Multi-browser testing",
      "Parallel execution",
      "Email support",
      "Basic integrations",
    ],
    cta: "Start Free Trial",
    variant: "heroOutline" as const,
    popular: false,
  },
  {
    name: "Professional",
    price: "$120",
    period: "/month",
    description: "For growing teams that need more power and flexibility",
    features: [
      "Everything in Starter",
      "Unlimited users",
      "Advanced reporting",
      "CI/CD integrations",
      "Priority support",
      "Custom workflows",
      "API access",
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced security and scale needs",
    features: [
      "Everything in Professional",
      "SSO & SAML",
      "Dedicated support",
      "SLA guarantees",
      "On-premise option",
      "Custom training",
      "White-label option",
    ],
    cta: "Contact Sales",
    variant: "heroOutline" as const,
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="hero-glow top-0 right-0 opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            No hidden fees. No per-user charges. Just powerful automation at a fair price.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`glass-card p-6 sm:p-8 relative glow-effect transition-all duration-300 hover:scale-[1.02] ${
                tier.popular ? 'border-primary/50 scale-[1.02] md:scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs sm:text-sm font-semibold">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-3 sm:mb-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold gradient-text">{tier.price}</span>
                  <span className="text-muted-foreground text-sm sm:text-base">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={tier.variant} className="w-full" size="lg">
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Cost comparison callout */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 text-center border-accent/30">
            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Save up to <span className="gradient-text-accent">80%</span> compared to competitors
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
              A team of 20 users pays $2,000-$4,000/month with competitors. 
              With BlockQA, it's just $180-$240/month — same features, fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Competitors:</span>
                <span className="line-through text-destructive">$4,000/mo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">BlockQA:</span>
                <span className="text-accent font-bold text-lg">$240/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
