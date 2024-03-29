import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter as FontSans, Itim } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
});
const fontItim = Itim({
  subsets: ["vietnamese"],
  variable: "--font-itim",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dự án Cù Lao An Bình Chứng Ngộ",
  description: 'Triển khai sản phẩm "Lò không khói của Tiến sỹ Paul"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
          fontItim.variable
        )}
      >
        {children}
        <GoogleAnalytics gaId="G-R0LWKVRG10" />
      </body>
    </html>
  );
}
