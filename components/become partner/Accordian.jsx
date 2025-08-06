import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AtSign, Command, Eclipse, Zap } from "lucide-react";

const items = [
  {
    id: "1",
    icon: Command,
    title: "Who can become a partner?",
    content:
      "Anyone who is willing to earn and wants to grow with us can be our partner.",
  },
  {
    id: "2",
    icon: Eclipse,
    title: "Is an agreement required to become a partner?",
    content:
      "Yes, each partner must sign a partnership agreement in order to officially join the Partner Program.",
  },
  {
    id: "3",
    icon: Zap,
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    icon: AtSign,
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];

function AccordionDemo() {
  return (
    <div className="space-y-4 max-w-5xl mx-6 md:mx-auto " data-appear="fade-up" data-unload="fade-up">
      <h2 className="text-4xl font-bold my-10 ">Common questions answered</h2>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-6" >
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-1">
            <AccordionTrigger className="py-1 text-[20px] leading-2 hover:no-underline " style={{background : "transparent" , display : "flex" , gap :"10px" , letterSpacing : "normal", border : "none" , padding : "0px"}}>
              <span className="flex items-center gap-3">
                <item.icon
                  size={22}
                  strokeWidth={2}
                  className="shrink-0 opacity-80"
                  aria-hidden="true"
                />
                <span className="text-xl">{item.title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-2 ps-7 text-white text-sm">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export { AccordionDemo };
