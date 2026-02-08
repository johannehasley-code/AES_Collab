"use client";
import { FileText, Download, Eye, Lock, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Document } from "@/Components/document";
import { toast } from "sonner";

interface DocumentCardProps {
  document: Document;
  index: number;
}

const typeColors: Record<string, string> = {
  Cours: "bg-primary/10 text-primary",
  TD: "bg-info/10 text-info",
  TP: "bg-accent/10 text-accent",
  Examen: "bg-destructive/10 text-destructive",
  Corrigé: "bg-success/10 text-success",
  Mémoire: "bg-warning/10 text-warning",
  "Rapport de stage": "bg-warning/10 text-warning",
  "Fiche de révision": "bg-accent/10 text-accent",
};

const DocumentCard = ({ document: doc, index }: DocumentCardProps) => {
  const handleDownload = () => {
    if (!doc.downloadable) {
      toast.error("Téléchargement non autorisé pour ce document.");
      return;
    }
    toast.success(`Téléchargement de "${doc.title}" lancé !`);
  };

  const handleView = () => {
    toast.info(`Ouverture de "${doc.title}" en consultation...`);
  };

  return (
    <article
      className="group bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border/40 hover:border-primary/20 animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-card-foreground text-sm leading-tight line-clamp-2">
                {doc.title}
              </h3>
            </div>
          </div>
          <Badge variant="secondary" className={`text-xs flex-shrink-0 rounded-md px-2 py-0.5 font-medium ${typeColors[doc.type] || ""}`}>
            {doc.type}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
          {doc.description}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
            <Tag className="w-3 h-3" />
            {doc.filiere}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
            {doc.niveau}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
            <Calendar className="w-3 h-3" />
            {doc.annee}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border/30">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="w-3 h-3" />
            <span>{doc.author}</span>
            <span className="mx-1">·</span>
            <span>{doc.format} · {doc.size}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleView}
            className="flex-1 h-9 text-xs rounded-lg gap-1.5 border-border/40 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
          >
            <Eye className="w-3.5 h-3.5" />
            Consulter
          </Button>
          <Button
            size="sm"
            onClick={handleDownload}
            disabled={!doc.downloadable}
            className={`flex-1 h-9 text-xs rounded-lg gap-1.5 ${
              doc.downloadable
                ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {doc.downloadable ? (
              <>
                <Download className="w-3.5 h-3.5" />
                Télécharger
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                Restreint
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default DocumentCard;