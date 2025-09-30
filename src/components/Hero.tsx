import { Button } from "@/components/ui/button";
import { Search, Star, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional service providers" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-success/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find & Book
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Connect with verified professionals for massage, fitness training, tutoring, and more. 
            Book instantly with secure payments and escrow protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Search className="w-5 h-5" />
              Find Services
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              <Users className="w-5 h-5" />
              Become a Provider
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-medium">Verified Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span className="font-medium">Trusted Providers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-success/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;