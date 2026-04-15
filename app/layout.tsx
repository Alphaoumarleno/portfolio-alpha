import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpha Oumar Leno | Cloud & Salesforce Engineer",
  description:
    "Ingénieur Cloud, Salesforce et IoT. Portfolio professionnel orienté développement, automatisation et architectures modernes.",
  keywords: [
    "Alpha Oumar Leno",
    "Salesforce",
    "Apex",
    "LWC",
    "Cloud",
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
      "Portfolio professionnel – Cloud, Salesforce, IoT et DevOps.",
    url: "https://alphaoumarleno.com",
    siteName: "Alpha Oumar Leno Portfolio",
    images: [
      {
        url: "/preview.png",
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
      "Portfolio professionnel – Cloud, Salesforce, IoT et DevOps.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
