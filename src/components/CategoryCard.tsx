import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  count: number;
  icon: LucideIcon;
  color: string;
}

export const CategoryCard = ({ name, count, icon: Icon, color }: CategoryCardProps) => {
  return (
    <Link to={`/tools?category=${encodeURIComponent(name)}`}>
      <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer bg-gradient-card border-border overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${color} shrink-0`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {count} tools
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
