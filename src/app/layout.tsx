import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tri Le's Portfolio",
  description: "Tri Le is a full-stack developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="
          bg-[#fbe2e3]
          absolute -z-10
          top-[-6rem] right-[11rem]
          h-[31.25rem] w-[31.25rem] sm:w-[68.75rem]
          rounded-full
          blur-[10rem]
        "></div>
        <div className="
          bg-[#dbd7fb]
          absolute -z-10
          top-[-6rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
          h-[31.25rem] w-[31.25rem] sm:w-[68.75rem]
          rounded-full
          blur-[10rem]
        "></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
