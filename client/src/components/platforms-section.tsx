const platforms = [
  { name: "Amazon", logo: "https://i.ibb.co/2Yfw65C2/Amazon.png" },
  { name: "Flipkart", logo: "https://i.ibb.co/FbFDbKY1/Flipkart.png" },
  { name: "Meesho", logo: "https://i.ibb.co/hRGZG9WQ/Meesho.png" }
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
            Where We Sell
          </h2>
          <p className="text-xl text-spillbox-dark max-w-3xl mx-auto">
            Find our products on leading e-commerce platforms across India and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 items-center">
          {platforms.map((platform, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-spillbox-gray rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <img src={platform.logo} alt={platform.name} className="w-48 h-48 object-contain mb-2" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-spillbox-red text-white px-6 py-3 rounded-full font-semibold">
            <i className="fas fa-shield-alt mr-2"></i>
            Trusted by thousands of customers worldwide
          </div>
        </div>
      </div>
    </section>
  );
}
