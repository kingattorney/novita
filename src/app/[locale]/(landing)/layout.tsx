import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import LocaleSwitcher from "./LocaleSwitcher";
import { getI18n } from "../../../../locales/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getI18n();
  return (
    <div>
      <header>
        <div className="h-8 bg-[#75AD1A]"></div>
        <div className="container  py-4 flex flex-col md:flex-row gap-5 items-start  justify-between text-[#42A761] text-xl font-bold md:items-center">
          <div className="flex gap-10 items-center flex-1 w-full justify-between ">
            <Link href="/">
              <picture>
                <img src="logo.svg" alt="" />
              </picture>
            </Link>
            <div className="flex-1">
              <Link href="/gallery" className="hover:text-[#75AD1A] text-base">
                Thư viện
              </Link>
            </div>
            <LocaleSwitcher />
          </div>

          <a href="tel:0963718946">Hotline: 0963 718 946</a>
        </div>
      </header>
      {children}
      <footer
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        <div className="container py-10 flex-col flex justify-center items-center">
          <p className="font-medium text-3xl font-itim text-white underline">
            {t("contact_info")}
          </p>
          <ul className="text-white font-itim text-lg mt-4 text-center">
            <li>{t("contact_address")}</li>
            <li>{t("contact_phone")}: 0963 718 946</li>
            <li>{t("contact_email")}: Info@novitagroup.vn</li>
          </ul>
        </div>
        <div
          className={cn(
            "flex justify-center items-center h-12 bg-[#1C1C1C] text-white font-itim"
          )}
        >
          <p>© {new Date().getFullYear()} Novita Group</p>
        </div>
      </footer>
    </div>
  );
}
