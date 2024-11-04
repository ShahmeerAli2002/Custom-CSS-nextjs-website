import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIDEOGRAPH Custom CSS nextjs website, ",
  description: "VIDEOGRAPH created by Shahmeer Ali",
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
