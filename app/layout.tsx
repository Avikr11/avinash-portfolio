import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinash Bhardwaj | Frontend Web3 Developer",
  description:
    "Portfolio of Avinash Bhardwaj, a Frontend Web3 Developer building modern web applications, dApps and DeFi interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}