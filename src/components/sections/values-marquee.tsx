import React from 'react';

const MarqueeItem = () => (
  <li className="flex-shrink-0 mx-8">
    <h1 className="font-display text-[8rem] lg:text-[10rem] text-[#2C4A47] whitespace-nowrap leading-none tracking-[-0.01em]">
      Our <em className="italic">Values</em>
    </h1>
  </li>
);

const MarqueeContent = () => {
  const repetitions = Array(6).fill(0);
  return (
    <ul className="flex items-center">
      {repetitions.map((_, i) => <MarqueeItem key={i} />)}
    </ul>
  );
};

const ValuesMarquee = () => {
  return (
    <section className="bg-[#F4CCBA] w-full py-12 lg:h-[200px] flex items-center overflow-hidden">
      <div className="flex animate-[marquee_40s_linear_infinite]">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
};

export default ValuesMarquee;