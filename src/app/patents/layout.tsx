import { Metadata } from "next";

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
  return children;
}
