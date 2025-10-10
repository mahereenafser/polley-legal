import React from 'react';
import { Star } from 'lucide-react';

const logos = [
  { name: 'NEXIUM' },
  { name: 'QUANTA' },
  { name: 'ASTRA' },
  { name: 'VERTEX' },
];

const StatCard = () => (
  <div className="bg-background-dark text-text-inverse p-8 flex flex-col items-center justify-center text-center w-[280px] h-[210px] flex-shrink-0 mx-6">
    <h3 className="font-display text-[5rem] leading-none tracking-tighter">95%</h3>
    <p className="text-sm mt-2 opacity-80 font-body">Client retention rate</p>
  </div>
);

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="w-[240px] h-[210px] flex items-center justify-center flex-shrink-0 mx-6 filter grayscale opacity-60">
    <span className="font-display text-4xl text-text-secondary tracking-widest">{name}</span>
  </div>
);

const TrustedLeadersSection = () => {
  const marqueeItems = (
    <>
      <LogoPlaceholder name={logos[0].name} />
      <LogoPlaceholder name={logos[1].name} />
      <StatCard />
      <LogoPlaceholder name={logos[2].name} />
      <LogoPlaceholder name={logos[3].name} />
    </>
  );

  return (
    <section className="bg-background-secondary text-text-primary py-24 overflow-x-hidden">
      <div className="w-full">
        <div className="relative flex">
          <div className="flex-shrink-0 flex items-center animate-[marquee_60s_linear_infinite]">
            {marqueeItems}
            {marqueeItems}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-center">
          <div className="flex flex-col gap-8">
            <p className="text-lg leading-relaxed text-text-primary font-body">
              Our clients range from Fortune 500 companies to emerging startups, all benefiting from our expertise and commitment to excellence.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-[#F59E0B]">
                <Star size={20} fill="currentColor" strokeWidth={0} />
                <Star size={20} fill="currentColor" strokeWidth={0} />
                <Star size={20} fill="currentColor" strokeWidth={0} />
                <Star size={20} fill="currentColor" strokeWidth={0} />
                <Star size={20} fill="currentColor" strokeWidth={0} />
              </div>
              <p className="text-sm text-text-secondary font-body">4.5/5 from 315+ Reviews</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-display text-text-primary text-[5rem] leading-none tracking-tighter">
              Trusted<br />by Leaders
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedLeadersSection;