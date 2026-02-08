"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const data = [
  { name: "Sep", documents: 85, downloads: 320 },
  { name: "Oct", documents: 120, downloads: 480 },
  { name: "Nov", documents: 95, downloads: 410 },
  { name: "Déc", documents: 140, downloads: 620 },
  { name: "Jan", documents: 180, downloads: 890 },
  { name: "Fév", documents: 65, downloads: 350 },
];
const AdminChart = () => {
  return (
    <div className="bg-card border border-border rounded-xl card-shadow p-5">
      <div className="mb-5">
        <h3 className="font-display text-lg font-bold text-foreground">Aperçu des 6 derniers mois</h3>
        <p className="text-sm text-muted-foreground">Documents ajoutés vs téléchargements</p>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "13px",
              }}
            />
            <Bar dataKey="documents" name="Documents" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="downloads" name="Téléchargements" fill="hsl(var(--primary) / 0.3)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default AdminChart;