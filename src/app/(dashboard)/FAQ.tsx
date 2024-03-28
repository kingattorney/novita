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
const reader = createReader(process.cwd(), keystaticConfig);

export default async function FAQ({ limit = true }: { limit?: boolean }) {
  const faqs = await await reader.collections.faq.all();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Câu hỏi thường gặp</h2>
      <Accordion type="single" collapsible>
        {faqs.slice(0, limit ? 5 : faqs.length).map(async (faq) => (
          <AccordionItem value={faq.slug} key={faq.slug}>
            <AccordionTrigger>{faq.entry.question}</AccordionTrigger>
            <AccordionContent>
              <DocumentRenderer document={await faq.entry.answer()} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-center">
        <Button variant="link" className="mt-10 mx-auto" asChild>
          <Link href="/faq">Xem thêm</Link>
        </Button>
      </div>
    </div>
  );
}
