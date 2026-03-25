import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/cursos", label: "Cursos" },
  { to: "/contacto", label: "Contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold uppercase tracking-widest text-accent">
          CIVIL TÁCTICO
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-condensed text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                location.pathname === link.to ? "text-accent" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="font-condensed uppercase tracking-wider text-sm">
            <Link to="/cursos">Prepárate ahora</Link>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`font-heading text-2xl uppercase tracking-widest transition-colors hover:text-accent ${
                  location.pathname === link.to ? "text-accent" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="font-condensed uppercase tracking-wider mt-4">
              <Link to="/cursos" onClick={() => setIsOpen(false)}>Prepárate ahora</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
