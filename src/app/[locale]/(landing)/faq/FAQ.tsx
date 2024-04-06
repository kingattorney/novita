import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DangKy from "../DangKy";
import { getCurrentLocale, getI18n } from "../../../../../locales/server";

function fetchFAQ(locale: "vi" | "en" | "zh") {
  return fetch(
    "http://45.77.170.65:1337/api/faqs?pagination[pageSize]=1000&locale=" +
      locale
  ).then((res) => res.json());
}

export default async function FAQ({ limit = true }: { limit?: boolean }) {
  const t = await getI18n();

  const locale = getCurrentLocale();
  const { data: faqs } = await fetchFAQ(locale);
  return (
    <div
      style={{
        backgroundImage: "url('/qa.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="py-10"
    >
      <h2 className="text-4xl font-medium text-center text-[#629809] font-itim">
        {t("faq")}
      </h2>
      <div className="container mt-10">
        <div className="bg-white flex flex-col p-5 rounded-xl border border-[#71AE0F]">
          <Accordion type="multiple">
            {faqs
              .slice(0, limit ? 5 : faqs.length)
              .map(async (faq: any, idx: any) => (
                <AccordionItem value={faq.id} key={faq.id}>
                  <AccordionTrigger className="text-left faq-button py-7">
                    {locale != "vi" && `${idx + 1}.`} {faq.attributes.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: faq?.attributes?.answer,
                      }}
                      className="[&>p]:font-inter! prose max-w-none"
                    ></div>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
          {limit && (
            <Button className="mt-10 mx-auto " variant="outline" asChild>
              <Link href="/faq">{t("view_more")}</Link>
            </Button>
          )}
        </div>
        <div className="flex justify-center items-center mt-10">
          <DangKy />
        </div>
      </div>
    </div>
  );
}
