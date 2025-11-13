import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ToolCard } from "@/components/ToolCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Zap, Palette, Code, MessageSquare, Image, FileText, Sparkles, TrendingUp } from "lucide-react";

const Index = () => {
  // Mock data for trending tools
  const trendingTools = [
    {
      id: "1",
      name: "ChatGPT",
      description: "Advanced AI assistant for conversations, writing, coding, and creative tasks with natural language understanding",
      category: "Writing",
      pricing: "Freemium",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Midjourney",
      description: "AI-powered art generation tool that creates stunning images from text descriptions",
      category: "Design",
      pricing: "Subscription",
      rating: 4.9,
    },
    {
      id: "3",
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with intelligent suggestions",
      category: "Development",
      pricing: "Subscription",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Jasper AI",
      description: "AI content platform for creating marketing copy, blog posts, and creative content at scale",
      category: "Writing",
      pricing: "Paid",
      rating: 4.6,
    },
    {
      id: "5",
      name: "DALL-E 3",
      description: "Create realistic images and art from natural language descriptions with OpenAI's latest model",
      category: "Design",
      pricing: "Freemium",
      rating: 4.8,
    },
    {
      id: "6",
      name: "Notion AI",
      description: "AI-powered workspace assistant that helps with writing, brainstorming, and organizing information",
      category: "Productivity",
      pricing: "Freemium",
      rating: 4.5,
    },
  ];

  // Categories with icons and colors
  const categories = [
    { name: "Writing", count: 245, icon: FileText, color: "bg-primary" },
    { name: "Design", count: 189, icon: Palette, color: "bg-secondary" },
    { name: "Development", count: 312, icon: Code, color: "bg-accent" },
    { name: "Marketing", count: 156, icon: TrendingUp, color: "bg-primary" },
    { name: "Productivity", count: 203, icon: Zap, color: "bg-secondary" },
    { name: "Communication", count: 134, icon: MessageSquare, color: "bg-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Trending Tools Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Trending Tools</h2>
              <p className="text-muted-foreground">Most popular AI tools this week</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Popular Categories</h2>
              <p className="text-muted-foreground">Explore tools by category</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-background/90" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Discover Your Perfect Tool?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users finding the best AI tools for their needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a href="/tools" className="inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-primary text-white h-11 px-8 shadow-hover hover:shadow-card">
                Browse All Tools
              </a>
              <a href="/prompts" className="inline-flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
                Explore Prompts
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
