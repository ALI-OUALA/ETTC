import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ETTC — English Teacher Training Center",
  description:
    "We transform linguistic proficiency into globally recognized teaching authority. Elite pedagogy, immersive practicums, and unparalleled career architecture for the modern educator.",
  keywords: ["TEFL", "teacher training", "English teaching", "ETTC", "certification"],
  openGraph: {
    title: "ETTC — English Teacher Training Center",
    description: "Elite pedagogy. Immersive practicums. Unparalleled career architecture.",
    type: "website",
  },
};

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import ThreeBackground from '@/components/ThreeBackground';
import WhatsAppFab from '@/components/WhatsAppFab';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased relative font-sans selection:bg-[#00F0FF] selection:text-black">
        {/* Film grain noise overlay */}
        <div className="noise-overlay" />

        {/* Custom cursor */}
        <Cursor />

        {/* Three.js particle sphere – fixed in background */}
        <ThreeBackground />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* Floating action button */}
        <WhatsAppFab />
      </body>
    </html>
  );
}
