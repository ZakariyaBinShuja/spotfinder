import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./componet/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpotFinder",
  description: "SpotFinder: Your guide to discovering the best local restaurants and tourist attractions"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div>
            <Navbar/>
          </div>
        </div>
        {children}</body>
    </html>
  );
}
