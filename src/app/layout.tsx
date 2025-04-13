import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planets explorer",
  description: "Explore the planets of our solar system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-gray-900 h-full flex flex-col`}>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/5 p-6">
          <div className="container mx-auto px-4 text-center">
            <p>Developed by ETBGM03</p>
            <p className="text-gray-400 text-sm mt-2">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
