import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 block-pattern opacity-30" />
      <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 opacity-50" />
      
      {/* Floating Blocks */}
      <div className="floating-block w-16 h-16 top-1/4 left-[10%] opacity-60" style={{ animationDelay: '0s' }} />
      <div className="floating-block w-12 h-12 top-1/3 right-[15%] opacity-40" style={{ animationDelay: '1s' }} />
      <div className="floating-block w-20 h-20 bottom-1/4 left-[20%] opacity-30" style={{ animationDelay: '2s' }} />
      <div className="floating-block w-14 h-14 bottom-1/3 right-[10%] opacity-50" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 sm:mb-8 animate-slide-up opacity-0">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">No-Code QA Revolution</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 animate-slide-up opacity-0 animate-delay-100">
            Automate Testing
            <br />
            <span className="gradient-text">Without Writing Code</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 animate-slide-up opacity-0 animate-delay-200 px-4">
            Automate repetitive testing tasks easily without coding in less time. 
            Built on Google Blockly & Microsoft Playwright.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 animate-slide-up opacity-0 animate-delay-300 px-4">
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              Start Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto group">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto animate-slide-up opacity-0 animate-delay-400 px-4">
            <div className="glass-card p-4 sm:p-6 glow-effect">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-2xl sm:text-3xl font-display font-bold gradient-text">70%</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Faster Test Creation</p>
            </div>
            <div className="glass-card p-4 sm:p-6 glow-effect">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-2xl sm:text-3xl font-display font-bold gradient-text-accent">80%</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Cost Savings</p>
            </div>
            <div className="glass-card p-4 sm:p-6 glow-effect">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-2xl sm:text-3xl font-display font-bold gradient-text">Minutes</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Setup Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
