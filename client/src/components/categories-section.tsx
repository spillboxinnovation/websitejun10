const categories = [
  {
    name: "Brass Pooja Essentials",
    icon: "fas fa-hands-praying"
  },
  {
    name: "Home Décor & Utility",
    icon: "fas fa-home"
  },
  {
    name: "Leather Goods",
    icon: "fas fa-briefcase"
  },
  {
    name: "Educational Kits",
    icon: "fas fa-graduation-cap"
  },
  {
    name: "Cookware",
    icon: "fas fa-utensils"
  },
  {
    name: "DIY Paracord Tools",
    icon: "fas fa-tools"
  }
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-spillbox-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
            Product Categories
          </h2>
          <p className="text-xl text-spillbox-dark max-w-3xl mx-auto">
            From traditional essentials to modern innovations, we cover diverse product categories to meet all your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mb-4">
                <i className={`${category.icon} text-4xl text-spillbox-blue mb-3`}></i>
              </div>
              <h3 className="font-semibold font-montserrat text-spillbox-blue text-sm leading-tight">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
