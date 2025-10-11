import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Patent Attorney Florida | Utility, Design & Provisional Patents | Polley IP Law",
  description: "Expert patent attorney in Florida for utility patents, design patents, and provisional patent applications. Same-day emergency filing available. Software, biotech, and mechanical patent specialists. Free consultation.",
  keywords: "patent attorney Florida, patent lawyer Florida, provisional patent lawyer Florida, utility patent attorney Florida, design patent lawyer Florida, patent search attorney Florida, PCT patent filing Florida, patent prosecution lawyer Florida, software patent attorney Florida, biotech patent lawyer Florida, mechanical patent attorney Florida, patent infringement attorney Florida, same day patent attorney Florida, emergency patent filing Florida",
  alternates: {
    canonical: '/patents',
  },
  openGraph: {
    title: "Patent Attorney Florida | Expert Patent Services | Polley IP Law",
    description: "Protect your inventions with Florida's trusted patent attorneys. Utility, design, and provisional patents. Same-day emergency filing.",
    url: 'https://www.polleylegal.com/patents',
    type: 'article',
  },
};

export default function PatentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const patentServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Patent Law Services",
    "provider": {
      "@type": "LegalService",
      "name": "Polley IP Law, P.A.",
      "url": "https://www.polleylegal.com"
    },
    "name": "Patent Attorney Services in Florida",
    "description": "Comprehensive patent services including utility patents, design patents, provisional patent applications, patent searches, and PCT filing. Emergency same-day filing available.",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.polleylegal.com/patents",
      "servicePhone": "+1-XXX-XXX-XXXX"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Utility Patent Filing",
        "description": "Protect functional inventions and new processes with utility patent applications"
      },
      {
        "@type": "Offer",
        "name": "Design Patent Filing",
        "description": "Secure protection for ornamental designs and product appearances"
      },
      {
        "@type": "Offer",
        "name": "Provisional Patent Application",
        "description": "Establish early filing dates with affordable provisional patent applications"
      },
      {
        "@type": "Offer",
        "name": "Emergency Patent Filing",
        "description": "Same-day emergency patent filing services available"
      }
    ]
  };

  return (
    <>
      <Script
        id="patent-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(patentServiceSchema) }}
      />
      {children}
    </>
  );
}
