import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, CheckCircle } from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Sarah Johnson",
    service: "Massage Therapy",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    location: "Downtown",
    verified: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=200&fit=crop&crop=face",
    specialties: ["Deep Tissue", "Swedish", "Sports"]
  },
  {
    id: 2,
    name: "Marcus Chen",
    service: "Personal Training",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 75,
    location: "Midtown",
    verified: true,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop&crop=face",
    specialties: ["Strength", "HIIT", "Nutrition"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    service: "Language Tutoring",
    rating: 5.0,
    reviews: 203,
    hourlyRate: 50,
    location: "Online",
    verified: true,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=200&fit=crop&crop=face",
    specialties: ["Spanish", "French", "English"]
  }
];

const FeaturedProviders = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Providers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Top-rated professionals ready to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider) => (
            <Card key={provider.id} className="overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
              <div className="relative">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width="400"
                  height="200"
                />
                {provider.verified && (
                  <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{provider.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{provider.rating}</span>
                    <span className="text-muted-foreground text-sm">({provider.reviews})</span>
                  </div>
                </div>

                <p className="text-primary font-medium mb-3">{provider.service}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {provider.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    ${provider.hourlyRate}/hr
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {provider.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full" variant="default">
                  View Profile & Book
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Providers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;