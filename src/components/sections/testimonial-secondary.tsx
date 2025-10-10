import Image from "next/image";

const TestimonialSecondary = () => {
  return (
    <section className="bg-background py-20 font-body text-text-primary">
      <div className="mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="flex flex-col items-center gap-12 text-center md:flex-row md:items-start md:gap-14 md:text-left lg:gap-16">
          <div className="flex-shrink-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/5CsAVfBaWq1ekcKrL2NB9R6MM-9.webp"
              alt="Portrait of Sophia Wilson"
              width={160}
              height={160}
              className="h-32 w-32 rounded-full object-cover shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] md:h-40 md:w-40"
            />
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <blockquote className="text-quote">
              "From copyright registration to defending against infringement, Polley IP Law has been instrumental in protecting our creative assets. Their expertise is unmatched."
            </blockquote>
            <figcaption className="flex flex-col gap-1">
              <p className="text-base font-semibold">Elena Rodriguez</p>
              <p className="text-sm text-text-secondary">
                Creative Director, Artistry Studios
              </p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSecondary;