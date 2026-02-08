"use client";
import { Document } from "@/Components/document";
import DocumentCard from "@/Components/documentcard";
import { FileSearch } from "lucide-react";

interface DocumentGridProps {
  documents: Document[];
}

const DocumentGrid = ({ documents }: DocumentGridProps) => {
  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
          <FileSearch className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="font-display font-semibold text-foreground mb-2">Aucun document trouvé</h3>
        <p className="text-muted-foreground text-sm text-center max-w-sm">
          Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {documents.map((doc, index) => (
        <DocumentCard key={doc.id} document={doc} index={index} />
      ))}
    </div>
  );
};

export default DocumentGrid;