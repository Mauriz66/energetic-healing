import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";

const menuItems = [
  { path: "/", label: "Início" },
  { path: "/plano-conexao", label: "Conexão Cigana" },
  { path: "/baralho-cigano", label: "Baralho Cigano" },
  { path: "/leituras", label: "Leituras" },
  { path: "/terapias", label: "Terapias" },
  { path: "/sobre", label: "Sobre" },
  { path: "/contato", label: "Contato" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
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
            <a className="text-lg font-sans font-bold text-primary dark:text-secondary">
              <i className="fas fa-moon text-secondary dark:text-accent mr-2"></i>
              Terapias Oraculares
            </a>
          </Link>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-primary dark:text-secondary hover:text-accent dark:hover:text-accent h-9 w-9"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary dark:text-secondary h-9 w-9"
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
                        ? "text-accent dark:text-accent font-medium"
                        : "text-primary dark:text-secondary"
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
        <div className="lg:hidden bg-background dark:bg-muted shadow-lg absolute w-full overflow-hidden max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col p-3">
            {menuItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "px-4 py-3 rounded transition-colors text-center my-1",
                    location === item.path
                      ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary font-medium"
                      : "text-primary dark:text-secondary hover:bg-muted"
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
