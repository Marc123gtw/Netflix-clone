import "./globals.css"; 
 
export const metadata = {
  title: "Netflix Clone",
  description: "Full Stack Netflix Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
