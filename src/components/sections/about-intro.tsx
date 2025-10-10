import Image from "next/image";

const AboutIntro = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-between gap-12 lg:gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-label text-text-primary">About us</p>
              <p className="text-lg text-text-secondary">
                Polley IP Law specializes in comprehensive intellectual property protection, guiding inventors and creators through patents, trademarks, and copyrights.
              </p>
            </div>
            <h2 className="text-text-primary">
              Protecting
              <br />
              Innovation
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-4 bg-white p-6 md:flex-row md:items-center md:gap-6">
              <div className="flex flex-col">
                <p className="text-base font-medium text-text-primary">
                  Years of Experience
                </p>
                <h3 className="text-text-primary">15+</h3>
              </div>
              <div className="h-px w-full bg-border md:h-12 md:w-px" />
              <div className="flex flex-col">
                <p className="text-base font-medium text-text-primary">
                  IP Filings Protected
                </p>
                <h3 className="text-text-primary">500+</h3>
              </div>
            </div>
            <div className="relative aspect-[568/480] w-full">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/XpBU0aa8iF6J3llpZtjaN0hJo-3.jpg"
                alt="Professionals reviewing documents"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;