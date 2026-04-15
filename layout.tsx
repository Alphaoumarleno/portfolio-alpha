import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpha Oumar Leno | Cloud & Salesforce Engineer",
  description:
    "Ingénieur Cloud, Salesforce et IoT. Spécialisé en développement Apex, LWC, automatisation, DevOps et architectures cloud modernes.",

  keywords: [
    "Salesforce",
    "Apex",
    "LWC",
    "Cloud Engineer",
    "DevOps",
    "IoT",
    "AWS",
    "React",
    "Next.js",
    "Portfolio",
  ],

  authors: [{ name: "Alpha Oumar Leno" }],

  creator: "Alpha Oumar Leno",

  metadataBase: new URL("https://alphaoumarleno.com"),

  openGraph: {
    title: "Alpha Oumar Leno | Cloud & Salesforce Engineer",
    description:
      "Portfolio professionnel – Salesforce, Cloud, IoT, DevOps. Découvrez mes projets et mon expérience.",
    url: "https://alphaoumarleno.com",
    siteName: "Alpha Oumar Leno Portfolio",
    images: [
      {
        url: "/preview.png", // image à ajouter dans /public
        width: 1200,
        height: 630,
        alt: "Portfolio Alpha Oumar Leno",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alpha Oumar Leno | Cloud & Salesforce Engineer",
    description:
      "Ingénieur Cloud, Salesforce & IoT – Portfolio professionnel.",
    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
