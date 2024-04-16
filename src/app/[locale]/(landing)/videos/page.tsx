import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Script from "next/script";
import { getI18n } from "../../../../../locales/server";

export default async function Page() {
  const t = await getI18n();
  return (
    <div className="py-10">
      <div className="container">
        <Breadcrumb className="w-full">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Video TikToks</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@novitagroup"
        data-unique-id="novitagroup"
        data-embed-type="creator"
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@novitagroup?refer=creator_embed"
          >
            @novitagroup
          </a>
        </section>
      </blockquote>
      <Script async src="https://www.tiktok.com/embed.js"></Script>
    </div>
  );
}
