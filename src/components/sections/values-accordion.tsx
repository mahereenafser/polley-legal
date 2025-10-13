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
    <section className="bg-gradient-to-br from-[#1E3432] via-[#2C4A47] to-[#1E3432] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container py-20 md:py-32 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <p className="text-[#f8d0b3] font-semibold uppercase tracking-widest text-sm mb-4">Our Values</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            What Drives Us
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {valuesData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-none bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/8 group"
            >
              <AccordionTrigger className="px-6 md:px-10 py-8 md:py-10 text-left hover:no-underline [&[data-state=open]]:bg-white/10">
                <div className="flex w-full items-center justify-between gap-4">
                  <div className="flex items-center gap-6 md:gap-10 flex-1">
                    <span className="font-display text-4xl md:text-5xl text-[#f8d0b3] font-bold shrink-0">{item.number}</span>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-tight">{item.title}</h3>
                      <span className="font-semibold uppercase tracking-[0.2em] text-[#f8d0b3] text-xs md:text-sm">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-8 w-8 md:h-10 md:w-10 shrink-0 rounded-full bg-[#f8d0b3] flex items-center justify-center transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <Plus className="h-5 w-5 md:h-6 md:w-6 text-[#1E3432] opacity-100 transition-opacity duration-300 group-data-[state=open]:opacity-0 absolute" />
                    <Minus className="h-5 w-5 md:h-6 md:w-6 text-[#1E3432] opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100 absolute" />
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-10 pt-6 pb-10 animate-accordion-down">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12">
                  <div className="max-w-xl">
                    <p className="leading-relaxed text-white/90 text-lg md:text-xl font-light">
                      {item.description}
                    </p>
                  </div>
                  {item.image && (
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                      <Image
                        src={item.image}
                        alt={`${item.title} - ${item.subtitle}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
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
