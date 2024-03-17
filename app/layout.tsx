import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/components/navbar/navbar"
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arda Yesildag | Front-end Web Developer",
  description: "Basic portfolio website made with Nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
