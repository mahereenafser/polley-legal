import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StatProps {
  label: string;
  value: string;
}

const StatItem = ({ label, value }: StatProps) => (
  <div className="flex items-center justify-between border-b border-border-dark py-4">
    <p className="font-body text-base font-medium text-[#E8E9E6]">{label}</p>
    <p className="font-display text-[80px] leading-none text-white">{value}</p>
  </div>
);

const ClientCentric = () => {
  return (
    <section className="bg-background-primary py-24">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-stretch lg:gap-20">
          <div className="relative flex h-[600px] flex-col justify-end overflow-hidden bg-background-mid-tone p-12 text-white lg:h-auto lg:w-[533px] lg:flex-shrink-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/eVxQKF49LDr3L7gRejPhBixcTHI-8.jpg"
              alt="Lawyers"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-4xl md:text-5xl text-white leading-tight">
                  Dedicated Legal Support
                </h3>
                <p className="font-body text-base font-medium text-[#E8E9E6]">
                  Comprehensive IP protection across Florida
                </p>
              </div>
              <div className="border-t border-border-dark pt-6"></div>
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-4xl md:text-5xl text-white leading-tight">
                  Strategic Guidance
                </h3>
                <p className="font-body text-base font-medium text-[#E8E9E6]">
                  Expert counsel for your innovations
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center">
            <div className="flex w-full flex-col items-start gap-12">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.05em] text-text-secondary">
                Our Approach
              </p>
              <h2 className="font-display text-7xl leading-none tracking-[-0.01em] text-text-primary md:text-8xl lg:text-[96px]">
                Protecting
                <br />
                Creators
              </h2>
              <p className="max-w-[530px] font-body text-2xl leading-normal text-text-primary">
                We help inventors, entrepreneurs, and creators secure their intellectual property rights with expert guidance through every step of the process.
              </p>
              <Link
                href="/about"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-primary px-6 py-4 font-body text-base font-semibold leading-tight tracking-[0.01em] text-primary-foreground transition-colors hover:bg-accent-secondary"
              >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCentric;