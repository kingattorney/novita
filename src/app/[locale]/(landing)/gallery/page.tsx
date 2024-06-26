import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import { getCurrentLocale, getI18n } from "../../../../../locales/server";
import { Intro, dataByLocale } from "./data";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("gallery"),
    metadataBase: new URL("https://novitagroup.vn"),
  };
}

export default async function Page() {
  const locale = await getCurrentLocale();
  const t = await getI18n();
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/hero.png')",
        }}
        className="py-14"
      >
        <picture>
          <img src="/logo2.svg" className="mx-auto mb-5" alt="" />
        </picture>
        <h1 className="text-4xl font-medium text-center font-itim text-white">
          {t("gallery")}
        </h1>
        <h2 className="text-2xl mt-3 font-medium text-center font-itim text-white">
          {t("hero.subslogan")}
        </h2>
      </div>
      <div className="container py-10 gap-5 flex flex-col items-center max-w-screen-lg">
        <Breadcrumb className="w-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{t("gallery")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="bg-white flex  flex-col prose max-w-none  p-5 rounded-xl  border border-[#71AE0F]">
          <Intro locale={locale} />
          <div className="space-y-5">
            {dataByLocale[locale as "vi"].map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 py-2 no-underline rounded-xl border border-[#71AE0F]"
              >
                <p className="text-lg font-medium text-[#629809] font-itim">
                  {item.title}
                </p>
                <ChevronRight className="w-6 h-6 text-[#629809]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
