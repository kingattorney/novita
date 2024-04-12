"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import React from "react";
import { TikTokEmbed } from "react-social-media-embed";
import { useCurrentLocale, useI18n } from "../../../../locales/client";
import { cn } from "@/lib/utils";

export default function Hero() {
  const t = useI18n();
  const locale = useCurrentLocale();

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="container py-10">
      <h2 className="text-4xl font-medium text-center font-itim text-[#3FA514]">
        {t("product_info")}
      </h2>
      <div className="py-10 flex flex-col gap-20 justify-center  md:flex-row gap-5 items-center">
        <picture className="w-full">
          <img
            src={`heroimage_${locale}.png`}
            className="flex-1 w-full"
            alt=""
          />
        </picture>
        <div>
          <Carousel setApi={setApi}>
            <CarouselContent>
              <CarouselItem>
                <TikTokEmbed url="https://www.tiktok.com/@novitagroup/video/7349120696703864066" />
              </CarouselItem>
              <CarouselItem>
                <TikTokEmbed url="https://www.tiktok.com/@novitagroup/video/7356818643902008593" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            {Array.from({ length: count }, (_, i) => (
              <span
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "cursor-pointer mx-1 p-2 rounded drop-shadow",
                  i === current - 1 ? "bg-[#3FA514] text-white" : "bg-gray-200"
                )}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
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
