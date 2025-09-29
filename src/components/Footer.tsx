import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, Shield, Users, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ServiceHub</h3>
            <p className="text-background/80">
              Connecting you with trusted professionals for all your service needs. 
              Safe, secure, and reliable.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Users className="w-4 h-4" />
                <span>10k+ Users</span>
              </div>
            </div>
          </div>

          {/* For Customers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">For Customers</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Browse Services</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Manage Bookings</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>

          {/* For Providers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">For Providers</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Become a Provider</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Provider Dashboard</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Payment & Earnings</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Provider Resources</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Verification Process</a></li>
            </ul>
          </div>

          {/* Trust & Safety */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Trust & Safety</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-sm text-background/80">Verified Providers</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-success" />
                <span className="text-sm text-background/80">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-success" />
                <span className="text-sm text-background/80">Reviewed Services</span>
              </div>
            </div>
            <Button variant="success" size="sm" className="mt-4">
              Learn More
            </Button>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/60 text-sm">
            © 2024 ServiceHub. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-background/80">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;