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
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
}
