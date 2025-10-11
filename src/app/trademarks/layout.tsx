import { Metadata } from "next";

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
  return children;
}
