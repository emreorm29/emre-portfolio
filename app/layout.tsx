import "./globals.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emre Orman | Portfolyo",
  description: "Yazılım Uzmanı ve Aktüer Adayı",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}