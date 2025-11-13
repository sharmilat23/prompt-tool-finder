import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ExternalLink, Bookmark, Users, DollarSign, Zap } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const ToolDetail = () => {
  const { id } = useParams();

  // Mock data - will be replaced with real data from database
  const tool = {
    id: id || "1",
    name: "ChatGPT",
    description: "ChatGPT is an advanced AI assistant powered by OpenAI's GPT-4 model. It can help with conversations, writing, coding, creative tasks, and much more with natural language understanding.",
    category: "Writing",
    pricing: "Freemium",
    rating: 4.8,
    reviews: 1245,
    users: "100M+",
    link: "https://chat.openai.com",
    features: [
      "Natural language conversations",
      "Code generation and debugging",
      "Creative writing assistance",
      "Data analysis and insights",
      "Multi-language support",
      "Image generation (with DALL-E)"
    ],
    pricingDetails: [
      { tier: "Free", price: "$0", features: ["Basic access", "Limited messages", "Standard response time"] },
      { tier: "Plus", price: "$20/mo", features: ["Unlimited messages", "Priority access", "GPT-4 access", "Faster response"] },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/tools">
          <Button variant="ghost" className="mb-6">
            ← Back to Tools
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl shrink-0">
                  {tool.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">{tool.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-semibold">{tool.rating}</span>
                      <span className="text-muted-foreground text-sm">({tool.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{tool.users} users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pricing Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-accent" />
                  Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.pricingDetails.map((tier, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg">{tier.tier}</h3>
                        <p className="text-2xl font-bold text-primary">{tier.price}</p>
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="pt-6 space-y-4">
                <Button className="w-full bg-gradient-primary text-white border-0 shadow-hover hover:shadow-card transition-all gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Bookmark className="h-4 w-4" />
                  Save to Favorites
                </Button>
                
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <Badge variant="secondary">{tool.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pricing Model</span>
                    <Badge variant="outline">{tool.pricing}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span className="font-medium">{tool.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
