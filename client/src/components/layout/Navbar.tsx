import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "../../lib/utils";
import { Menu } from "lucide-react";

const menuItems = [
  { path: "/", label: "Início" },
  { path: "/baralho-cigano", label: "Baralho Cigano" },
  { path: "/leituras", label: "Leituras de Ciclos" },
  { path: "/terapias", label: "Terapias Energéticas" },
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
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="text-lg font-bold text-purple-600">
              Terapias Oraculares
            </a>
          </Link>

          <div className="flex items-center space-x-3">
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <a
                    className={cn(
                      "transition-colors hover:text-purple-600",
                      location === item.path
                        ? "text-purple-600 font-medium"
                        : "text-gray-700"
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
        <div className="lg:hidden bg-white shadow-lg absolute w-full">
          <div className="flex flex-col p-3">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "px-4 py-3 rounded transition-colors text-center my-1",
                    location === item.path
                      ? "bg-purple-100 text-purple-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
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
