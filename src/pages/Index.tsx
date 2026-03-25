import { Link } from "react-router-dom";
import { Shield, Target, BookOpen, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-home.jpg";

const categories = [
  { icon: Shield, title: "Equipamiento Táctico", desc: "Equipo probado en condiciones reales. Sin adornos, sin excusas.", link: "/tienda" },
  { icon: Target, title: "Merchandising", desc: "Productos que representan una mentalidad. No es moda, es identidad.", link: "/tienda" },
  { icon: BookOpen, title: "Cursos de Preparación", desc: "Formación práctica impartida por profesionales. Aprende lo que importa.", link: "/cursos" },
];

const courses = [
  { title: "Supervivencia Básica", level: "Iniciación", duration: "40h", desc: "Técnicas fundamentales para sobrevivir en entornos hostiles." },
  { title: "Defensa Personal Táctica", level: "Intermedio", duration: "30h", desc: "Protocolos de defensa basados en situaciones reales." },
  { title: "Mentalidad y Disciplina", level: "Todos los niveles", duration: "20h", desc: "Fortaleza mental, toma de decisiones bajo presión." },
];

const benefits = [
  { icon: Shield, title: "Preparación Real", desc: "Basada en experiencia de campo, no en teoría de escritorio." },
  { icon: CheckCircle, title: "Equipamiento Probado", desc: "Cada producto ha sido testado en condiciones extremas." },
  { icon: Target, title: "Formación Práctica", desc: "Cursos diseñados para aplicar, no solo para aprender." },
];

const testimonials = [
  { name: "Carlos M.", role: "Ex-militar", text: "La formación más realista que he encontrado fuera del ejército. Sin adornos, pura preparación." },
  { name: "Laura G.", role: "Preparacionista", text: "El equipamiento es de calidad real. No es merchandising barato disfrazado de táctico." },
  { name: "David R.", role: "Instructor", text: "Recomiendo sus cursos a cualquiera que quiera tomarse la preparación en serio." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Preparación táctica" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative container text-center py-20">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider text-foreground mb-6 text-shadow-tactical">
            La preparación<br />no es una opción
          </h1>
          <p className="font-condensed text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 tracking-wide">
            Entrena. Equípate. Prepárate para cualquier escenario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-condensed uppercase tracking-wider text-base">
              <Link to="/cursos">Ver cursos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-condensed uppercase tracking-wider text-base border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link to="/tienda">Explorar equipamiento</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Authority Block */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-accent mb-6">
            Esto no es moda. Es preparación real.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            No vendemos estética militar para redes sociales. Cada producto, cada curso y cada recurso que ofrecemos
            está diseñado con un único propósito: que estés preparado cuando la situación lo exija.
            Sin atajos. Sin marketing vacío. Solo lo que funciona.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-center mb-14">
            Categorías principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group bg-card border border-border p-8 hover:border-accent/50 transition-all duration-300"
              >
                <cat.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="font-heading text-xl uppercase tracking-wider mb-3 group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cat.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-accent text-sm font-condensed uppercase tracking-wider">
                  Explorar <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-center mb-4">
            Cursos destacados
          </h2>
          <p className="text-center text-muted-foreground mb-14 font-condensed tracking-wide">
            Formación diseñada para prepararte de verdad
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="bg-card border border-border p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-condensed uppercase tracking-wider bg-secondary px-3 py-1 text-secondary-foreground">
                    {course.level}
                  </span>
                  <span className="text-xs text-muted-foreground">{course.duration}</span>
                </div>
                <h3 className="font-heading text-xl uppercase tracking-wider mb-3">{course.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{course.desc}</p>
                <Button asChild className="mt-6 font-condensed uppercase tracking-wider w-full">
                  <Link to="/cursos">Acceder al entrenamiento</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <b.icon className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="font-heading text-lg uppercase tracking-wider mb-3">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider text-center mb-14">
            Prueba social
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-condensed font-semibold text-sm uppercase tracking-wider">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider text-primary-foreground mb-6">
            Empieza hoy.<br />Mañana puede ser tarde.
          </h2>
          <p className="text-primary-foreground/80 font-condensed tracking-wide mb-10 max-w-xl mx-auto">
            No esperes a necesitarlo. La preparación empieza con una decisión.
          </p>
          <Button asChild size="lg" variant="outline" className="font-condensed uppercase tracking-wider text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/cursos">Empieza tu entrenamiento</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
