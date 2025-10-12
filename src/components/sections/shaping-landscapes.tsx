import NextImage from "next/image";

export default function ShapingLandscapes() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-[60px]">
          <div className="flex lg:w-1/2 flex-col justify-between mb-12 lg:mb-0">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                About us
              </p>
              <p className="text-lg text-text-primary max-w-lg">
                Lynford combines expertise in consultancy and law to deliver
                unparalleled service and solutions.
              </p>
            </div>
            <h2 className="text-[4rem] leading-[1.1] text-text-primary mt-12 lg:mt-8">
              Shaping Legal
              <br />
              Landscapes
            </h2>
          </div>

          <div className="relative aspect-[3/4] lg:w-1/2">
            <NextImage
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6391a347-8b69-465a-b4c4-00b44bb608af-lynford-framer-website/assets/images/XpBU0aa8iF6J3llpZtjaN0hJo-3.jpg"
              alt="Two professionals, a man and a woman, looking at a tablet in an office setting."
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-6 bg-text-primary/80 p-6 text-white backdrop-blur-[10px]">
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-base font-medium">Revenue Recovered</p>
                <h3 className="text-[40px] leading-none">$2B+</h3>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-base font-medium">Client Retention</p>
                <h3 className="text-[40px] leading-none">98%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}