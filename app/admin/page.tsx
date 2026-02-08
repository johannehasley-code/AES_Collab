"use client";
"use client";
import { useState } from "react";
import AdminSidebar, { type AdminView } from "@/Components/Administrateur/adminSidebar";
import AdminStatsCards from "@/Components/Administrateur/AdminStatCard";
import AdminDocumentTable from "@/Components/Administrateur/adminDocumentTable";
import AdminRecentActivity from "@/Components/Administrateur/adminRecentActivity";
import AdminChart from "@/Components/Administrateur/adminCharts";
import { Bell, Search } from "lucide-react";
const Admin = () => {
  const [activeView, setActiveView] = useState<AdminView>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar
        activeView={activeView}
        onViewChange={setActiveView}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-30 flex items-center justify-between px-6 gap-4">
          <div>
            <h1 className="font-display text-lg font-bold text-foreground">
              {activeView === "dashboard" && "Tableau de bord"}
              {activeView === "documents" && "Gestion des documents"}
              {activeView === "users" && "Utilisateurs"}
              {activeView === "uploads" && "Uploads"}
              {activeView === "stats" && "Statistiques"}
              {activeView === "settings" && "Paramètres"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Recherche rapide..."
                className="pl-9 pr-4 py-2 text-sm rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring w-56"
              />
            </div>
            <button className="relative p-2 rounded-lg hover:bg-accent transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              A
            </div>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {activeView === "dashboard" && (
            <>
              <AdminStatsCards />
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <AdminChart />
                </div>
                <AdminRecentActivity />
              </div>
              <AdminDocumentTable />
            </>
          )}
          {activeView === "documents" && <AdminDocumentTable />}
          {activeView === "users" && (
            <div className="bg-card border border-border rounded-xl p-10 text-center card-shadow">
              <p className="text-muted-foreground text-lg">
                Module de gestion des utilisateurs — à venir
              </p>
            </div>
          )}
          {activeView === "uploads" && (
            <div className="bg-card border border-border rounded-xl p-10 text-center card-shadow">
              <p className="text-muted-foreground text-lg">
                Module de gestion des uploads — à venir
              </p>
            </div>
          )}
          {activeView === "stats" && (
            <>
              <AdminStatsCards />
              <AdminChart />
            </>
          )}
          {activeView === "settings" && (
            <div className="bg-card border border-border rounded-xl p-10 text-center card-shadow">
              <p className="text-muted-foreground text-lg">
                Module de paramètres — à venir
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
export default Admin;