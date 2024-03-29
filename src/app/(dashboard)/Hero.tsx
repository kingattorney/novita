"use client";
import React from "react";
import { TikTokEmbed } from "react-social-media-embed";

export default function Hero() {
  return (
    <div className="container py-10">
      <h2 className="text-4xl font-medium text-center font-itim text-[#3FA514]">
        Thông tin sản phẩm
      </h2>
      <div className="py-10 flex flex-col justify-center items-center md:flex-row gap-5 items-center">
        <picture className="w-full">
          <img src="heroimage.png" className="flex-1 w-full" alt="" />
        </picture>
        <TikTokEmbed
          url="https://www.tiktok.com/@novitagroup/video/7349120696703864066"
          className="w-full"
        />
      </div>
    </div>
  );
}
