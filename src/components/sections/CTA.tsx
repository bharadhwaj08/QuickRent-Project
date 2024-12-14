import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Renting?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of happy customers who rent with confidence
        </p>
        <Button variant="secondary" size="lg">
          Browse Devices
        </Button>
      </div>
    </section>
  );
}