import React from 'react';

const MarqueeContent: React.FC = () => (
  <>
    <img
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/svgs/MxN8q3KrpW8QnpzUSkDccXoIuus-2.svg"
      alt="Abstract shape icon 1"
      width={64}
      height={64}
      className="h-16 w-16"
    />
    <img
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/svgs/5f5xNPcV9eGqSJQr52PAqY4fJAY-3.svg"
      alt="Abstract shape icon 2"
      width={64}
      height={64}
      className="h-16 w-16"
    />
    <div className="flex items-center gap-3 whitespace-nowrap font-display text-text-primary">
      <h1 className="text-[42px] font-normal leading-tight tracking-[-0.02em]">
        Consistently retained clients
      </h1>
    </div>
    <img
      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/svgs/jYuzs1OlEiRLJM1mIh68thUkupc-4.svg"
      alt="Abstract shape icon 3"
      width={64}
      height={64}
      className="h-16 w-16"
    />
  </>
);

const RetentionMarquee = () => {
  const repetitions = Array(4).fill(0);

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <section className="flex h-[152px] w-full items-center overflow-hidden bg-secondary">
        <div className="flex animate-[marquee_40s_linear_infinite] motion-reduce:animate-none">
          <div className="flex shrink-0 items-center gap-12 px-6">
            {repetitions.map((_, i) => (
              <React.Fragment key={i}>
                <MarqueeContent />
              </React.Fragment>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-12 px-6">
            {repetitions.map((_, i) => (
              <React.Fragment key={i + repetitions.length}>
                <MarqueeContent />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RetentionMarquee;
