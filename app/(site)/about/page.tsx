import { Heart, Users, ShieldCheck, Search, UploadCloud, Download, Rocket } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    title: "Rechercher",
    text: "Filtrez par filière, niveau, année ou type de document pour trouver exactement ce qu'il vous faut.",
  },
  {
    icon: Download,
    title: "Télécharger",
    text: "Consultez ou téléchargez en un clic les cours, TD, TP et corrigés partagés par la communauté.",
  },
  {
    icon: UploadCloud,
    title: "Partager",
    text: "Déposez vos propres documents pour aider les prochaines promotions à progresser plus vite.",
  },
];

const valeurs = [
  {
    icon: Heart,
    title: "Accessibilité",
    text: "Les ressources académiques doivent être gratuites et faciles à trouver, sans barrière.",
  },
  {
    icon: Users,
    title: "Entraide",
    text: "AES Connect existe parce que des étudiants partagent leurs notes pour d'autres étudiants.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité",
    text: "Chaque dépôt est associé à un auteur et une source, pour garder des contenus fiables.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Notre histoire
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Des documents de cours,
            <br />
            partagés par des étudiants.
          </h1>
          <p className="text-white/85 text-base md:text-lg leading-relaxed">
            AES Connect est né d&apos;un constat simple : trop de bons cours, TD et fiches de révision
            restent enfermés dans les ordinateurs de quelques étudiants au lieu de circuler.
          </p>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground text-center mb-2">
          Comment ça marche
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Trois étapes, aucune inscription compliquée.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative bg-card rounded-2xl border border-border/50 p-6 shadow-sm">
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-md">
                {i + 1}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-foreground text-center mb-10">
            Ce qui guide AES Connect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valeurs.map((v) => (
              <div key={v.title} className="text-center px-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-display font-semibold text-2xl text-foreground mb-3">Envie de contribuer ?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Ajoutez vos propres documents ou allez fouiller dans ceux déjà déposés par la communauté.
        </p>
        <Link
          href="/documents"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Voir les documents
        </Link>
      </section>
    </div>
  );
}
