import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Link from "next/link";
import DangKy from "./DangKy";
const reader = createReader(process.cwd(), keystaticConfig);

export default async function FAQ({ limit = true }: { limit?: boolean }) {
  const faqs = await await (
    await reader.collections.faq.all()
  ).sort((a, b) => {
    const matchA = a.slug.match(/hoi-(\d+)-/);
    const matchB = b.slug.match(/hoi-(\d+)-/);
    if (matchA && matchB) {
      return parseInt(matchA[1], 10) - parseInt(matchB[1], 10);
    }
    return 0;
  });

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
          <Accordion type="multiple">
            {faqs.slice(0, limit ? 5 : faqs.length).map(async (faq) => (
              <AccordionItem
                value={faq.slug}
                key={faq.slug}
                className="prose max-w-none prose-h3:m-0"
              >
                <AccordionTrigger className="text-left faq-button py-7">
                  {faq.entry.question}
                </AccordionTrigger>
                <AccordionContent>
                  <DocumentRenderer document={await faq.entry.answer()} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {limit && (
            <Button className="mt-10 mx-auto " variant="outline" asChild>
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
