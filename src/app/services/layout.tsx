import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IP Services: Patents, Trademarks & Copyrights | Polley IP Law",
  description: "Comprehensive intellectual property services including patent protection, trademark registration, and copyright law. Expert legal guidance from concept to protection.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "IP Services | Polley IP Law",
    description: "Expert patent, trademark, and copyright services",
    url: 'https://www.polleylegal.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
