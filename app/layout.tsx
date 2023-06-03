import "./globals.css";

export const metadata = {
  title: "Stype playground",
  description: "Tool for the dynamic creation of CSS classes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
