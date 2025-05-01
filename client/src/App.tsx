import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "./pages/Home";
import BaralhoCigano from "./pages/BaralhoCigano";
import Leituras from "./pages/Leituras";
import Terapias from "./pages/Terapias";
import { Navbar } from "./components/layout/Navbar";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/baralho-cigano" component={BaralhoCigano} />
          <Route path="/leituras">
            <Leituras />
          </Route>
          <Route path="/terapias">
            <Terapias />
          </Route>
          <Route>
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
              <p className="mb-6">A página que você está procurando não existe.</p>
              <a href="/" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                Voltar para a página inicial
              </a>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function App() {
  return <Router />;
}

export default App;
