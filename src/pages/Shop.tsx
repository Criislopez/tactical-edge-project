import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroShop from "@/assets/hero-shop.jpg";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  use: string;
  desc: string;
};

const products: Product[] = [
  { id: 1, name: "Chaqueta Táctica Softshell", price: 129, category: "Ropa táctica", use: "Entrenamiento", desc: "Resistente al viento y al agua. Diseño funcional con múltiples bolsillos." },
  { id: 2, name: "Pantalón Cargo Ripstop", price: 79, category: "Ropa táctica", use: "EDC", desc: "Tejido ripstop reforzado. Rodilleras integradas." },
  { id: 3, name: "Camiseta Técnica Dry-Fit", price: 35, category: "Ropa táctica", use: "Entrenamiento", desc: "Secado rápido, transpirable. Para entrenamientos intensos." },
  { id: 4, name: "Mochila Asalto 45L", price: 189, category: "Mochilas y equipamiento", use: "Supervivencia", desc: "Sistema MOLLE completo. Compartimentos organizados para 72h." },
  { id: 5, name: "Mochila EDC 25L", price: 99, category: "Mochilas y equipamiento", use: "EDC", desc: "Compacta y funcional para el día a día táctico." },
  { id: 6, name: "Botiquín Táctico IFAK", price: 65, category: "Mochilas y equipamiento", use: "Supervivencia", desc: "Kit de primeros auxilios individual. Contenido profesional." },
  { id: 7, name: "Linterna Táctica 1200lm", price: 55, category: "Accesorios EDC", use: "EDC", desc: "Cuerpo de aluminio. Modos estroboscópico y SOS." },
  { id: 8, name: "Navaja Multiusos Acero", price: 45, category: "Accesorios EDC", use: "Supervivencia", desc: "Hoja de acero inoxidable 440C. Bloqueo de seguridad." },
  { id: 9, name: "Brújula Militar Lensática", price: 29, category: "Accesorios EDC", use: "Supervivencia", desc: "Precisión militar. Funcionamiento sin baterías." },
];

const categories = ["Todas", "Ropa táctica", "Mochilas y equipamiento", "Accesorios EDC"];
const uses = ["Todos", "EDC", "Supervivencia", "Entrenamiento"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedUse, setSelectedUse] = useState("Todos");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = products.filter((p) => {
    const catMatch = selectedCategory === "Todas" || p.category === selectedCategory;
    const useMatch = selectedUse === "Todos" || p.use === selectedUse;
    return catMatch && useMatch;
  });

  const FilterPanel = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading text-sm uppercase tracking-widest text-accent mb-4">Categoría</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left text-sm py-2 px-3 transition-colors font-condensed tracking-wide ${
                selectedCategory === cat ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-heading text-sm uppercase tracking-widest text-accent mb-4">Uso</h3>
        <div className="space-y-2">
          {uses.map((use) => (
            <button
              key={use}
              onClick={() => setSelectedUse(use)}
              className={`block w-full text-left text-sm py-2 px-3 transition-colors font-condensed tracking-wide ${
                selectedUse === use ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {use}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroShop} alt="Equipamiento táctico" className="w-full h-full object-cover" width={1920} height={1080} loading="lazy" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative container text-center">
          <h1 className="font-heading text-4xl md:text-5xl uppercase tracking-wider text-shadow-tactical mb-4">Tienda</h1>
          <p className="font-condensed text-foreground/70 tracking-wide">Equipamiento real para preparación real</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          {/* Mobile filter toggle */}
          <div className="md:hidden mb-6">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="font-condensed uppercase tracking-wider w-full">
              <Filter size={16} className="mr-2" /> Filtros
            </Button>
            {showFilters && (
              <div className="mt-4 bg-card border border-border p-6">
                <FilterPanel />
              </div>
            )}
          </div>

          <div className="flex gap-10">
            {/* Desktop filters */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <FilterPanel />
            </aside>

            {/* Products grid */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-6 font-condensed tracking-wide">
                {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="bg-card border border-border group hover:border-accent/50 transition-all">
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <span className="font-heading text-3xl text-muted-foreground/30 uppercase">IMG</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-condensed uppercase tracking-wider text-accent">{product.category}</span>
                      </div>
                      <h3 className="font-heading text-base uppercase tracking-wider mb-2">{product.name}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-4">{product.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-xl text-accent">{product.price}€</span>
                        <Button size="sm" className="font-condensed uppercase tracking-wider text-xs">
                          Añadir al equipo
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
