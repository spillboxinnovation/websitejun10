import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sathya Rajesh",
    title: "Managing Director",
    linkedin: "https://www.linkedin.com/in/sathya-rajesh-a0ab7620/"
  },
  {
    name: "Velusamy Nallusamy",
    title: "Head Procurement & Operations",
    linkedin: "https://www.linkedin.com/in/velusamy-nallusamy-31240b31/"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-spillbox-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
            Meet Our Leaders
          </h2>
          <p className="text-xl text-spillbox-dark max-w-3xl mx-auto">
            The visionary minds behind Spillbox Innovation's success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-spillbox-blue">
                  <img 
                    src={`/src/assets/person_images/${member.name.toLowerCase().replace(' ', '_')}.png`} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold font-montserrat text-spillbox-blue mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-spillbox-dark mb-4">
                  {member.title}
                </p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-spillbox-red hover:text-red-700 font-semibold transition-colors"
                >
                  <i className="fab fa-linkedin mr-2"></i>Connect on LinkedIn
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
