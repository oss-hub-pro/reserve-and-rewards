import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Dumbbell, BookOpen, Home, Car, Briefcase, Camera, Wrench } from "lucide-react";

const categories = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Massage, yoga, therapy",
    count: "1,200+ providers",
    color: "text-pink-500"
  },
  {
    icon: Dumbbell,
    title: "Fitness & Training",
    description: "Personal trainers, coaches",
    count: "800+ providers",
    color: "text-orange-500"
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Tutoring, languages, skills",
    count: "950+ providers",
    color: "text-blue-500"
  },
  {
    icon: Home,
    title: "Home Services",
    description: "Cleaning, repairs, maintenance",
    count: "600+ providers",
    color: "text-green-500"
  },
  {
    icon: Camera,
    title: "Creative Services",
    description: "Photography, design, art",
    count: "400+ providers",
    color: "text-purple-500"
  },
  {
    icon: Briefcase,
    title: "Business Services",
    description: "Consulting, accounting, legal",
    count: "350+ providers",
    color: "text-indigo-500"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect service provider for your needs from our carefully curated categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0 cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-muted-foreground mb-2">{category.description}</p>
                  <span className="text-sm font-medium text-primary">{category.count}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;