import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full p-8 bg-neutral-900 text-white">
        <div className="mb-8 space-y-2 text-neutral-400 italic">
          <h1 className="text-3xl">Stype demo</h1>
          <p>
            Stype is a tool for the dynamic creation of CSS classes,{" "}
            <a href="https://github.com/b1n01/stype" className="underline">
              read more.
            </a>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
