"use client";

import * as React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const valuesData = [
  {
    value: "item-1",
    number: "01",
    title: "Integrity",
    subtitle: "Trust",
    description: "We uphold the highest ethical standards, fostering trust and long-lasting relationships with our clients and colleagues.",
    image: null,
  },
  {
    value: "item-2",
    number: "02",
    title: "Innovation",
    subtitle: "Forward-thinking",
    description: "We embrace cutting-edge legal strategies and technologies to stay ahead of evolving challenges in the legal landscape.",
    image: "https://framerusercontent.com/images/fvb9alQqu0RnQpJt7fyXnVHf4.jpg",
  },
  {
    value: "item-3",
    number: "03",
    title: "Excellence",
    subtitle: "Best-in-class",
    description: "We strive for excellence in every aspect of our work, delivering superior results and exceeding client expectations.",
    image: "https://framerusercontent.com/images/qczjTcTGhNr04QiZO8QMBftMhg.jpg",
  },
];

const ValuesAccordion = () => {
  return (
    <section className="bg-[#2C4A47] text-white">
      <div className="container py-16 md:py-24">
        <Accordion type="single" collapsible className="w-full">
          {valuesData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-[#2D4745] group"
            >
              <AccordionTrigger className="py-8 text-left hover:no-underline">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="font-body text-sm text-white/70">{item.number}</span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl">{item.title}</h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-4 md:gap-8">
                    <span className="hidden whitespace-nowrap font-semibold uppercase tracking-widest text-white/70 md:block text-sm">
                      {item.subtitle}
                    </span>
                    <div className="relative h-6 w-6 shrink-0">
                      <Plus className="h-full w-full opacity-100 transition-opacity duration-300 group-data-[state=open]:opacity-0" />
                      <Minus className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-12 animate-accordion-down">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-16">
                  <div className="max-w-xl">
                    <p className="mb-4 block font-semibold uppercase tracking-widest text-white/70 md:hidden text-sm">
                      {item.subtitle}
                    </p>
                    <p className="leading-relaxed text-white/80 text-base md:text-lg">
                      {item.description}
                    </p>
                  </div>
                  {item.image && (
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.image}
                        alt={`${item.title} - ${item.subtitle}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ValuesAccordion;