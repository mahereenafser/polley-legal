import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Copyright Attorney Florida | Music, Software & Book Copyright Registration | Polley IP Law",
  description: "Expert copyright attorney in Florida for music, software, book, and creative works protection. Copyright registration, infringement defense, fair use guidance, and work for hire agreements. Free consultation.",
  keywords: "copyright attorney Florida, copyright lawyer Florida, copyright registration lawyer Florida, music copyright attorney Florida, software copyright lawyer Florida, book copyright attorney Florida, copyright infringement defense Florida, fair use attorney Florida, derivative works lawyer Florida, work for hire attorney Florida, urgent copyright protection Florida, DMCA takedown Florida",
  alternates: {
    canonical: '/copyrights',
  },
  openGraph: {
    title: "Copyright Attorney Florida | Creative Works Protection | Polley IP Law",
    description: "Protect your creative works with expert copyright registration and enforcement services in Florida.",
    url: 'https://www.polleylegal.com/copyrights',
    type: 'article',
  },
};

export default function CopyrightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const copyrightServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Copyright Law Services",
    "provider": {
      "@type": "LegalService",
      "name": "Polley IP Law, P.A.",
      "url": "https://www.polleylegal.com"
    },
    "name": "Copyright Attorney Services in Florida",
    "description": "Comprehensive copyright services for music, software, books, artwork, and creative works. Copyright registration, infringement defense, fair use guidance, DMCA takedowns, and work for hire agreements.",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.polleylegal.com/copyrights",
      "servicePhone": "+1-XXX-XXX-XXXX"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Copyright Registration",
        "description": "File copyright registrations with the U.S. Copyright Office for all types of creative works"
      },
      {
        "@type": "Offer",
        "name": "Music Copyright Protection",
        "description": "Specialized copyright services for songs, compositions, and sound recordings"
      },
      {
        "@type": "Offer",
        "name": "Software Copyright Protection",
        "description": "Protect source code, applications, and software programs with copyright registration"
      },
      {
        "@type": "Offer",
        "name": "Copyright Infringement Defense",
        "description": "Legal representation for copyright disputes and infringement cases"
      },
      {
        "@type": "Offer",
        "name": "DMCA Takedown Services",
        "description": "Submit DMCA takedown notices to remove infringing content from websites and platforms"
      }
    ]
  };

  return (
    <>
      <Script
        id="copyright-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(copyrightServiceSchema) }}
      />
      {children}
    </>
  );
}
