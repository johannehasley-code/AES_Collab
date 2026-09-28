import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AES Connect",
  description: "Recherchez, filtrez et téléchargez vos documents de cours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
