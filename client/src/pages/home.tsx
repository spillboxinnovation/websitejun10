import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import BrandsSection from "@/components/brands-section";
import AboutSection from "@/components/about-section";
import CategoriesSection from "@/components/categories-section";
import PlatformsSection from "@/components/platforms-section";
import TeamSection from "@/components/team-section";
import WholesaleSection from "@/components/wholesale-section";
import ClientsSection from "@/components/clients-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <CategoriesSection />
      <PlatformsSection />
      <TeamSection />
      <WholesaleSection />
      <div id="joinus"></div>
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
