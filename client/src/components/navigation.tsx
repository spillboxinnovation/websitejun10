import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNav = (sectionId: string) => {
    if (location !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" aria-label="Home">
              <img 
                src="/src/assets/Company_logo/Spillbox.png" 
                alt="Spillbox Innovation Logo" 
                className="h-10 mr-2 cursor-pointer"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNav('brands')}
              className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium"
            >
              Brands
            </button>
            <button 
              onClick={() => handleNav('about')}
              className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNav('wholesale')}
              className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium"
            >
              Wholesale
            </button>
            <button 
              onClick={() => handleNav('team')}
              className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => handleNav('contact')}
              className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium"
            >
              Contact
            </button>
            <Link 
              to="/joinus"
              className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium"
            >
              Join us
            </Link>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-spillbox-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNav('brands')}
                className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium text-left"
              >
                Brands
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNav('wholesale')}
                className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium text-left"
              >
                Wholesale
              </button>
              <button 
                onClick={() => handleNav('team')}
                className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium text-left"
              >
                Team
              </button>
              <button 
                onClick={() => handleNav('contact')}
                className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Link 
                to="/#joinus"
                className="text-spillbox-dark hover:text-spillbox-blue transition-colors font-medium text-left"
              >
                Join us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
