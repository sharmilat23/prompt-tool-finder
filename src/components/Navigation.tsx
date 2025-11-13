import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, Users, Home } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-primary bg-clip-text text-transparent">ToolHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link to="/tools" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              <Search className="h-4 w-4" />
              Tools
            </Link>
            <Link to="/prompts" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              <Sparkles className="h-4 w-4" />
              Prompts
            </Link>
            <Link to="/community" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              <Users className="h-4 w-4" />
              Community
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Log In</Button>
            <Button size="sm" className="bg-gradient-primary text-white border-0 shadow-hover hover:shadow-card transition-all">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
