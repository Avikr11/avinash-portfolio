
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinash Bhardwaj | Web3 Frontend & Smart Contract Developer",
  description:
    "Portfolio of Avinash Bhardwaj — Web3 Frontend and Smart Contract Developer building decentralized applications, Ethereum smart contracts and modern blockchain experiences.",
  keywords: [
    "Web3 Developer",
    "Frontend Developer",
    "Smart Contract Developer",
    "Solidity",
    "Foundry",
    "React",
    "Next.js",
    "Ethereum",
    "DeFi",
  ],
  openGraph: {
    title: "Avinash Bhardwaj | Web3 Developer",
    description:
      "Building modern decentralized applications and Ethereum smart contracts.",
    type: "website",
  },
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
