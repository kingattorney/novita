import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

import { DocumentRenderer } from "@keystatic/core/renderer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const reader = createReader(process.cwd(), keystaticConfig);

export async function FAQ() {
  const faqs = await reader.collections.faq.all();
  async function Item({ faq }: { faq: any }) {
    return (
      <AccordionItem value={faq.slug}>
        <AccordionTrigger>{faq.entry.question}</AccordionTrigger>
        <AccordionContent>
          <DocumentRenderer document={await faq.entry.answer()} />
        </AccordionContent>
      </AccordionItem>
    );
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Câu hỏi thường gặp</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq) => (
          <Item faq={faq} key={faq.slug} />
        ))}
      </Accordion>
    </div>
  );
}
