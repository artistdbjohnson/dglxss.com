import type { Metadata } from "next";
import { LocaleShell } from "@/components/locale-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "what dreams may come true — built by dglxss",
  description: "Product design portfolio by dglxss.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="bg-black text-white antialiased">
        <LocaleShell>{children}</LocaleShell>
      </body>
    </html>
  );
}
