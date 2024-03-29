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
      onClick={() =>
        sendGTMEvent({
          event: "buttonClicked",
          value: "register_form_click",
        })
      }
    >
      <Link href="https://forms.gle/oX4NmPLxzYMVv2Lo9" target="blank">
        Đăng ký tham gia sử dụng &quot;Lò không khói&quot;
      </Link>
    </Button>
  );
}
