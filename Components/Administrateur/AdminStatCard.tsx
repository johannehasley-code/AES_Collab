"use client";
import { FileText, Users, Download, Eye, TrendingUp, TrendingDown } from "lucide-react";
interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ElementType;
  color: string;
}
const stats: StatCard[] = [
  {
    label: "Documents",
    value: "1,247",
    change: "+12%",
    trend: "up",
    icon: FileText,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Utilisateurs",
    value: "3,891",
    change: "+8%",
    trend: "up",
    icon: Users,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    label: "Téléchargements",
    value: "24,563",
    change: "+23%",
    trend: "up",
    icon: Download,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    label: "Vues ce mois",
    value: "89,120",
    change: "-3%",
    trend: "down",
    icon: Eye,
    color: "bg-violet-500/10 text-violet-600",
  },
];
const AdminStatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-5 card-shadow hover:card-shadow-hover transition-shadow duration-300"
          >
            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.trend === "up" ? "text-emerald-600" : "text-destructive"}`}>
                {stat.trend === "up" ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {stat.change}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default AdminStatsCards;