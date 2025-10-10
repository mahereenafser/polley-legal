import Image from "next/image";

const TestimonialPrimary = () => {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col gap-16">
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-text-primary">
            500+ IP filings protected
          </p>
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-24">
            <div className="lg:flex-1">
              <h3 className="font-normal">
                "Polley IP Law secured our trademark portfolio across multiple jurisdictions. Their attention to detail and strategic guidance gave us the confidence to expand globally."
              </h3>
            </div>
            <div className="flex flex-shrink-0 flex-col items-start gap-6">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/tNzkqCtSCztzZYOGrYFcR3JOU-7.webp"
                alt="Marcus Johnson"
                width={104}
                height={104}
                className="h-[104px] w-[104px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-text-primary">
                  Marcus Johnson
                </p>
                <p className="text-base font-medium text-text-primary">
                  CEO, BrandWorks Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialPrimary;