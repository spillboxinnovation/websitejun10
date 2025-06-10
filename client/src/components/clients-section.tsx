const clientTypes = [
  { icon: "🏢", label: "Corporate Client" },
  { icon: "🏪", label: "Retail Partner" },
  { icon: "🌐", label: "Online Marketplace" },
  { icon: "🤝", label: "Distribution Partner" }
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-spillbox-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
            Our Clients
          </h2>
          <p className="text-xl text-spillbox-dark max-w-3xl mx-auto">
            Trusted by businesses across India & beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clientTypes.map((client, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl text-spillbox-blue mb-2">{client.icon}</div>
              <div className="text-sm text-spillbox-dark">{client.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
