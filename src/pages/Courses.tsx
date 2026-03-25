import { Link } from "react-router-dom";
import { Clock, Users, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroCourses from "@/assets/hero-courses.jpg";

const courses = [
  {
    title: "Supervivencia Básica",
    level: "Iniciación",
    duration: "40 horas",
    audience: "Cualquier persona sin experiencia previa",
    desc: "Aprende las técnicas fundamentales para sobrevivir en entornos hostiles. Orientación, refugio, agua, fuego y señalización.",
    topics: ["Construcción de refugios", "Obtención y purificación de agua", "Técnicas de fuego", "Orientación sin GPS", "Primeros auxilios básicos"],
  },
  {
    title: "Preparación Urbana",
    level: "Intermedio",
    duration: "35 horas",
    audience: "Personas con conocimientos básicos de preparación",
    desc: "Protocolos de actuación en entornos urbanos. Evacuación, comunicación de emergencia y gestión de crisis.",
    topics: ["Planes de evacuación urbana", "Kit de emergencia 72h", "Comunicación sin infraestructura", "Seguridad del hogar", "Gestión de suministros"],
  },
  {
    title: "Defensa Personal Táctica",
    level: "Intermedio",
    duration: "30 horas",
    audience: "Adultos con buena condición física",
    desc: "Técnicas de defensa basadas en situaciones reales. Sin coreografías, sin fantasía. Solo lo que funciona.",
    topics: ["Conciencia situacional", "Defensa contra agresiones comunes", "Uso de objetos cotidianos", "Desescalada de conflictos", "Protocolos de huida"],
  },
  {
    title: "Mentalidad y Disciplina",
    level: "Todos los niveles",
    duration: "20 horas",
    audience: "Cualquier persona comprometida con su desarrollo",
    desc: "Fortaleza mental, toma de decisiones bajo presión y construcción de hábitos de preparación.",
    topics: ["Gestión del estrés agudo", "Toma de decisiones bajo presión", "Rutinas de disciplina diaria", "Resiliencia emocional", "Planificación estratégica personal"],
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroCourses} alt="Entrenamiento táctico" className="w-full h-full object-cover" width={1920} height={1080} loading="lazy" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="relative container text-center">
          <h1 className="font-heading text-4xl md:text-6xl uppercase tracking-wider text-shadow-tactical mb-4">
            Cursos y Formación
          </h1>
          <p className="font-condensed text-lg md:text-xl text-foreground/80 tracking-wide max-w-2xl mx-auto">
            No es información. Es preparación.
          </p>
        </div>
      </section>

      {/* Course List */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="space-y-10">
            {courses.map((course, i) => (
              <div key={course.title} className="bg-card border border-border p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-xs font-condensed uppercase tracking-wider bg-secondary px-3 py-1 text-secondary-foreground">
                    {course.level}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users size={14} /> {course.audience}
                  </span>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider mb-4">{course.title}</h2>
                <p className="text-foreground/70 leading-relaxed mb-6">{course.desc}</p>

                <div className="mb-8">
                  <h4 className="font-condensed text-sm uppercase tracking-wider text-accent mb-4">Qué aprenderás</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="font-condensed uppercase tracking-wider">
                  Acceder al entrenamiento <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Block */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container max-w-3xl text-center">
          <BarChart3 className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-6">
            Método basado en experiencia real
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Nuestros cursos no salen de un manual genérico. Están diseñados por profesionales con experiencia
            real en operaciones, emergencias y supervivencia. Cada módulo ha sido testado en campo antes de
            llegar a ti. No enseñamos teoría: enseñamos lo que funciona.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container text-center">
          <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-wider text-primary-foreground mb-6">
            Entrena ahora.<br />No improvises después.
          </h2>
          <p className="text-primary-foreground/80 font-condensed tracking-wide mb-10 max-w-xl mx-auto">
            La diferencia entre estar preparado y no estarlo se mide en decisiones. Esta es la primera.
          </p>
          <Button asChild size="lg" variant="outline" className="font-condensed uppercase tracking-wider text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/contacto">Contacta con nosotros</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
