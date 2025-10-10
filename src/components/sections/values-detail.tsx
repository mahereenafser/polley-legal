import Image from "next/image";
import React from "react";

type ValueItemProps = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  imagePosition: "left" | "right" | "none";
};

const ValueItem = ({
  number,
  title,
  subtitle,
  description,
  imageUrl,
  imagePosition,
}: ValueItemProps) => {
  const textBlock = (
    <div className="flex flex-col justify-center">
      <header className="flex justify-between items-center mb-8">
        <span className="font-body text-base font-medium text-text-primary">
          {number}
        </span>
        <span className="font-body text-sm font-semibold uppercase tracking-[0.05em] text-text-accent">
          {subtitle}
        </span>
      </header>
      <div className="max-w-xl">
        <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none text-text-primary mb-6">
          {title}
        </h2>
        <p className="font-body text-lg text-text-primary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  const imageBlock = imageUrl ? (
    <div className="relative w-full aspect-[4/5]">
      <Image src={imageUrl} alt={title} fill className="object-cover" />
    </div>
  ) : null;

  if (imagePosition === "none") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
        <div className="col-span-1">{textBlock}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 lg:gap-x-24 items-center">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
};

const valuesData: ValueItemProps[] = [
  {
    number: "01",
    title: "Expertise",
    subtitle: "Deep Knowledge",
    description:
      "Our specialized knowledge in intellectual property law ensures your innovations are protected with precision and care. We stay current with evolving IP regulations.",
    imagePosition: "none",
  },
  {
    number: "02",
    title: "Accessibility",
    subtitle: "Client-Focused",
    description:
      "We make complex IP law clear and accessible. Our team is dedicated to guiding you through every step, ensuring you understand and own your intellectual property rights.",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/fvb9alQqu0RnQpJt7fyXnVHf4-5.jpg",
    imagePosition: "right",
  },
  {
    number: "03",
    title: "Results",
    subtitle: "Proven Success",
    description:
      "With over 500 successful IP filings and a 98% client satisfaction rate, we deliver results that protect your creative assets and build lasting value for your business.",
    imageUrl:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/qczjTcTGhNr04QiZO8QMBftMhg-6.jpg",
    imagePosition: "left",
  },
];

const ValuesDetail = () => {
  return (
    <section className="bg-background-tertiary text-text-primary">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-40">
        <div className="flex flex-col gap-y-16">
          {valuesData.map((value) => (
            <ValueItem key={value.number} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesDetail;