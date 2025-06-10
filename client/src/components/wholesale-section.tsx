import { Button } from "@/components/ui/button";

export default function WholesaleSection() {
  return (
    <section id="wholesale" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business handshake representing partnership opportunities" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
              Wholesale Opportunities
            </h2>
            <p className="text-lg text-spillbox-dark mb-8 leading-relaxed">
              We offer bulk pricing, fast delivery, and support for businesses looking to stock or resell our wide range of products. Trusted by wholesalers across India.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-check-circle text-spillbox-red mr-3"></i>
                <span className="text-spillbox-dark">Competitive bulk pricing</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-spillbox-red mr-3"></i>
                <span className="text-spillbox-dark">Fast nationwide delivery</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-spillbox-red mr-3"></i>
                <span className="text-spillbox-dark">Dedicated business support</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle text-spillbox-red mr-3"></i>
                <span className="text-spillbox-dark">Quality assurance guarantee</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button asChild className="w-full bg-spillbox-blue text-white hover:bg-blue-700">
                <a href="https://g.co/kgs/2CShm8m" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-map-marker-alt mr-2"></i>Visit Our Store
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full border-spillbox-blue text-spillbox-blue hover:bg-spillbox-blue hover:text-white">
                <a href="https://www.indiamart.com/spillboxinnovation/" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-store mr-2"></i>IndiaMART Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
