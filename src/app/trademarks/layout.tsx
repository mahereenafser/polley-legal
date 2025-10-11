import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Trademark Attorney Florida | Federal & State Trademark Registration | Polley IP Law",
  description: "Expert trademark attorney in Florida for federal trademark filing, state registration, logo protection, and brand name trademarks. Trademark monitoring and infringement defense. Rush filing available. Free consultation.",
  keywords: "trademark attorney Florida, trademark lawyer Florida, trademark registration lawyer Florida, federal trademark filing Florida, state trademark registration Florida, trademark monitoring service Florida, trademark renewal attorney Florida, logo trademark lawyer Florida, brand name protection Florida, trademark clearance search Florida, trademark infringement lawyer Florida, urgent trademark search Florida, emergency trademark filing Florida, startup IP attorney Florida, e-commerce trademark attorney Florida",
  alternates: {
    canonical: '/trademarks',
  },
  openGraph: {
    title: "Trademark Attorney Florida | Brand Protection Services | Polley IP Law",
    description: "Protect your brand with expert trademark registration, monitoring, and enforcement services in Florida.",
    url: 'https://www.polleylegal.com/trademarks',
    type: 'article',
  },
};

export default function TrademarksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const trademarkServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Trademark Law Services",
    "provider": {
      "@type": "LegalService",
      "name": "Polley IP Law, P.A.",
      "url": "https://www.polleylegal.com"
    },
    "name": "Trademark Attorney Services in Florida",
    "description": "Comprehensive trademark services including federal trademark filing, state registration, trademark searches, logo protection, brand name trademarks, and trademark monitoring. Rush filing available.",
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.polleylegal.com/trademarks",
      "servicePhone": "+1-XXX-XXX-XXXX"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Federal Trademark Registration",
        "description": "File federal trademark applications with the USPTO for nationwide brand protection"
      },
      {
        "@type": "Offer",
        "name": "State Trademark Registration",
        "description": "Register trademarks at the state level for localized brand protection"
      },
      {
        "@type": "Offer",
        "name": "Trademark Clearance Search",
        "description": "Comprehensive trademark searches to identify potential conflicts before filing"
      },
      {
        "@type": "Offer",
        "name": "Trademark Monitoring",
        "description": "Ongoing monitoring services to protect your trademark from infringement"
      },
      {
        "@type": "Offer",
        "name": "Logo Protection",
        "description": "Specialized trademark protection for logos and brand designs"
      }
    ]
  };

  return (
    <>
      <Script
        id="trademark-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trademarkServiceSchema) }}
      />
      {children}
    </>
  );
}
