"use client";
import HeroSection from "@/Components/Hero";
import StatsBar from "@/Components/statisBar";
import FilterBar from "@/Components/filter";
import DocumentGrid from "@/Components/documentgrid";
import { useDocumentSearch } from "@/Components/documentsearch";
import FileUpload from "@/Components/kokonutui/fileupload";

export default function DocumentsPage() {
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
    <div className="container mx-auto px-4 py-6">
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

      <div id="upload" className="mt-10 scroll-mt-24">
        <FileUpload />
      </div>
    </div>
  );
}
