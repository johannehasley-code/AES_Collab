"use client";
import {
  LayoutDashboard,
  FileText,
  Users,
  Upload,
  BarChart3,
  Settings,
  GraduationCap,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
type AdminView = "dashboard" | "documents" | "users" | "uploads" | "stats" | "settings";
interface AdminSidebarProps {
  activeView: AdminView;
  onViewChange: (view: AdminView) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}
import Link from "next/link";
const menuItems: { id: AdminView; label: string; icon: React.ElementType }[] = [
  { id: "dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "users", label: "Utilisateurs", icon: Users },
  { id: "uploads", label: "Uploads", icon: Upload },
  { id: "stats", label: "Statistiques", icon: BarChart3 },
  { id: "settings", label: "Paramètres", icon: Settings },
];
const AdminSidebar = ({ activeView, onViewChange, collapsed, onToggleCollapse }: AdminSidebarProps) => {
  return (
    <aside
      className={cn(
        "h-screen sticky top-0 flex flex-col border-r border-border bg-card transition-all duration-300",
        collapsed ? "w-[68px]" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center gap-3 px-4 border-b border-border">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <GraduationCap className="w-5 h-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="flex flex-col min-w-0">
            <span className="font-display text-sm font-bold text-foreground truncate">
              AES Connect
            </span>
            <span className="text-[10px] text-muted-foreground font-medium">Administration</span>
          </div>
        )}
      </div>
      {/* Nav */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="w-[18px] h-[18px] shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>
      {/* Footer */}
      <div className="p-3 border-t border-border space-y-1">
        <button
          onClick={onToggleCollapse}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <ChevronLeft
            className={cn(
              "w-[18px] h-[18px] shrink-0 transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          />
          {!collapsed && <span>Réduire</span>}
        </button>
        <Link
          href="/"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
        >
          <LogOut className="w-[18px] h-[18px] shrink-0" />
          {!collapsed && <span>Quitter</span>}
        </Link>
      </div>
    </aside>
  );
};
export default AdminSidebar;
export type { AdminView };