import { Card } from "@/components/ui/card";
import { Search, Calendar, CreditCard, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Compare",
    description: "Browse verified professionals in your area. Filter by service type, price, availability, and reviews.",
    color: "bg-blue-500"
  },
  {
    icon: Calendar,
    title: "Book Instantly",
    description: "Choose your preferred time slot and book directly through our secure platform. Get instant confirmation.",
    color: "bg-green-500"
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Pay securely with escrow protection. Your money is held safely until the service is completed.",
    color: "bg-purple-500"
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Share your experience and help other customers make informed decisions. Build trust in our community.",
    color: "bg-orange-500"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting the help you need has never been easier. Follow these simple steps to book your perfect service provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <Card className="p-8 hover:shadow-medium transition-all duration-300 bg-gradient-card border-0 relative overflow-hidden group">
                {/* Step number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>

        {/* Connect arrows for desktop */}
        <div className="hidden lg:block relative -mt-32 mb-16">
          <div className="flex justify-between items-center px-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-0.5 bg-gradient-to-r from-primary to-success opacity-30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;