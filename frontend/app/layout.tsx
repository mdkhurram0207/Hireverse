import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hireverseglobal.in"),
  title: {
    default: "Hireverse Global | Warehouse & Specialist Staffing",
    template: "%s | Hireverse Global",
  },
  description:
    "Hireverse Global provides warehouse staffing, CDL drivers, IT, and healthcare professionals across the USA, Canada, and Australia.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://hireverseglobal.in",
    title: "Hireverse Global | Warehouse & Specialist Staffing",
    description:
      "Warehouse staffing, CDL drivers, IT, and healthcare professionals for fulfillment centers, logistics, and healthcare providers.",
    siteName: "Hireverse Global",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-neutral-50 text-neutral-900">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
