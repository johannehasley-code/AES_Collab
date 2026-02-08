"use client";
import { useState, useMemo } from "react";
import { documents, Document } from "@/Components/document";

export type SortOption = "recent" | "oldest" | "title-asc" | "title-desc";

interface UseDocumentSearchReturn {
  filteredDocuments: Document[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFiliere: string;
  setSelectedFiliere: (filiere: string) => void;
  selectedNiveau: string;
  setSelectedNiveau: (niveau: string) => void;
  selectedAnnee: string;
  setSelectedAnnee: (annee: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  totalResults: number;
  resetFilters: () => void;
  hasActiveFilters: boolean;
}

export function useDocumentSearch(): UseDocumentSearchReturn {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFiliere, setSelectedFiliere] = useState("");
  const [selectedNiveau, setSelectedNiveau] = useState("");
  const [selectedAnnee, setSelectedAnnee] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("recent");

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedFiliere !== "" ||
    selectedNiveau !== "" ||
    selectedAnnee !== "" ||
    selectedType !== "";

  const filteredDocuments = useMemo(() => {
    let results = [...documents];

    // Search by keywords
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const keywords = query.split(/\s+/);
      results = results.filter((doc) => {
        const searchableText = `${doc.title} ${doc.description} ${doc.author} ${doc.tags.join(" ")}`.toLowerCase();
        return keywords.every((keyword) => searchableText.includes(keyword));
      });
    }

    // Filter by filiere
    if (selectedFiliere) {
      results = results.filter((doc) => doc.filiere === selectedFiliere);
    }

    // Filter by niveau
    if (selectedNiveau) {
      results = results.filter((doc) => doc.niveau === selectedNiveau);
    }

    // Filter by annee
    if (selectedAnnee) {
      results = results.filter((doc) => doc.annee === selectedAnnee);
    }

    // Filter by type
    if (selectedType) {
      results = results.filter((doc) => doc.type === selectedType);
    }

    // Sort
    switch (sortBy) {
      case "recent":
        results.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
      case "oldest":
        results.sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime());
        break;
      case "title-asc":
        results.sort((a, b) => a.title.localeCompare(b.title, "fr"));
        break;
      case "title-desc":
        results.sort((a, b) => b.title.localeCompare(a.title, "fr"));
        break;
    }

    return results;
  }, [searchQuery, selectedFiliere, selectedNiveau, selectedAnnee, selectedType, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedFiliere("");
    setSelectedNiveau("");
    setSelectedAnnee("");
    setSelectedType("");
    setSortBy("recent");
  };

  return {
    filteredDocuments,
    searchQuery,
    setSearchQuery,
    selectedFiliere,
    setSelectedFiliere,
    selectedNiveau,
    setSelectedNiveau,
    selectedAnnee,
    setSelectedAnnee,
    selectedType,
    setSelectedType,
    sortBy,
    setSortBy,
    totalResults: filteredDocuments.length,
    resetFilters,
    hasActiveFilters,
  };
}