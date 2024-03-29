"use client";

import { Button } from "@/components/ui/button";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

export default function DangKy() {
  return (
    <Button
      asChild
      size="lg"
      className="bg-[#71AE0F] text-lg md:text-xl font-itim"
    >
      <Link
        href="https://forms.gle/oX4NmPLxzYMVv2Lo9"
        target="blank"
        id="dang-ky-lo-khong-khoi"
      >
        Đăng ký tham gia sử dụng &quot;Lò không khói&quot;
      </Link>
    </Button>
  );
}
