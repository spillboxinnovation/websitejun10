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
  {
    key: "creative-director",
    title: "🎨 Creative Director",
    openings: 1,
    details: (
      <>
        <p className="mb-2"><b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> We’re looking for a visionary Creative Director to lead branding, design, storytelling, and campaigns across all our brands—Putrika, Pujalane, Jobo, Djuize, Moongil, Abica, and Paracraft. This role will shape how each brand speaks, looks, and connects with its audience.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Lead creative strategy, campaign development, and content direction.</li>
          <li>Manage internal creative teams (designers, photographers, videographers).</li>
          <li>Ensure brand consistency across packaging, digital, social, and advertising.</li>
          <li>Oversee photoshoots, video campaigns, and seasonal marketing visuals.</li>
          <li>Collaborate with marketing, product, and e-commerce teams.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b></p>
        <ul className="list-disc ml-5 mb-2">
          <li>4+ years in a creative leadership role, preferably in D2C/e-commerce.</li>
          <li>Strong design sensibility and brand vision.</li>
          <li>Fluent in Adobe Creative Suite, Canva, and creative collaboration tools.</li>
          <li>Experience across product, fashion, or lifestyle brands is a plus.</li>
        </ul>
      </>
    ),
    formRole: "Creative Director",
  },
  {
    key: "digital-marketing",
    title: "📢 Digital Marketing Expert",
    openings: 1,
    details: (
      <>
        <p className="mb-2"><b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> We're hiring a Digital Marketing Expert to manage and grow our online presence across marketplaces and social platforms. You’ll work closely with the sales and creative teams to launch digital campaigns and scale online sales.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Run ads and campaigns across Meta, Google, and Amazon.</li>
          <li>Analyze campaign metrics, ROAS, and SEO performance.</li>
          <li>Manage social media scheduling, influencer marketing, and email campaigns.</li>
          <li>Optimize listings and content for Flipkart, Amazon, Meesho, and international platforms.</li>
          <li>Stay ahead of trends, competitor strategies, and algorithm changes.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b></p>
        <ul className="list-disc ml-5 mb-2">
          <li>2–4 years of hands-on experience with digital marketing tools and ad platforms.</li>
          <li>Strong grip on Google Analytics, Meta Business Suite, and Amazon Ads.</li>
          <li>Basic graphic/content creation skills are a plus.</li>
          <li>Must love working with fast-moving consumer brands.</li>
        </ul>
      </>
    ),
    formRole: "Digital Marketing Expert",
  },
  {
    key: "management-interns",
    title: "🎓 Management Interns",
    openings: 3,
    details: (
      <>
        <p className="mb-2"><b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Internship | Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> Join Spillbox as a Management Intern and rotate across departments like marketing, design, sales, operations, and product development. You’ll learn how multi-brand consumer companies operate from the inside.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Assist team leads with research, planning, reporting, and coordination.</li>
          <li>Get trained on tools like Notion, Canva, IndiaMART, Flipkart Seller Hub, and more.</li>
          <li>Take ownership of small projects or process improvements.</li>
          <li>Present learnings to leadership at the end of your internship.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b></p>
        <ul className="list-disc ml-5 mb-2">
          <li>Recent graduates or final-year students in Business, Design, Commerce, or related fields.</li>
          <li>Excellent communication, curiosity, and problem-solving mindset.</li>
          <li>Internship duration: 3–6 months (extendable or absorbable based on performance).</li>
          <li>Stipend and certificate provided.</li>
        </ul>
      </>
    ),
    formRole: "Management Intern",
  },
  {
    key: "data-analyst",
    title: "📊 Data Analyst",
    openings: 1,
    details: (
      <>
        <p className="mb-2"><b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> We’re looking for a Data Analyst to turn our multi-channel sales, marketing, and operations data into actionable insights. You'll help optimize pricing, inventory, ad spend, and customer experience across platforms.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Collect and clean data from Amazon, Flipkart, IndiaMART, and internal dashboards.</li>
          <li>Build weekly and monthly performance reports.</li>
          <li>Analyze customer behavior, inventory movement, and ad campaigns.</li>
          <li>Work with leadership to drive data-backed decision-making.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b></p>
        <ul className="list-disc ml-5 mb-2">
          <li>1–3 years of experience in data analysis, preferably in retail or e-commerce.</li>
          <li>Strong Excel/Google Sheets skills; knowledge of SQL, Python, or Power BI is a plus.</li>
          <li>Should enjoy working with numbers and spotting trends.</li>
        </ul>
      </>
    ),
    formRole: "Data Analyst",
  },
  {
    key: "key-account-manager",
    title: "🤝 Key Account Manager (E-commerce & Wholesale)",
    openings: 2,
    details: (
      <>
        <p className="mb-2"><b>Location:</b> Mugalivakkam, Chennai<br />
        <b>Type:</b> Full-time | On-site</p>
        <p className="mb-2"><b>About the Role:</b> As a Key Account Manager, you’ll own relationships with major B2B buyers, wholesale clients, or platform managers (Amazon, Flipkart, etc.). You’ll ensure sales growth, customer satisfaction, and account health across assigned brands.</p>
        <ul className="list-disc ml-5 mb-2">
          <li>Act as the single point of contact for high-value clients and marketplace accounts.</li>
          <li>Monitor pricing, stock levels, promotions, and listings.</li>
          <li>Resolve issues related to delivery, returns, or disputes quickly and professionally.</li>
          <li>Strategize account growth with the marketing and sales team.</li>
          <li>Generate insights from account performance data.</li>
        </ul>
        <p className="mb-2"><b>Who Can Apply:</b></p>
        <ul className="list-disc ml-5 mb-2">
          <li>1–4 years of experience in account management, sales coordination, or client servicing.</li>
          <li>Good understanding of marketplaces and retail distribution.</li>
          <li>Strong organizational and relationship-building skills.</li>
        </ul>
      </>
    ),
    formRole: "Key Account Manager",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-center mb-8">
          {JOBS.map((job) => (
            <button
              key={job.key}
              onClick={() => setSelected(job.key)}
              className={`flex-1 border rounded-lg px-6 py-4 font-semibold text-left shadow hover:bg-spillbox-blue/10 transition ${
                selected === job.key
                  ? "border-spillbox-blue bg-blue-100/70" // highlighted with transparent blue
                  : "border-gray-200 bg-white"
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