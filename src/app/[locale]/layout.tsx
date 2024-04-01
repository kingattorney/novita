import { cn } from "@/lib/utils";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter as FontSans, Itim } from "next/font/google";
import "../globals.css";
import { I18nProviderClient } from "../../../locales/client";

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
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
          fontItim.variable
        )}
      >
        <GoogleTagManager gtmId="GTM-5R8KVQ2N" />
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        <GoogleAnalytics gaId="G-R0LWKVRG10" />
      </body>
    </html>
  );
}
