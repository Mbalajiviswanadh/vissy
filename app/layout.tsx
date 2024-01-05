import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vissy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="fantasy" lang="en">
      <body className={inter.className}>
        <div className="lg:mx-80 ">
          <div className=" pt-20">
            <NavBar />
          </div>
          <div className="lg:px-[5%] px-[12%] pt-[5%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
