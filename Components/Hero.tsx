"use client";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/Components/ui/input";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalDocuments: number;
}

const HeroSection = ({ searchQuery, onSearchChange, totalDocuments }: HeroSectionProps) => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/6 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/4 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary-foreground/90 text-sm font-medium mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>{totalDocuments} documents disponibles</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Trouvez vos ressources
            <br />
            <span className="text-primary">académiques</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Recherchez, filtrez et téléchargez tous vos documents de cours en un seul endroit.
          </p>
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher par mot-clé, matière, auteur..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-lg bg-card border border-border/50 text-card-foreground text-base shadow-sm focus-visible:ring-2 focus-visible:ring-primary placeholder:text-muted-foreground/60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;