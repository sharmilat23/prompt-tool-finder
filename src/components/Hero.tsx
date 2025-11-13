import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            🚀 Discover 1000+ AI Tools
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Discover the Right{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Tool</span>
            {" "}for Any Task
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore curated AI tools, powerful prompts, and community insights to supercharge your workflow
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-2 p-2 bg-card rounded-xl shadow-card border border-border">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search AI tools, prompts, or categories..." 
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button className="bg-gradient-primary text-white border-0 shadow-hover hover:shadow-card transition-all">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-muted-foreground">Prompts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10K+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
