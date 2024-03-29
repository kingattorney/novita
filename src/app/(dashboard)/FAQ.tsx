import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import DangKy from "./DangKy";
const reader = createReader(process.cwd(), keystaticConfig);

export default async function FAQ({ limit = true }: { limit?: boolean }) {
  const faqs = await await reader.collections.faq.all();

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
        Câu hỏi thường gặp
      </h2>
      <div className="container mt-10">
        <div className="bg-white flex flex-col p-5 rounded-xl border border-[#71AE0F]">
          <Accordion type="single" collapsible>
            {faqs.slice(0, limit ? 5 : faqs.length).map(async (faq) => (
              <AccordionItem value={faq.slug} key={faq.slug}>
                <AccordionTrigger className="text-left faq-button">
                  {faq.entry.question}
                </AccordionTrigger>
                <AccordionContent>
                  <DocumentRenderer document={await faq.entry.answer()} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {limit && (
            <Button className="mt-10 mx-auto" variant="outline" asChild>
              <Link href="/faq">Xem thêm</Link>
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
