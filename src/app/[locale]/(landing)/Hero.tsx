"use client";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { TikTokEmbed } from "react-social-media-embed";
import { useCurrentLocale, useI18n } from "../../../../locales/client";

export default function Hero() {
  const t = useI18n();
  const locale = useCurrentLocale();

  return (
    <div className="container py-10">
      <h2 className="text-4xl font-medium text-center font-itim text-[#3FA514]">
        {t("product_info")}
      </h2>
      <div className="py-10 flex flex-col  justify-center  md:flex-row gap-5 items-center">
        <picture className="w-full">
          <img
            src={`heroimage_${locale}.jpg`}
            className="flex-1 w-full"
            alt=""
          />
        </picture>
        <div className="w-full">
          <TikTokEmbed url="https://www.tiktok.com/@novitagroup/video/7349120696703864066" />
          <div className="py-2 text-center text-sm text-muted-foreground">
            <Link
              href="/videos"
              target="_blank"
              className="cursor-pointer mx-1 p-2 rounded drop-shadow bg-[#3FA514] text-white"
            >
              1
            </Link>
            <Link
              href="/videos"
              target="_blank"
              className="cursor-pointer mx-1 p-2 rounded drop-shadow bg-[#3FA514] text-white"
            >
              2
            </Link>
            <Link
              href="/videos"
              target="_blank"
              className="cursor-pointer mx-1 p-2 rounded drop-shadow bg-[#3FA514] text-white"
            >
              {t("view_more")}
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-screen-md mx-auto">
        <picture className="w-full">
          <img src={`leaf-2.jpg`} className="flex-1 w-full" alt="" />
        </picture>
      </div>
      <div className="flex mt-10 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-[#71AE0F] text-lg md:text-xl font-itim whitespace-normal text-center h-auto py-4 hover:bg-[#3FA514]"
        >
          <Link href="/gallery">{t("gallery")}</Link>
        </Button>
      </div>
    </div>
  );
}
