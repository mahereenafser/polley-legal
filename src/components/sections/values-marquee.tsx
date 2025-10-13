import React from 'react';

const MarqueeItem = () => (
  <li className="flex-shrink-0 mx-8">
    <h1 className="font-display text-[24px] text-[#2C4A47] whitespace-nowrap leading-none tracking-[-0.01em]">
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
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <section className="bg-[#EAEBE5] w-full py-12 lg:h-[200px] flex items-center overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] motion-reduce:animate-none">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </section>
    </>
  );
};

export default ValuesMarquee;