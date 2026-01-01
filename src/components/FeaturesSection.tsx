import { Blocks, Navigation, MousePointerClick, CheckCircle, Keyboard, Settings, Code, FileText, Zap, Shield } from "lucide-react";

const blockCategories = [
  {
    icon: Blocks,
    title: "Core Actions",
    description: "Essential blocks like Open URL, Click, Type, and Wait. The most commonly used actions for any test.",
    color: "bg-[hsl(142,50%,35%)]",
  },
  {
    icon: Navigation,
    title: "Navigation Blocks",
    description: "Go Back, Go Forward, Reload Page - simple navigation controls at your fingertips.",
    color: "bg-[hsl(270,50%,50%)]",
  },
  {
    icon: MousePointerClick,
    title: "Element Actions",
    description: "Select, Check, Uncheck, Hover, Right-click, Double-click - interact with any element easily.",
    color: "bg-[hsl(320,50%,45%)]",
  },
  {
    icon: CheckCircle,
    title: "Assertions",
    description: "Assert Text, Assert URL, Assert Element visibility - validate your tests with simple blocks.",
    color: "bg-[hsl(0,40%,45%)]",
  },
  {
    icon: Keyboard,
    title: "Keyboard Actions",
    description: "Press any key - Enter, Tab, Escape, Arrow keys and more. Full keyboard control.",
    color: "bg-[hsl(175,50%,35%)]",
  },
  {
    icon: Settings,
    title: "Utility Actions",
    description: "Take Screenshots, Set Values, Clear Inputs, Get Text, Wait for Elements.",
    color: "bg-[hsl(220,50%,45%)]",
  },
  {
    icon: Code,
    title: "Custom Python Block",
    description: "Need complex logic? Insert Python code directly for advanced scenarios - best of both worlds.",
    color: "bg-[hsl(25,50%,45%)]",
  },
  {
    icon: FileText,
    title: "Detailed Logs",
    description: "Real-time execution logs with timestamps. Easy debugging and step-by-step visibility.",
    color: "bg-[hsl(200,50%,40%)]",
  },
];

const highlights = [
  {
    icon: Zap,
    title: "Auto-Generated Playwright Code",
    description: "Your visual blocks automatically generate clean Playwright Python code - view and export anytime.",
  },
  {
    icon: Shield,
    title: "Local Setup for Security",
    description: "Run everything locally - your test data and scripts never leave your machine.",
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
            Drag. Drop.
            <span className="gradient-text"> Automate.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            No-code automation using visual blocks. Designed for manual testers, 
            automation testers & non-technical users. Generates Playwright code automatically.
          </p>
        </div>

        {/* Block Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16">
          {blockCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-5 sm:p-6 group glow-effect hover:scale-[1.02] transition-all duration-300"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${category.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 border-primary/30 glow-effect"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 sm:mb-5">
                <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {highlight.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
            How It <span className="gradient-text">Works</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
            <div className="glass-card px-6 py-4 text-center">
              <span className="text-primary font-bold text-lg">UI Blocks</span>
            </div>
            <span className="text-muted-foreground text-2xl hidden sm:block">→</span>
            <span className="text-muted-foreground text-2xl sm:hidden">↓</span>
            <div className="glass-card px-6 py-4 text-center">
              <span className="text-primary font-bold text-lg">Backend Engine</span>
            </div>
            <span className="text-muted-foreground text-2xl hidden sm:block">→</span>
            <span className="text-muted-foreground text-2xl sm:hidden">↓</span>
            <div className="glass-card px-6 py-4 text-center">
              <span className="text-primary font-bold text-lg">Playwright Execution</span>
            </div>
            <span className="text-muted-foreground text-2xl hidden sm:block">→</span>
            <span className="text-muted-foreground text-2xl sm:hidden">↓</span>
            <div className="glass-card px-6 py-4 text-center border-accent/50">
              <span className="text-accent font-bold text-lg">Logs & Reports</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
