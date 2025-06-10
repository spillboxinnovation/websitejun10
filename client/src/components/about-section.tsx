export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
              About Spillbox Innovation
            </h2>
            <p className="text-lg text-spillbox-dark mb-6 leading-relaxed">
              Established in 2019 in Chennai, Spillbox Innovation Pvt Ltd houses multiple niche brands offering a wide spectrum of high-quality products ranging from brass decor, homeware, and puja essentials to education kits and premium leather goods.
            </p>
            <p className="text-lg text-spillbox-dark mb-8 leading-relaxed">
              We are supported by a 25+ member team and serve customers globally, bringing innovation and quality to every product we create.
            </p>
            
            <div className="bg-spillbox-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold font-montserrat text-spillbox-blue mb-3">
                <i className="fas fa-map-marker-alt mr-2"></i>Our Location
              </h3>
              <p className="text-spillbox-dark">
                2/852, Opp Viveks Warehouse,<br />
                Manapakkam, Mugalivakkam Main Rd,<br />
                Mugalivakkam, Chennai, Tamil Nadu 600125
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://i.ibb.co/PvsbYPMX/inventory.jpg" 
              alt="Professional team working in modern office environment" 
              className="rounded-2xl shadow-xl w-full"
            />
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold font-montserrat text-spillbox-blue">2019</div>
                  <div className="text-sm text-spillbox-dark">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-montserrat text-spillbox-blue">25+</div>
                  <div className="text-sm text-spillbox-dark">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-montserrat text-spillbox-blue">7</div>
                  <div className="text-sm text-spillbox-dark">Brands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
