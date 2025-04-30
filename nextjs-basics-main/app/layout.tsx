import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Asap } from "next/font/google";
import prisma from "@/lib/prisma";

const asap = Asap({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Microblog",
  description: "Share your best thoughts",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={asap.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
