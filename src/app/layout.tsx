import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balcad Travel Agency",
  description: "Adeegyo safar oo hufan oo lagu kalsoonaan karo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="so">
      <body className="antialiased text-slate-900 bg-slate-50">
        {children}
      </body>
    </html>
  );
}
