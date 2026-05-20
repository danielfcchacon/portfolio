import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {

  title: "Daniel Castro | Engineer & Builder",

  description:
    "Engineer building SaaS products end-to-end, combining technical execution with business strategy. Helping startups ship faster, scale smarter, and turn ideas into real products.",

  metadataBase: new URL("https://portfolio-bice-one-80.vercel.app"),
  openGraph: {

    title: "Daniel Castro — Engineer & Builder",
    description:
      "Engineer who builds SaaS products and understands the business behind them.",

    images: ["https://portfolio-bice-one-80.vercel.app/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Castro — Engineer & Builder",
    description: "Engineer who builds SaaS products and understands the business behind them.",
    images: ["https://portfolio-bice-one-80.vercel.app/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
