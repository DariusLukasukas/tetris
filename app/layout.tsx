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
        <div className="gridx"></div>
        <div className="lines"></div>
        <div className="container mx-auto h-screen">{children}</div>
      </body>
    </html>
  );
}
