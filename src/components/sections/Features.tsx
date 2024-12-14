import { Card } from "@/components/ui/card";
import { Clock, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Duration",
    description: "Rent for a day or a month",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage included",
  },
  {
    icon: Zap,
    title: "Latest Tech",
    description: "Access newest gadgets",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 text-center">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}