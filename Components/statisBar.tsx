"use client";
import { BookOpen, FileText, Users, TrendingUp } from "lucide-react";
import { documents, FILIERES } from "@/Components/document";

const stats = [
  {
    icon: FileText,
    label: "Documents",
    value: documents.length.toString(),
  },
  {
    icon: BookOpen,
    label: "Filières",
    value: FILIERES.length.toString(),
  },
  {
    icon: Users,
    label: "Contributeurs",
    value: new Set(documents.map((d) => d.author)).size.toString(),
  },
  {
    icon: TrendingUp,
    label: "Ce mois-ci",
    value: documents.filter((d) => d.dateAdded.startsWith("2026-02")).length.toString() + " ajoutés",
  },
];

const StatsBar = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-card rounded-xl card-shadow p-4 flex items-center gap-3 animate-fade-up"
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <stat.icon className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            <p className="font-display font-bold text-foreground text-lg leading-none mt-0.5">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;