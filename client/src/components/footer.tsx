export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-spillbox-gray text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 flex flex-col items-start">
            <img
              src="https://i.ibb.co/gLLtp3TN/Spillbox.png"
              alt="Spillbox Innovation Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-600 mb-4">
              Empowering brands and crafting innovation since 2019. Your trusted partner for premium products across multiple categories.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('brands')}
                className="block text-gray-600 hover:text-black transition-colors text-left"
              >
                Brands
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-600 hover:text-black transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('wholesale')}
                className="block text-gray-600 hover:text-black transition-colors text-left"
              >
                Wholesale
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-600 hover:text-black transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Follow Us</h4>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/company/spillbox-innovation-llp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                <i className="fab fa-linkedin mr-2"></i>LinkedIn
              </a>
              <a 
                href="https://www.amazon.in/stores/PUTRIKA/page/1719A047-9346-4C1A-9343-B288D8FA5373" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                <i className="fab fa-amazon mr-2"></i>Amazon
              </a>
              <a 
                href="https://www.flipkart.com/search?q=spillbox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                <i className="fas fa-store mr-2"></i>Flipkart
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-500 pt-8 text-center">
          <p className="text-gray-400">© 2025 Spillbox Innovation Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
