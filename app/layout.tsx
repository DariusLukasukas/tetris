import "./globals.css";

export const metadata = {
  title: "Tetris Time",
  description: "Tetris Time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "#0a0a0a" }}>
      <body className="bg-neutral-950 font-semibold text-white">
        {children}
      </body>
    </html>
  );
}
