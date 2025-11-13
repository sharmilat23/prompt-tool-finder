import { Navigation } from "@/components/Navigation";
import { ToolCard } from "@/components/ToolCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const Tools = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [pricingFilter, setPricingFilter] = useState("all");

  // Mock data - will be replaced with real data from database
  const allTools = [
    {
      id: "1",
      name: "ChatGPT",
      description: "Advanced AI assistant for conversations, writing, coding, and creative tasks",
      category: "Writing",
      pricing: "Freemium",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Midjourney",
      description: "AI-powered art generation tool that creates stunning images from text",
      category: "Design",
      pricing: "Subscription",
      rating: 4.9,
    },
    {
      id: "3",
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster",
      category: "Development",
      pricing: "Subscription",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Jasper AI",
      description: "AI content platform for creating marketing copy and blog posts",
      category: "Writing",
      pricing: "Paid",
      rating: 4.6,
    },
    {
      id: "5",
      name: "DALL-E 3",
      description: "Create realistic images and art from natural language descriptions",
      category: "Design",
      pricing: "Freemium",
      rating: 4.8,
    },
    {
      id: "6",
      name: "Notion AI",
      description: "AI-powered workspace assistant for writing and organizing",
      category: "Productivity",
      pricing: "Freemium",
      rating: 4.5,
    },
    {
      id: "7",
      name: "Grammarly",
      description: "AI writing assistant that helps improve your writing quality",
      category: "Writing",
      pricing: "Freemium",
      rating: 4.7,
    },
    {
      id: "8",
      name: "Canva AI",
      description: "Design platform with AI-powered features for creating graphics",
      category: "Design",
      pricing: "Freemium",
      rating: 4.6,
    },
  ];

  // Filter tools based on search and filters
  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || tool.category === categoryFilter;
    const matchesPricing = pricingFilter === "all" || tool.pricing === pricingFilter;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI Tools Directory</h1>
          <p className="text-muted-foreground text-lg">
            Discover and compare {allTools.length}+ AI tools for every task
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 flex items-center gap-2 px-4 bg-card rounded-lg shadow-subtle border border-border">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search tools by name or description..." 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Writing">Writing</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
                <SelectItem value="Productivity">Productivity</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>

            <Select value={pricingFilter} onValueChange={setPricingFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing</SelectItem>
                <SelectItem value="Free">Free</SelectItem>
                <SelectItem value="Freemium">Freemium</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Subscription">Subscription</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredTools.length}</span> tools
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No tools found matching your criteria</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
                setPricingFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;
