import { Blocks, Eye, Users, Zap, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Blocks,
    title: "Visual Block-Based Design",
    description: "Drag and drop test blocks to create complex automation flows. No coding, no syntax errors, just visual logic.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Eye,
    title: "Human-Readable Tests",
    description: "Anyone can read, understand, and modify tests. Perfect for collaboration between QA and product teams.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Users,
    title: "Built for Manual Testers",
    description: "Transform your manual QA team into automation experts without months of training.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Powered by Playwright",
    description: "Enterprise-grade automation engine under the hood. Multi-browser support, parallel execution, reliability.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Clock,
    title: "Minutes to First Test",
    description: "Go from zero to your first automated test in minutes, not weeks. No setup complexity.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Shield,
    title: "Self-Healing Tests",
    description: "Smart locators that adapt to UI changes. Spend less time maintaining tests.",
    gradient: "from-accent to-accent/50",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            The Solution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            What Makes
            <span className="gradient-text"> BlockQA Different</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            A true no-code platform that empowers everyone to automate, 
            without sacrificing power or reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 group glow-effect hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
