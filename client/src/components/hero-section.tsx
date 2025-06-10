import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-spillbox-blue min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern office team collaboration" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-spillbox-blue/50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat text-white mb-6 leading-tight">
            Empowering Brands.<br />
            <span className="text-spillbox-red">Crafting Innovation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are home to premium niche brands in decor, rituals, education & lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection('brands')}
              className="bg-white text-spillbox-blue px-8 py-4 rounded-full font-semibold font-poppins text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <i className="fas fa-store mr-2"></i>Explore Brands
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-2 border-white text-spillbox-blue px-8 py-4 rounded-full font-semibold font-poppins text-lg hover:bg-white hover:text-spillbox-blue transition-all duration-300 transform hover:scale-105"
              size="lg"
            >
              <i className="fas fa-info-circle mr-2"></i>About Spillbox
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
