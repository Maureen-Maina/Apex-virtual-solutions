import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
}

const ServiceCard = ({ icon: Icon, title, description, items }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
