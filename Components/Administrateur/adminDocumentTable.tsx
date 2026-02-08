"use client";
import { documents } from "@/Components/document";
import { MoreHorizontal, Eye, Pencil, Trash2, Download, Search } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/Components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
const AdminDocumentTable = () => {
  const [search, setSearch] = useState("");
  const filtered = documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.author.toLowerCase().includes(search.toLowerCase()) ||
      doc.filiere.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden card-shadow">
      {/* Header */}
      <div className="p-5 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Documents récents</h3>
          <p className="text-sm text-muted-foreground">{documents.length} documents au total</p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring w-full sm:w-64"
          />
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Titre</th>
              <th className="text-left px-5 py-3 font-semibold text-muted-foreground hidden md:table-cell">Filière</th>
              <th className="text-left px-5 py-3 font-semibold text-muted-foreground hidden lg:table-cell">Type</th>
              <th className="text-left px-5 py-3 font-semibold text-muted-foreground hidden sm:table-cell">Auteur</th>
              <th className="text-left px-5 py-3 font-semibold text-muted-foreground">Statut</th>
              <th className="text-right px-5 py-3 font-semibold text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((doc) => (
              <tr
                key={doc.id}
                className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="px-5 py-3.5">
                  <div>
                    <p className="font-medium text-foreground truncate max-w-[220px]">{doc.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{doc.size} · {doc.format}</p>
                  </div>
                </td>
                <td className="px-5 py-3.5 hidden md:table-cell">
                  <Badge variant="secondary" className="font-medium text-xs">
                    {doc.filiere}
                  </Badge>
                </td>
                <td className="px-5 py-3.5 hidden lg:table-cell text-muted-foreground">
                  {doc.type}
                </td>
                <td className="px-5 py-3.5 hidden sm:table-cell text-muted-foreground">
                  {doc.author}
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      doc.downloadable
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${doc.downloadable ? "bg-emerald-500" : "bg-amber-500"}`} />
                    {doc.downloadable ? "Publié" : "En attente"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-1.5 rounded-md hover:bg-accent transition-colors">
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Eye className="w-4 h-4" /> Voir
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Pencil className="w-4 h-4" /> Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Download className="w-4 h-4" /> Télécharger
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer text-destructive focus:text-destructive">
                        <Trash2 className="w-4 h-4" /> Supprimer
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && (
        <div className="p-10 text-center text-muted-foreground">
          Aucun document trouvé pour « {search} »
        </div>
      )}
    </div>
  );
};
export default AdminDocumentTable;