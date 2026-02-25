import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { WebSiteData } from "@/constant";
import { OrganizationJsonLd, WebSiteJsonLd } from "./json-ld";
import "./globals.css";
type Props = {
  children: ReactNode;
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(WebSiteData.url),
  title: {
    default: "Leekono LED - Professional LED Display Solutions",
    template: "%s - Leekono",
  },
  description:
    "Leekono LED - A leading LED display technology company providing indoor, outdoor, rental, and custom LED solutions worldwide.",
  icons: {
    icon: "/favicon-title.png",
    apple: "/favicon-title.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: WebSiteData.name,
    images: [{ url: "/favicon-title.png", width: 512, height: 512 }],
  },
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <AntdRegistry>
          <Header />
          <main className="pt-[50px] md:pt-[64px]">{children}</main>
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
