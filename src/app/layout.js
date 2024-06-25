import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farm Cars App",
  description: "Next.js + FastAPI + MongoDB App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="p-4  min-h-[calc(100vh-56px)]">
          {children}
        </div>
      </body>
    </html>
  );
}
