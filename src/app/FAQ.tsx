import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DocumentRenderer } from "@keystatic/core/renderer";
const reader = createReader(process.cwd(), keystaticConfig);

export default async function FAQ() {
  const faqs = await reader.collections.faq.all();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Câu hỏi thường gặp</h2>
      <Accordion type="single" collapsible>
        {faqs.map(async (faq) => (
          <AccordionItem value={faq.slug} key={faq.slug}>
            <AccordionTrigger>{faq.entry.question}</AccordionTrigger>
            <AccordionContent>
              <DocumentRenderer document={await faq.entry.answer()} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
