import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      
      {/* Floating Blocks */}
      <div className="floating-block w-16 h-16 top-1/4 left-[5%] opacity-40" style={{ animationDelay: '0s' }} />
      <div className="floating-block w-12 h-12 bottom-1/4 right-[10%] opacity-30" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 md:p-16 text-center glow-effect border-primary/30">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <Blocks className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Your
              <br />
              <span className="gradient-text">QA Automation?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Join hundreds of teams who have already made the switch to no-code automation. 
              Start your free trial today — no cost.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </div>
            
            <p className="mt-6 text-xs sm:text-sm text-muted-foreground">
              free trial • No cost • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
