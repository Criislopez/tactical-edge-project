import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [newsletter, setNewsletter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Completa todos los campos", variant: "destructive" });
      return;
    }
    toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo." });
    setForm({ name: "", email: "", message: "" });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletter.trim()) return;
    toast({ title: "Suscripción confirmada", description: "Recibirás contenido exclusivo de preparación." });
    setNewsletter("");
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="font-heading text-4xl md:text-5xl uppercase tracking-wider mb-4">Contacto</h1>
            <p className="text-foreground/70 font-condensed tracking-wide text-lg">
              Si tienes dudas, estás en el lugar correcto. Responderemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-card border border-border p-8">
              <h2 className="font-heading text-xl uppercase tracking-wider mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-condensed uppercase tracking-wider text-foreground/70 mb-2">Nombre</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    maxLength={100}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-condensed uppercase tracking-wider text-foreground/70 mb-2">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    maxLength={255}
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-condensed uppercase tracking-wider text-foreground/70 mb-2">Mensaje</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    maxLength={1000}
                    className="bg-muted border-border"
                  />
                </div>
                <Button type="submit" className="w-full font-condensed uppercase tracking-wider">
                  <Send size={16} className="mr-2" /> Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Newsletter + Info */}
            <div className="space-y-8">
              <div className="bg-card border border-border p-8">
                <Mail className="w-10 h-10 text-accent mb-4" />
                <h2 className="font-heading text-xl uppercase tracking-wider mb-3">Newsletter de preparación</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Recibe contenido exclusivo de preparación. Sin spam, sin relleno. Solo lo que importa.
                </p>
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <Input
                    type="email"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder="tu@email.com"
                    maxLength={255}
                    className="bg-muted border-border flex-1"
                  />
                  <Button type="submit" className="font-condensed uppercase tracking-wider text-xs">
                    Suscribir
                  </Button>
                </form>
              </div>

              <div className="bg-muted border border-border p-8">
                <h3 className="font-heading text-lg uppercase tracking-wider mb-4 text-accent">Compromiso</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Respondemos a todos los mensajes en un máximo de 48 horas. No somos un bot, somos personas
                  comprometidas con la preparación real. Si tu consulta es sobre cursos, incluye tu nivel
                  de experiencia para darte la mejor orientación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
