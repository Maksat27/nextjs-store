import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Next Storefront",
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
