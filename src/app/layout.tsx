import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/component/header";
import Footer from "@/component/footer";
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
  title: {
    default: "Leekono LED",
    template: "%s - Leekono", // 这个可以保证页面的统一格式，%s 会被替换为子页面的标题
  },
  description: "A leading LED technology company.",
};

export default async function RootLayout({ children }: Readonly<Props>) {
  return (
    <html>
      {/* dir={dir(lng)} */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <Header />
          {children}
          {/* <Footer /> */}
        </AntdRegistry>
      </body>
    </html>
  );
}
