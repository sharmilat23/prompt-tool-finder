import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: string;
  rating: number;
  logo?: string;
}

export const ToolCard = ({ id, name, description, category, pricing, rating }: ToolCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-border overflow-hidden h-full flex flex-col">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shrink-0">
              {name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg line-clamp-1">{name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">{category}</Badge>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                  <span className="font-medium">{rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
          <Button size="icon" variant="ghost" className="shrink-0">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <CardDescription className="line-clamp-2 flex-1">
          {description}
        </CardDescription>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <Badge variant="outline" className="font-medium">
            {pricing}
          </Badge>
          <Link to={`/tools/${id}`}>
            <Button size="sm" variant="ghost" className="gap-2 group-hover:text-primary transition-colors">
              View Details
              <ExternalLink className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
