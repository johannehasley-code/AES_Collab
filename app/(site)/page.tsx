import Link from "next/link";
import { Search, UploadCloud, ArrowRight, FileText, Users2, Layers } from "lucide-react";
import { documents, FILIERES } from "@/Components/document";
import DocumentCard from "@/Components/documentcard";

const highlights = [
  { icon: FileText, label: "Documents", value: documents.length },
  { icon: Layers, label: "Filières couvertes", value: FILIERES.length },
  { icon: Users2, label: "Contributeurs", value: new Set(documents.map((d) => d.author)).size },
];

export default function HomePage() {
  const recents = [...documents]
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-sm font-medium mb-6">
              La bibliothèque académique collaborative
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              Vos cours ne devraient jamais
              <br />
              rester dans un seul ordinateur.
            </h1>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              AES Connect rassemble cours, TD, TP et corrigés déposés par des étudiants, pour des étudiants.
              Cherchez ce qu&apos;il vous faut ou partagez ce que vous avez.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/documents"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <Search className="w-4 h-4" />
                Explorer les documents
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="bg-card rounded-2xl shadow-lg border border-border/40 p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-foreground leading-none">{h.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{h.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents récents */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-semibold text-2xl text-foreground">Ajoutés récemment</h2>
            <p className="text-muted-foreground text-sm mt-1">Un aperçu de ce qui vient d&apos;arriver dans la bibliothèque.</p>
          </div>
          <Link href="/documents" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            Tout voir
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recents.map((doc, i) => (
            <DocumentCard key={doc.id} document={doc} index={i} />
          ))}
        </div>
        <div className="mt-6 sm:hidden text-center">
          <Link href="/documents" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            Tout voir
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* CTA partage */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-5 shadow-md">
            <UploadCloud className="w-7 h-7 text-white" />
          </div>
          <h2 className="font-display font-semibold text-2xl text-foreground mb-3">Vous avez des notes à partager ?</h2>
          <p className="text-muted-foreground mb-6">
            Un cours, un TD corrigé, une fiche de révision : chaque dépôt aide la promotion suivante.
          </p>
          <Link
            href="/documents#upload"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Déposer un document
          </Link>
        </div>
      </section>
    </div>
  );
}
