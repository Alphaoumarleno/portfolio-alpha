export const metadata = {
  title: "Alpha Oumar Leno Portfolio",
  description: "Cloud, Salesforce, IoT Engineer",
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
