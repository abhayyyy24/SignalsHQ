import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where is client data stored?",
    answer:
      "Data is stored in SOC 2 Type II certified data centers with region-specific storage options available for firms with data residency requirements.",
  },
  {
    question: "What happens if there's a data breach?",
    answer:
      "We follow a documented incident response plan with client notification within 72 hours of confirmed unauthorized access, in line with standard breach disclosure practices.",
  },
  {
    question: "Can we control which employees access client files?",
    answer:
      "Yes — role-based permissions let you restrict access down to the individual client file level, with a full audit log of every access event.",
  },
  {
    question: "Is our data used to train AI models?",
    answer:
      "No. Client data is never used to train shared models. Each firm's data remains isolated and is only used to power that firm's own workflows.",
  },
  {
    question: "Do you support single sign-on (SSO)?",
    answer:
      "Yes, SSO is available on our Client Review plan and above, with support for major identity providers.",
  },
];

export default function SecurityFaq() {
  return (
    <section id="security-faq" className="bg-background px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-light">
            Questions
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Security, answered plainly
          </h2>
        </div>

        <Accordion multiple={false} className="w-full">
  {faqs.map((faq, i) => (
    <AccordionItem key={i} className="border-border">
      <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:text-accent-light">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-sm leading-relaxed text-muted">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
      </div>
    </section>
  );
}