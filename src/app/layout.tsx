import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Inter, Newsreader } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['georgia', 'serif'],
})

export const metadata: Metadata = {
  title: "Best IP Attorney Florida | Intellectual Property Lawyer | Polley IP Law",
  description: "Florida's top intellectual property attorney. Expert IP lawyer for patents, trademarks, and copyrights. Trusted by a wide community of clients. Same-day emergency filing available with a complimentary consultation.",
  keywords: "IP attorney Florida, intellectual property attorney Florida, best IP attorney Florida, IP lawyer Florida, intellectual property lawyer Florida, patent trademark copyright attorney Florida",
  metadataBase: new URL('https://www.polleylegal.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best IP Attorney Florida | Intellectual Property Lawyer | Polley IP Law",
    description: "Florida's top intellectual property attorney for patents, trademarks, and copyrights. Trusted by a wide community of clients.",
    url: 'https://www.polleylegal.com',
    siteName: 'Polley IP Law',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Polley IP Law, P.A.",
    "image": "https://www.polleylegal.com/logo.png",
    "description": "Florida's leading intellectual property attorney and IP lawyer specializing in patents, trademarks, and copyrights with emergency filing services",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tampa",
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "url": "https://www.polleylegal.com",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "serviceType": [
      "Patent Law",
      "Trademark Law",
      "Copyright Law",
      "Intellectual Property Law"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Intellectual Property Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Patent Services",
            "description": "Navigate the complex world of patents with ease. Our expert guidance supports your ideas from concept to protection, ensuring your innovations are safely secured.",
            "serviceType": "Patent Law"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Trademark Services",
            "description": "Protect your brand with our dedicated team, leading you through the complexities of trademark law. Let us be your trusted partner in safeguarding what matters most to your business.",
            "serviceType": "Trademark Law"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Copyright Services",
            "description": "Discover peace of mind knowing your works are safeguarded by experts who truly care. Our team makes copyright law clear and accessible so you can focus on what you do best: creating.",
            "serviceType": "Copyright Law"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Polley",
      "jobTitle": "Patent Attorney"
    },
    "knowsAbout": [
      "Patent Law",
      "Trademark Registration",
      "Copyright Protection",
      "Intellectual Property Strategy",
      "IP Portfolio Management"
    ],
    "slogan": "Florida's Best IP Attorney - Protecting Your Innovations, Brands, and Creative Works"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Polley IP Law, P.A.",
    "url": "https://www.polleylegal.com",
    "logo": "https://www.polleylegal.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/polleylaw",
      "https://twitter.com/polleylaw",
      "https://www.linkedin.com/company/polley-ip-law-pa"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "current", "greeting": "hi"}'
        />
        {children}
      </body>
    </html>
  );
}
