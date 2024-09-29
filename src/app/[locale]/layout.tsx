import { cn } from "@/lib/utils";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter, Itim } from "next/font/google";
import { I18nProviderClient } from "../../../locales/client";
import { getI18n } from "../../../locales/server";
import "../globals.css";
import Script from "next/script";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontItim = Itim({
  subsets: ["vietnamese"],
  variable: "--font-itim",
  weight: ["400"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("hero.slogan"),
    description: t("hero.subslogan"),
    metadataBase: new URL("https://novitagroup.vn"),
  };
}

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
          "min-h-screen bg-background antialiased font-inter",
          fontInter.variable,
          fontItim.variable
        )}
      >
        <GoogleTagManager gtmId="GTM-5R8KVQ2N" />
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        <GoogleAnalytics gaId="G-R0LWKVRG10" />
        <Script
          defer
          src="https://umami-iw8g00o0sss88ss8gkwwkk4k.kaapp.net/script.js"
          data-website-id="0ef06839-e585-4aba-914d-62f27878dd23"
        ></Script>
      </body>
    </html>
  );
}
