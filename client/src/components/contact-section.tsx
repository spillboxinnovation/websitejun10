import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-spillbox-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to partner with us or have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-spillbox-red mr-4 mt-1"></i>
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <div className="text-white/90">
                    2/852, Opp Viveks Warehouse,<br />
                    Manapakkam, Mugalivakkam Main Rd,<br />
                    Mugalivakkam, Chennai, Tamil Nadu 600125
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-store text-spillbox-red mr-4 mt-1"></i>
                <div>
                  <div className="font-semibold mb-1">Visit Our Store</div>
                  <a 
                    href="https://g.co/kgs/2CShm8m" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-briefcase text-spillbox-red mr-4 mt-1"></i>
                <div>
                  <div className="font-semibold mb-1">Wholesale Inquiries</div>
                  <a 
                    href="https://www.indiamart.com/spillboxinnovation/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors underline"
                  >
                    IndiaMART Profile
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fab fa-linkedin text-spillbox-red mr-4 mt-1"></i>
                <div>
                  <div className="font-semibold mb-1">Connect on LinkedIn</div>
                  <div className="space-y-1">
                    <a 
                      href="https://www.linkedin.com/in/sathya-rajesh-a0ab7620/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white/90 hover:text-white transition-colors underline"
                    >
                      Sathya Rajesh - Managing Director
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/velusamy-nallusamy-31240b31/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-white/90 hover:text-white transition-colors underline"
                    >
                      Velusamy Nallusamy - Head Operations
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3452538000003!2d80.15000000000001!3d13.010000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzM2LjAiTiA4MMKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v0!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <div className="p-4 text-center">
                <Button asChild className="bg-white text-spillbox-blue hover:bg-gray-100">
                  <a href="https://maps.app.goo.gl/BxTcAPPVWqEUEM4p6" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Open in Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
