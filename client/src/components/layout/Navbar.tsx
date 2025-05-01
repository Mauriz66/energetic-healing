import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const menuItems = [
  { path: "/", label: "Início" },
  { path: "/baralho-cigano", label: "Baralho Cigano" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar o menu mobile quando o usuário navega para uma nova página
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-lg font-sans font-bold text-primary">
              Terapias Oraculares
            </a>
          </Link>

          <div className="flex items-center space-x-3">
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              className="lg:hidden text-primary h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={cn(
                      "transition-colors hover:text-accent",
                      location === item.path
                        ? "text-accent font-medium"
                        : "text-primary"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background shadow-lg absolute w-full overflow-hidden max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col p-3">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "px-4 py-3 rounded transition-colors text-center my-1",
                    location === item.path
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-primary hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
