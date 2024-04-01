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
        <div className="container flex-wrap py-4 flex gap-5  justify-between text-[#42A761] text-xl font-bold items-center">
          <div className="flex gap-3 items-center flex-1  justify-between ">
            <Link href="/">
              <picture>
                <img src="logo.svg" alt="" />
              </picture>
            </Link>
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
            <li>
              <b> {t("contact_address")}: </b>
              tầng 4, Tòa nhà Lam Giang, 167-173 Trần Hưng Đạo, Phường Cô Giang,
              Quận 1, Tp.Hồ Chí Minh
            </li>
            <li>
              <b> {t("contact_phone")}: </b> 0963 718 946
            </li>
            <li>
              <b>{t("contact_email")}: </b>
              Info@novitagroup.vn
            </li>
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
