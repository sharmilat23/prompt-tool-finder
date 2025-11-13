import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Search, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Prompts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Mock data - will be replaced with real data from database
  const prompts = [
    {
      id: "1",
      title: "Professional Email Writer",
      description: "Write a professional email about [topic] to [recipient] with a [tone] tone",
      category: "Writing",
      prompt: "I need you to write a professional email about [TOPIC] to [RECIPIENT]. The tone should be [TONE]. Include a clear subject line and ensure the email is concise yet comprehensive."
    },
    {
      id: "2",
      title: "Code Review Assistant",
      description: "Get detailed code review feedback with improvement suggestions",
      category: "Development",
      prompt: "Please review the following code and provide: 1) Potential bugs or issues 2) Performance improvements 3) Best practices recommendations 4) Security considerations. Here's the code: [CODE]"
    },
    {
      id: "3",
      title: "Social Media Post Generator",
      description: "Create engaging social media posts for any platform",
      category: "Marketing",
      prompt: "Create an engaging social media post for [PLATFORM] about [TOPIC]. Include relevant hashtags, keep it within character limits, and make it attention-grabbing. Target audience: [AUDIENCE]"
    },
    {
      id: "4",
      title: "Image Generation Prompt",
      description: "Craft detailed prompts for AI image generation tools",
      category: "Design",
      prompt: "Create a detailed image generation prompt for [SUBJECT]. Include: style (realistic/artistic/etc), lighting, composition, color palette, mood, and any specific details. Output format: [FORMAT]"
    },
    {
      id: "5",
      title: "Meeting Summary Creator",
      description: "Transform meeting notes into actionable summaries",
      category: "Productivity",
      prompt: "Summarize these meeting notes into: 1) Key discussion points 2) Decisions made 3) Action items with owners 4) Follow-up tasks. Format it in a professional, easy-to-scan layout. Notes: [NOTES]"
    },
    {
      id: "6",
      title: "Learning Plan Generator",
      description: "Create structured learning paths for any skill",
      category: "Education",
      prompt: "Create a comprehensive learning plan for mastering [SKILL]. Include: 1) Prerequisites 2) Learning phases with timeframes 3) Resources for each phase 4) Practice projects 5) Milestones. Current level: [LEVEL]"
    },
  ];

  const filteredPrompts = prompts.filter(prompt => 
    prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    toast.success("Prompt copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">AI Prompts Library</h1>
          <p className="text-muted-foreground text-lg">
            Curated prompts to get the most out of AI tools
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="flex items-center gap-2 px-4 bg-card rounded-lg shadow-subtle border border-border max-w-2xl">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Search prompts by title, description, or category..." 
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredPrompts.length}</span> prompts
          </p>
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <Card key={prompt.id} className="hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl">{prompt.title}</CardTitle>
                    <Badge variant="secondary">{prompt.category}</Badge>
                  </div>
                  <Button 
                    size="icon" 
                    variant="ghost"
                    onClick={() => handleCopy(prompt.prompt, prompt.id)}
                    className="shrink-0"
                  >
                    {copiedId === prompt.id ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <CardDescription>{prompt.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                    {prompt.prompt}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPrompts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No prompts found matching your search</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prompts;
