import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elite Digital Studio | Portfolio",
  description: "A premium, modern, and legendary portfolio showcasing high-end UI/UX, graphics, and web development projects.",
  openGraph: {
    title: "Elite Digital Studio | Portfolio",
    description: "A premium, modern, and legendary portfolio showcasing high-end UI/UX, graphics, and web development projects.",
    url: "https://elite-digital-studio.vercel.app",
    siteName: "Elite Digital Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&h=630&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Elite Digital Studio Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
