import { cn } from "@/lib/utils";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter, Itim } from "next/font/google";
import { I18nProviderClient } from "../../../locales/client";
import { getI18n } from "../../../locales/server";
import "../globals.css";

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
      </body>
    </html>
  );
}
