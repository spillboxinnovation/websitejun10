import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Helmet } from "react-helmet-async";

function JobForm({ role }: { role: string }) {
  return (
    <form
      className="space-y-4 border rounded-lg p-4 shadow mt-4"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input type="hidden" name="access_key" value="9867cd64-34f1-4c6a-b34e-da6d1f9a8b4f" />
      <input type="hidden" name="Role" value={role} />
      <div>
        <label className="block font-medium">Name</label>
        <input name="Name" required className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input name="Email" type="email" required className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block font-medium">Phone Number</label>
        <input name="Phone" type="tel" required className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block font-medium">Resume Link (Google Drive, Dropbox, etc.)</label>
        <input name="ResumeLink" type="url" required className="border rounded w-full p-2" placeholder="https://..." />
      </div>
      <div>
        <label className="block font-medium">Portfolio Link</label>
        <input name="Portfolio" type="url" className="border rounded w-full p-2" />
      </div>
      <div>
        <label className="block font-medium">Location</label>
        <input name="Location" required className="border rounded w-full p-2" />
      </div>
      <button
        type="submit"
        className="bg-spillbox-blue text-white px-4 py-2 rounded hover:bg-spillbox-dark transition"
      >
        Submit Application
      </button>
    </form>
  );
}

const JOBS = [
  {
    key: "b2b",
    title: "📌 B2B Sales Executive",
    openings: 1,
    details: (
      <>
        <p className="mb-2"><b>Company:</b> Spillbox Innovation Pvt. Ltd.<br />
        <b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> As a B2B Sales Executive at Spillbox Innovation, you’ll be instrumental in scaling our wholesale and institutional business. You'll work across platforms like IndiaMART, Amazon Business, and Flipkart Wholesale to build long-term buyer relationships and close deals.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Manage B2B sales operations and client relationships.</li>
          <li>Generate and follow up on leads via IndiaMART and Amazon Business.</li>
          <li>Present product lines and wholesale pricing to buyers.</li>
          <li>Coordinate with operations and logistics for order fulfillment.</li>
          <li>Maintain a structured sales pipeline and update CRM systems.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b> Freshers with strong communication skills or 1–3 years experience in wholesale/FMCG/B2B sales. Fluency in English and Tamil required. IndiaMART backend/CRM knowledge is a plus.</p>
      </>
    ),
    formRole: "B2B Sales Executive",
  },
  {
    key: "photographer",
    title: "📸 Product Photographer",
    openings: 2,
    details: (
      <>
        <p className="mb-2"><b>Brands:</b> Putrika, Pujalane, Jobo, Djuize, Moongil, Abica, Paracraft<br />
        <b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> Join our creative team to photograph a wide range of products for e-commerce and social media.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Studio and lifestyle product shoots for all brands.</li>
          <li>Capture and edit product images for e-commerce.</li>
          <li>Collaborate with stylists and marketing team.</li>
          <li>Organize and manage photography equipment and props.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b> 
        <li>Freshers with basic camera/editing skills or 1–2 years experience in e-commerce/commercial photography.</li> 
        <li>Studio lighting and DSLR experience preferred. Portfolio encouraged.</li></p>
      </>
    ),
    formRole: "Product Photographer",
  },
  {
    key: "designer",
    title: "🎨 Product Designer",
    openings: 2,
    details: (
      <>
        <p className="mb-2"><b>Brands:</b> Putrika, Moongil, Djuize, Jobo, Abica, Paracraft<br />
        <b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> Conceptualize and design new products across our multi-brand portfolio.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Create product concepts and prototypes.</li>
          <li>Collaborate with production teams for manufacturable designs.</li>
          <li>Design with brass, leather, wood, etc.</li>
          <li>Contribute to packaging and instructions.</li>
          <li>Stay updated with trends and innovations.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b> 
        <li>Freshers with a degree in Product/Industrial Design or 1–3 years experience in consumer goods/packaging design. </li>
            Adobe Illustrator, SolidWorks, or Fusion 360 skills helpful. Creative mindset required.</p>
      </>
    ),
    formRole: "Product Designer",
  },
];

export default function JoinUs() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>
          Careers at Spillbox Innovation – E-commerce Jobs, Sales, Design & Photography in Chennai, India
        </title>
        <meta
          name="description"
          content="Explore job opportunities at Spillbox Innovation Pvt Ltd – a leading e-commerce and consumer brands company in Chennai, Tamil Nadu. We're hiring for B2B sales, product design, product photography, and more. Join our team and work with top brands like Putrika, Pujalane, Djuize, Moongil, Jobo, Abica, and Paracraft. Wholesale, retail, and creative roles available. Office & shop at Mugalivakkam, Manapakkam, Chennai."
        />
        <meta
          name="keywords"
          content="Spillbox careers, e-commerce jobs Chennai, sales executive jobs, product designer jobs, product photographer jobs, hiring in Chennai, India, Tamil Nadu, Mugalivakkam, Manapakkam, wholesale jobs, retail jobs, Amazon jobs, Flipkart jobs, D2C brands, consumer brands, Putrika, Pujalane, Djuize, Moongil, Jobo, Abica, Paracraft, shop address, office jobs, creative jobs, startup jobs, apply online, work with us"
        />
        <meta property="og:title" content="Careers at Spillbox Innovation – E-commerce & Brand Jobs in Chennai" />
        <meta property="og:description" content="Join Spillbox Innovation in Chennai, Tamil Nadu. Sales, design, photography, and e-commerce jobs. Work with top brands and grow your career in a fast-growing company." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thespillbox.com/joinus" />
      </Helmet>
      <Navigation />
      <section className="max-w-4xl mx-auto py-24 px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Join Us</h2>
        <div className="flex justify-center mb-6">
          <a href="https://ibb.co/22h6fKJ" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.ibb.co/83sBS8k/360-F-326951365-muy-L3tp-R8a6-Lg-Cfka-KVtz-Oup-Ldgv2-Dff.jpg"
              alt="360-F-326951365-muy-L3tp-R8a6-Lg-Cfka-KVtz-Oup-Ldgv2-Dff"
              className="rounded-lg shadow-md max-h-100"
              style={{ border: 0 }}
            />
          </a>
        </div>
        <p className="text-lg text-center mb-8 text-spillbox-dark">
          Spillbox Innovation is growing rapidly, expanding our brands and reach across India, US, Australia and Mexico. 
          We believe in empowering our team with hands-on learning, exposure to real-world business challenges, and opportunities to grow with us. 
          Join Spillbox for a collaborative environment, industry-standard salaries, and a chance to shape the future of consumer brands.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          {JOBS.map((job) => (
            <button
              key={job.key}
              onClick={() => setSelected(job.key)}
              className={`flex-1 border rounded-lg px-6 py-4 font-semibold text-left shadow hover:bg-spillbox-blue/10 transition ${
                selected === job.key ? "border-spillbox-blue bg-spillbox-blue/5" : "border-gray-200 bg-white"
              }`}
            >
              <span className="block">{job.title}</span>
              <span className="text-sm text-gray-600">Openings: {job.openings}</span>
            </button>
          ))}
        </div>
        {selected && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">{JOBS.find(j => j.key === selected)?.title}</h3>
            <div className="mb-4">{JOBS.find(j => j.key === selected)?.details}</div>
            <JobForm role={JOBS.find(j => j.key === selected)?.formRole || ""} />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}