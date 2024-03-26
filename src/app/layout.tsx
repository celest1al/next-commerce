import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/Helvetica-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Helvetica-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Ecommerce",
  description: "Next.js Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
