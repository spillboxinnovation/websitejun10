import { Card, CardContent } from "@/components/ui/card";

const brands = [
	{
		name: "Putrika",
		tagline: "Timeless brass pieces for home and rituals.",
		amazon: "https://www.amazon.in/stores/PUTRIKA/page/1719A047-9346-4C1A-9343-B288D8FA5373",
		flipkart: "https://www.flipkart.com/search?q=putrika&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
		image: "/src/assets/brand_logos/Putrika.png",
		alt: "Traditional brass pooja items and decor",
		writeup: "We craft brass pooja essentials like bells, lamps, and idols, traditional kitchenware such as lotas, spice boxes, and paneersombu, and decorative brass pieces including round storage boxes, urulis, and ornamental figurines.",
	},
  	{
		name: "Abica",
		tagline: "Smart tools for teachers & smart kids.",
		flipkart: "https://www.flipkart.com/search?q=abica&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
		image: "/src/assets/brand_logos/Abica.png",
		alt: "Educational tools and learning materials for teachers and students",
		writeup: "Our range includes educational abacus tools for both beginners and advanced learners, Tools to improve number skills, and interactive learning kits designed to make math engaging and hands-on.",
	},
	{
		name: "Paracraft",
		tagline: "Strong, stylish, and ready for adventure.",
		amazon: "https://www.amazon.in/stores/Paracraft/page/3D9030BC-3B08-4FE6-81B3-33D991FBA719",
		flipkart: "https://www.flipkart.com/search?q=paracraft&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
		image: "/src/assets/brand_logos/Paracraft.png",
		alt: "Adventure gear and paracord tools for outdoor activities",
		writeup: "Paracraft empowers your creativity with high-quality and versatile paracords. Whether you are a crafting enthusiast, an outdoor adventurer, or simply appreciate durable and stylish accessories, Paracraft provides the essential materials to bring your ideas to life, knot by knot.",
	},
	{
		name: "Pujalane",
		tagline: "One-stop destination for authentic puja essentials.",
		link: "https://pujalane.com/",
		image: "/src/assets/brand_logos/Pujalane.png",
		alt: "Authentic puja items and spiritual essentials",
		writeup: "Discover a curated collection of authentic brass idols, diyas, and festive decor to enrich your spiritual rituals.",
	},
	{
		name: "Djuize",
		tagline: "Decor that makes your home beautiful.",
		amazon: "https://www.amazon.in/stores/Djuize/Homepage/page/420426EE-03CB-4818-82D1-748BD25C5839",
		flipkart: "https://www.flipkart.com/search?q=djuize&marketplace=FLIPKART",
		image: "/src/assets/brand_logos/Djuize.png",
		alt: "Beautiful home decor items and accessories",
		writeup: "Djuize adds fresh energy to your home. We offer unique and stylish decor that makes every space warm and inviting. From decorative accents to functional pieces, Djuize helps you create a home that reflects your style.",
	},
	{
		name: "Moongil",
		tagline: "Cook better with quality & durable cookware.",
		amazon: "https://www.amazon.in/stores/page/113FE3DE-39CF-45B7-B411-57E8632206C1",
		image: "/src/assets/brand_logos/Moongil.png",
		alt: "Premium quality cookware and kitchen essentials",
		writeup: "Specializing in sustainable and beautifully crafted kitchenware, including cutting boards and a comprehensive range of cookware, Moongil inspires you to cook with joy and bring wholesome meals to your table.",
	},
	{
		name: "Jobo",
		tagline: "Premium leather, built to last.",
		flipkart: "https://www.flipkart.com/jobo-canvas-pouch-multipurpose-pouch-organizer-pouch-printed-designs-beautiful-pouch/p/itm999648fc94378?pid=PPSGS36YSG492WA4&lid=LSTPPSGS36YSG492WA42GFWSC&marketplace=FLIPKART&q=jobo+white+pouch+potli+for+women&store=reh%2Fihu&srno=s_1_3&otracker=AS_Query_OrganicAutoSuggest_3_16_na_na_ps&otracker1=AS_Query_OrganicAutoSuggest_3_16_na_na_ps&fm=search-autosuggest&iid=a9e19a88-1b35-4875-882f-85527cdde8f0.PPSGS36YSG492WA4.SEARCH&ppt=sp&ppn=sp&ssid=2v275hwulc0000001749532503206&qH=9828488c2de58688",
		image: "/src/assets/brand_logos/Jobo.png",
		alt: "Premium leather bags and accessories",
		writeup: "Our collection includes leather bags, personal accessories keychains, and professional essentials including sleek laptop sleeves and mats.",
	},

];

export default function BrandsSection() {
	return (
		<section id="brands" className="py-20 bg-spillbox-gray">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold font-montserrat text-spillbox-blue mb-6">
						Our Premium Brands
					</h2>
					<p className="text-xl text-spillbox-dark max-w-3xl mx-auto">
						Discover our carefully curated collection of brands, each crafted with
						excellence and designed to elevate your lifestyle.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{brands.map((brand, index) => (
						<Card key={index} className="h-full flex flex-col">
							<div className="h-48 flex items-center justify-center overflow-hidden">
								<img
									src={brand.image}
									alt={brand.alt}
									className="w-3/4 h-3/4 object-contain transition-transform duration-300"
								/>
							</div>
							<CardContent className="p-6 flex-1 flex flex-col">
								<h3 className="text-2xl font-bold font-montserrat text-spillbox-blue mb-2">
									{brand.name}
								</h3>
								<p className="text-spillbox-dark mb-2 font-semibold">
									{brand.tagline}
								</p>
								<p className="text-spillbox-dark mb-4 flex-1">
									{brand.writeup}
								</p>
								<div className="flex gap-4 mt-2">
									{"link" in brand ? (
										<a
											href={brand.link}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-[#eb9310] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#e48b00] transition-colors duration-200"
										>
											Visit Store{" "}
											<i className="fas fa-external-link-alt ml-2"></i>
										</a>
									) : (
										<>
											{brand.amazon && (
												<a
													href={brand.amazon}
													target="_blank"
													rel="noopener noreferrer"
													className="bg-[#eb9310] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#e48b00] transition-colors duration-200 flex items-center"
												>
													Amazon{" "}
													<i className="fab fa-amazon ml-2"></i>
												</a>
											)}
											{brand.flipkart && (
												<a
													href={brand.flipkart}
													target="_blank"
													rel="noopener noreferrer"
													className="bg-[#2874F0] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1856b8] transition-colors duration-200 flex items-center"
												>
													Flipkart{" "}
													<i className="fas fa-shopping-cart ml-2"></i>
												</a>
											)}
										</>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
