import "./globals.css";

export const metadata = {
  title: "Keval Mer - Full Stack Developer",
  description: "Full Stack Developer portfolio of Keval Mer. Laravel, PHP, React, JavaScript, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-blue-50 text-gray-800 font-sans dark">
        {children}
      </body>
    </html>
  );
}
