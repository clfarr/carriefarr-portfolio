import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carrie Farr - Software Engineer | Root Webworks",
  description:
    "Software engineer specializing in React and full-stack development. View my portfolio of web applications and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
