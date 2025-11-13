import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp, Share2, Plus } from "lucide-react";

const Community = () => {
  // Mock data - will be replaced with real data from database
  const posts = [
    {
      id: "1",
      author: "Sarah Chen",
      avatar: "SC",
      title: "New AI Tool Discovery: DesignMate",
      content: "Just found this amazing AI design tool that generates complete UI kits from text descriptions. Has anyone else tried it? Would love to hear your thoughts!",
      category: "Tool Discovery",
      likes: 24,
      comments: 8,
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      author: "Alex Rodriguez",
      avatar: "AR",
      title: "Best Prompts for Code Generation",
      content: "After months of experimenting, here are my top 5 prompts for getting clean, production-ready code from AI assistants. Let me know if you want me to share the full list!",
      category: "Tips & Tricks",
      likes: 56,
      comments: 15,
      timestamp: "5 hours ago"
    },
    {
      id: "3",
      author: "Emily Watson",
      avatar: "EW",
      title: "AI Tools Comparison: ChatGPT vs Claude",
      content: "Spent the last week testing both for various tasks. Here's my detailed comparison for content writing, coding, and creative work...",
      category: "Reviews",
      likes: 89,
      comments: 32,
      timestamp: "1 day ago"
    },
    {
      id: "4",
      author: "Michael Kim",
      avatar: "MK",
      title: "How I Use AI to 10x My Productivity",
      content: "My complete workflow integrating 5 different AI tools. From planning to execution, here's how AI helps me accomplish in 2 hours what used to take a full day.",
      category: "Workflow",
      likes: 134,
      comments: 41,
      timestamp: "1 day ago"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Community</h1>
                <p className="text-muted-foreground text-lg">
                  Share discoveries, tips, and insights with fellow AI enthusiasts
                </p>
              </div>
              <Button className="bg-gradient-primary text-white border-0 shadow-hover hover:shadow-card transition-all gap-2 shrink-0">
                <Plus className="h-4 w-4" />
                New Post
              </Button>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-hover transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-10 h-10 shrink-0">
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold">{post.author}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                          <Badge variant="secondary" className="ml-auto shrink-0">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="mt-2 text-xl">{post.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {post.content}
                    </CardDescription>
                    
                    <div className="flex items-center gap-6 pt-2 border-t border-border">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <p className="font-medium text-foreground">✨ Share discoveries</p>
                  <p>Help others find amazing tools and prompts</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">🤝 Be respectful</p>
                  <p>Treat all community members with kindness</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">💡 Provide value</p>
                  <p>Share insights, tips, and helpful content</p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">🚫 No spam</p>
                  <p>Keep promotional content to a minimum</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">#AI-Tools</span>
                  <Badge variant="secondary">156 posts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">#Prompts</span>
                  <Badge variant="secondary">89 posts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">#Productivity</span>
                  <Badge variant="secondary">67 posts</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">#Reviews</span>
                  <Badge variant="secondary">45 posts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
