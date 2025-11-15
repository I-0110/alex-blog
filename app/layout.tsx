import type { Metadata } from "next";
import { inter, merriweather } from "@/app/ui/fonts";
import Footer from "@/app/ui/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roughing the Blogger",
  description: "By Alex Becker",
  icons: {
    icon: 'sports.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${merriweather.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
