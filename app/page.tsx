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

        <section id="documents" className="scroll-mt-24">
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
        </section>

        <div className="mt-6"><FileUpload/></div>

        <section id="about" className="scroll-mt-24 mt-16 py-10 px-6 rounded-2xl bg-muted/40 border border-border/50">
          <h2 className="font-display font-semibold text-2xl text-foreground mb-3 text-center">À propos d&apos;AES Connect</h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-center">
            AES Connect est une plateforme conçue pour faciliter le partage de supports de cours entre étudiants :
            recherche par filière, niveau, année et type de document, téléchargement en un clic, et un espace
            administrateur pour gérer les contenus déposés. Un MVP pensé pour rendre les ressources académiques
            plus accessibles.
          </p>
        </section>
      </main>

      <footer className="mt-12 py-6 border-t border-border text-center text-sm text-muted-foreground">
        <p>Fait avec 🐶 par l&apos;équipe AES · 2026</p>
      </footer>
      
      <Toaster position="top-right" />
     
    </div>
  );
}