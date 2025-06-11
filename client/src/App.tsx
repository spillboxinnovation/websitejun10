import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import JoinUs from "@/components/JoinUs";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/joinus" component={JoinUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function scrollToHashSection() {
  if (window.location.hash) {
    const id = window.location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    scrollToHashSection();
  }, [location]);

  return (
    <>
      <Helmet>
        <title>
          Spillbox Innovation – Premium Brands, Wholesale, and E-commerce in Chennai, India
        </title>
        <meta
          name="description"
          content="Spillbox Innovation Pvt Ltd: Home to premium brands in decor, rituals, education, cookware, and leather. Shop online or visit our Chennai store. Wholesale and retail opportunities available. Brands: Putrika, Pujalane, Djuize, Moongil, Jobo, Abica, Paracraft."
        />
        <meta
          name="keywords"
          content="Spillbox, e-commerce Chennai, wholesale Tamil Nadu, premium brands India, decor brands, pooja essentials, cookware, leather goods, educational kits, shop in Mugalivakkam, Manapakkam, Chennai, Tamil Nadu, Amazon brands, Flipkart brands, D2C, retail, B2B, IndiaMART, shop address, consumer brands, buy online, Chennai store"
        />
        <meta property="og:title" content="Spillbox Innovation – Premium Brands & Wholesale in Chennai" />
        <meta property="og:description" content="Shop premium brands or join our wholesale program. Visit our Chennai store or buy online. Decor, rituals, cookware, leather, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thespillbox.com/" />
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}
