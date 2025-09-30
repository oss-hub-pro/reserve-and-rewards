import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const ServiceCategories = lazy(() => import("@/components/ServiceCategories"));
const FeaturedProviders = lazy(() => import("@/components/FeaturedProviders"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Suspense fallback={<div className="h-20" />}>
        <ServiceCategories />
      </Suspense>
      <Suspense fallback={<div className="h-20" />}>
        <FeaturedProviders />
      </Suspense>
      <Suspense fallback={<div className="h-20" />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
