import { Card } from "@/components/ui/card";
import { Camera, Headphones, Laptop, Smartphone } from "lucide-react";

const devices = [
  {
    icon: Laptop,
    title: "Laptops",
    description: "Premium laptops",
  },
  {
    icon: Smartphone,
    title: "Phones",
    description: "Latest smartphones",
  },
  {
    icon: Camera,
    title: "Cameras",
    description: "Pro cameras",
  },
  {
    icon: Headphones,
    title: "Audio",
    description: "Quality audio gear",
  },
] as const;

export function Devices() {
  return (
    <section id="devices" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Devices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}