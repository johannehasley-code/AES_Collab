"use client";
import { Upload, UserPlus, Download, FileCheck, Clock } from "lucide-react";
interface Activity {
  id: number;
  action: string;
  user: string;
  detail: string;
  time: string;
  icon: React.ElementType;
  color: string;
}
const activities: Activity[] = [
  {
    id: 1,
    action: "Nouveau document",
    user: "Prof. Diallo",
    detail: "a ajouté « Cours — Intelligence Artificielle »",
    time: "Il y a 5 min",
    icon: Upload,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    action: "Nouvel utilisateur",
    user: "Fatou Diop",
    detail: "s'est inscrite — Licence 2, Informatique",
    time: "Il y a 23 min",
    icon: UserPlus,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    id: 3,
    action: "Téléchargement",
    user: "Moussa Ba",
    detail: "a téléchargé « TD — Statistiques descriptives »",
    time: "Il y a 1h",
    icon: Download,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    id: 4,
    action: "Document validé",
    user: "Admin",
    detail: "a approuvé « Mémoire — Transformation digitale »",
    time: "Il y a 2h",
    icon: FileCheck,
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    id: 5,
    action: "Nouveau document",
    user: "Dr. Traoré",
    detail: "a soumis « TP — Réseaux informatiques »",
    time: "Il y a 3h",
    icon: Upload,
    color: "bg-primary/10 text-primary",
  },
];
const AdminRecentActivity = () => {
  return (
    <div className="bg-card border border-border rounded-xl card-shadow">
      <div className="p-5 border-b border-border">
        <h3 className="font-display text-lg font-bold text-foreground">Activité récente</h3>
        <p className="text-sm text-muted-foreground">Les dernières actions sur la plateforme</p>
      </div>
      <div className="divide-y divide-border">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start gap-3 p-4 hover:bg-muted/30 transition-colors">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${activity.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{activity.user}</span>{" "}
                  <span className="text-muted-foreground">{activity.detail}</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AdminRecentActivity;