import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My Task App",
  description: "A simple task management app",
  keywords: ["task", "management", "app", "nextjs", "typescript", "supabase"],
  authors: [{ name: "Chetsada", url: "https://chetsada.dev" }],
  creator: "Chetsada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansThai.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
