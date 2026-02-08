"use client";
import { X, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Button } from "@/Components/ui/button";
import { FILIERES, NIVEAUX, ANNEES, TYPES } from "@/Components/document";
import { SortOption } from "@/Components/documentsearch";

interface FilterBarProps {
  selectedFiliere: string;
  onFiliereChange: (value: string) => void;
  selectedNiveau: string;
  onNiveauChange: (value: string) => void;
  selectedAnnee: string;
  onAnneeChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
  totalResults: number;
}

const FilterBar = ({
  selectedFiliere,
  onFiliereChange,
  selectedNiveau,
  onNiveauChange,
  selectedAnnee,
  onAnneeChange,
  selectedType,
  onTypeChange,
  sortBy,
  onSortChange,
  onReset,
  hasActiveFilters,
  totalResults,
}: FilterBarProps) => {
  return (
    <div className="bg-card rounded-2xl card-shadow p-5 mb-6 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-foreground">
          <SlidersHorizontal className="w-4 h-4 text-accent" />
          <span className="font-semibold text-sm">Filtres</span>
          <span className="ml-2 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-bold">
            {totalResults} résultat{totalResults !== 1 ? "s" : ""}
          </span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-xs text-muted-foreground hover:text-foreground gap-1"
          >
            <X className="w-3 h-3" />
            Réinitialiser
          </Button>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <Select value={selectedFiliere} onValueChange={(v) => onFiliereChange(v === "all" ? "" : v)}>
          <SelectTrigger className="h-10 rounded-xl text-sm bg-muted/50 border-border/50">
            <SelectValue placeholder="Filière" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les filières</SelectItem>
            {FILIERES.map((f) => (
              <SelectItem key={f} value={f}>{f}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedNiveau} onValueChange={(v) => onNiveauChange(v === "all" ? "" : v)}>
          <SelectTrigger className="h-10 rounded-lg text-sm bg-muted/50 border-border/50">
            <SelectValue placeholder="Niveau" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les niveaux</SelectItem>
            {NIVEAUX.map((n) => (
              <SelectItem key={n} value={n}>{n}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedAnnee} onValueChange={(v) => onAnneeChange(v === "all" ? "" : v)}>
          <SelectTrigger className="h-10 rounded-xl text-sm bg-muted/50 border-border/50">
            <SelectValue placeholder="Année" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les années</SelectItem>
            {ANNEES.map((a) => (
              <SelectItem key={a} value={a}>{a}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedType} onValueChange={(v) => onTypeChange(v === "all" ? "" : v)}>
          <SelectTrigger className="h-10 rounded-xl text-sm bg-muted/50 border-border/50">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            {TYPES.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={(v) => onSortChange(v as SortOption)}>
          <SelectTrigger className="h-10 rounded-xl text-sm bg-muted/50 border-border/50">
            <SelectValue placeholder="Trier par" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Plus récent</SelectItem>
            <SelectItem value="oldest">Plus ancien</SelectItem>
            <SelectItem value="title-asc">Titre A→Z</SelectItem>
            <SelectItem value="title-desc">Titre Z→A</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;