import LeftBar from "@/components/common/leftBar/LeftBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        src="https://kit.fontawesome.com/1e6050d14a.js"
        crossOrigin="anonymous"
      ></script>
      <body className={`${inter.className} flex w-full`}>
        <LeftBar />
        <div className="flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}