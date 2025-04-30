import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PlanoConexao from "@/pages/PlanoConexao";
import BaralhoCigano from "@/pages/BaralhoCigano";
import Leituras from "@/pages/Leituras";
import Terapias from "@/pages/Terapias";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/plano-conexao" component={PlanoConexao} />
          <Route path="/baralho-cigano" component={BaralhoCigano} />
          <Route path="/leituras" component={Leituras} />
          <Route path="/terapias" component={Terapias} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/contato" component={Contato} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
