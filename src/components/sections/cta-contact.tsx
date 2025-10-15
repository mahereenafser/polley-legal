import React from 'react';
import Link from 'next/link';

const CtaContact = () => {
  return (
    <section className="bg-[#2C4A47] py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
          <h2 className="font-display text-5xl font-normal leading-none text-white sm:text-[4rem]">
            Ready to
            <br />
            Protect Your IP?
          </h2>
          <p className="font-body mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Schedule your free 30-minute consultation today. Let's discuss how we can help you secure your innovations and protect what matters most.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row w-full gap-4 justify-center items-center">
            <Link
              href="https://calendly.com/polleylaw"
              className="inline-block w-full sm:w-auto rounded-lg bg-[#F4CCBA] py-4 px-10 text-center font-semibold text-text-primary transition-transform duration-300 ease-in-out hover:scale-102 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#F4CCBA] focus:ring-offset-2 focus:ring-offset-[#2C4A47]"
            >
              Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto rounded-lg bg-white py-4 px-10 text-center font-semibold text-[#2C4A47] transition-transform duration-300 ease-in-out hover:scale-102 hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2C4A47]"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;