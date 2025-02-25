import type { Metadata } from "next";
import { Playwrite_IT_Moderna, Bungee_Inline } from "next/font/google";
import "./globals.css";

const playwrite_IT_Moderna = Playwrite_IT_Moderna({
  display: 'swap',
  variable: '--font-playwrite',
})

const bungee_Inline = Bungee_Inline({
  weight: '400',
  variable: '--font-bungee',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Wallace Charpente",
  description: "Charpentier, couvreur, zingueur, sarking,  mais aussi recherche de fuite, bachâge...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playwrite_IT_Moderna.variable} ${bungee_Inline.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
