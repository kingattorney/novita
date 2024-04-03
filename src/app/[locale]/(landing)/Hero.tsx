"use client";
import React from "react";
import { TikTokEmbed } from "react-social-media-embed";
import { useCurrentLocale, useI18n } from "../../../../locales/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const t = useI18n();
  const locale = useCurrentLocale();
  return (
    <div className="container py-10">
      <h2 className="text-4xl font-medium text-center font-itim text-[#3FA514]">
        {t("product_info")}
      </h2>
      <div className="py-10 flex flex-col justify-center  md:flex-row gap-5 items-center">
        <picture className="w-full">
          <img
            src={`heroimage_${locale}.png`}
            className="flex-1 w-full"
            alt=""
          />
        </picture>
        <TikTokEmbed
          url="https://www.tiktok.com/@novitagroup/video/7349120696703864066"
          className="w-full"
        />
      </div>
      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-[#71AE0F] text-lg md:text-xl font-itim whitespace-normal text-center h-auto py-4 hover:bg-[#3FA514]"
        >
          <Link href="/gallery">
            Thư viện lưu trữ hình ảnh và video thực nghiệm
          </Link>
        </Button>
      </div>
    </div>
  );
}
