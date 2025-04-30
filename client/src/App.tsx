import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "./pages/Home";
import BaralhoCigano from "./pages/BaralhoCigano";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/baralho-cigano" component={BaralhoCigano} />
        <Route>Página não encontrada</Route>
      </Switch>
    </div>
  );
}

function App() {
  return <Router />;
}

export default App;
