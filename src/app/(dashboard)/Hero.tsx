"use client";
import React from "react";
import { TikTokEmbed } from "react-social-media-embed";

export default function Hero() {
  return (
    <div className="py-10 flex gap-5 items-center">
      <picture>
        <img src="z5288918661266_d563c8c11eef5587f24e279e03f6932f.jpg" alt="" />
      </picture>
      <TikTokEmbed
        url="https://www.tiktok.com/@novitagroup/video/7349120696703864066"
        width="100%"
      />
    </div>
  );
}
