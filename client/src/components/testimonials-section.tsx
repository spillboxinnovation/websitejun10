import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    reviewer: "Susmitha",
    place: "Mettupalayam, Tamil Nadu",
    date: "04-February-25",
    product: "Pooja Articles",
    stars: 5,
    review: "Awesome product 👏🏼 and also quick response 👍🏼 Thank you so much 😀"
  },
  {
    reviewer: "Gazal",
    place: "Alwar, Rajasthan",
    date: "31-December-24",
    product: "Brass Coffee Dabara Set",
    stars: 5,
    review: "If you could sell me as retail then I would love to purchase it at all."
  },
  {
    reviewer: "Michael",
    place: "Manali, Himachal Pradesh",
    date: "17-August-20",
    product: "Parachute Cord",
    stars: 5,
    review: "Very quick to reply to inquiries, very friendly very good customer service."
  },
  {
    reviewer: "Mr Sathya",
    place: "Chennai, Tamil Nadu",
    date: "14-December-20",
    product: "Pooja Articles",
    stars: 5,
    review: "Excellent response and very professional."
  },
  {
    reviewer: "Srinivas",
    place: "Hyderabad, Telangana",
    date: "17-February-24",
    product: "Brass Cup",
    stars: 5,
    review: "Good response"
  },
  {
    reviewer: "Aparna Prabhakar",
    place: "Chennai, Tamil Nadu",
    date: "24-October-24",
    product: "Brass Coffee Dabara Set",
    stars: 5,
    review: "Well coordinated for a small order and delivered"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-spillbox-dark max-w-3xl mx-auto">
            Real reviews from satisfied clients across our platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-spillbox-gray rounded-2xl hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="text-spillbox-dark italic mb-4">
                    "{testimonial.review}"
                  </p>
                  <div className="space-y-1">
                    <div className="font-semibold text-spillbox-blue">
                      {testimonial.reviewer}
                    </div>
                    <div className="text-sm text-spillbox-dark">
                      {testimonial.place} • {testimonial.date}
                    </div>
                    <div className="text-sm text-spillbox-dark font-medium">
                      {testimonial.product}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
