import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl uppercase tracking-widest text-accent mb-4">TÁCTICA</h3>
            <p className="text-muted-foreground font-body max-w-sm">
              La preparación no es una opción. Equipamiento táctico, formación real y mentalidad de supervivencia.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Inicio" },
                { to: "/tienda", label: "Tienda" },
                { to: "/cursos", label: "Cursos y Formación" },
                { to: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-accent mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground text-sm">Aviso legal</span></li>
              <li><span className="text-muted-foreground text-sm">Política de privacidad</span></li>
              <li><span className="text-muted-foreground text-sm">Cookies</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-condensed text-sm uppercase tracking-wider text-muted-foreground">
            "La preparación no es una opción"
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TÁCTICA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
