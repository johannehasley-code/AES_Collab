"use client";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/Hero";
import StatsBar from "@/Components/statisBar";
import FilterBar from "@/Components/filter";
import DocumentGrid from "@/Components/documentgrid";
import { useDocumentSearch } from "@/Components/documentsearch";
import { Toaster } from "@/Components/ui/sonner";
import FileUpload from "@/Components/kokonutui/fileupload";
// import admin from "@/Components/Admin/admin";

export default function HomePage() {
  const {
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
    totalResults,
    resetFilters,
    hasActiveFilters,
  } = useDocumentSearch();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalDocuments={filteredDocuments.length}
        />
        
        <StatsBar />
        
        <FilterBar
          selectedFiliere={selectedFiliere}
          onFiliereChange={setSelectedFiliere}
          selectedNiveau={selectedNiveau}
          onNiveauChange={setSelectedNiveau}
          selectedAnnee={selectedAnnee}
          onAnneeChange={setSelectedAnnee}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onReset={resetFilters}
          hasActiveFilters={hasActiveFilters}
          totalResults={totalResults}
        />
        
        <DocumentGrid documents={filteredDocuments} />
         <div ><FileUpload/></div>
      </main>
      
      <footer className="mt-12 py-6 border-t border-border text-center text-sm text-muted-foreground">
        <p>Fait avec 🐶 par l&apos;équipe AES · 2026</p>
      </footer>
      
      <Toaster position="top-right" />
     
    </div>
  );
}