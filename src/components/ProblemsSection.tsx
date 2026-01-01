import { AlertTriangle, Code2, DollarSign, Clock, GraduationCap, Wrench } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Repetitive & Time-Consuming",
    description: "Manual testing is repetitive and takes far too long, slowing down releases",
  },
  {
    icon: GraduationCap,
    title: "Steep Learning Curve",
    description: "Selenium, Playwright, Java, JavaScript & Python require months to learn",
  },
  {
    icon: Code2,
    title: "Coding Errors",
    description: "High chance of human errors and time-consuming to identify and resolve coding issues",
  },
  {
    icon: DollarSign,
    title: "Expensive Experts",
    description: "Companies need to hire costly automation engineers for basic testing",
  },
  {
    icon: Wrench,
    title: "High Maintenance",
    description: "Constant script updates and framework maintenance drain resources",
  },
  {
    icon: AlertTriangle,
    title: "Not for Everyone",
    description: "Non-technical teams are completely excluded from automation",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            The Problem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            QA Automation is
            <span className="text-destructive"> Broken</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            The current tools were built for developers, makes difficult for QA teams. 
            This creates massive barriers to automation adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card p-5 sm:p-6 group hover:border-destructive/30 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
