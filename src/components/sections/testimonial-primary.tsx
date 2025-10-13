import Image from "next/image";

const TestimonialPrimary = () => {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col gap-16">
          <p className="text-sm font-semibold uppercase tracking-[0.05em] text-text-primary">
            Trusted IP Protection
          </p>
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-24">
            <div className="lg:flex-1">
              <h3 className="font-normal">
                "Polley IP Law secured our trademark portfolio across multiple jurisdictions. Their attention to detail and strategic guidance gave us the confidence to expand globally."
              </h3>
            </div>
            <div className="flex flex-shrink-0 flex-col items-start gap-6">
              <Image
                src="/images/Miles-polley.webp"
                alt="Miles Polley"
                width={104}
                height={104}
                className="h-[104px] w-[104px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-text-primary">
                  Miles Polley
                </p>
                <p className="text-base font-medium text-text-primary">
                  Associate
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