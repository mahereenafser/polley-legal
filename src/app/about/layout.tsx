import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Polley IP Law | Florida Intellectual Property Attorneys",
  description: "Meet Polley IP Law - experienced intellectual property attorneys dedicated to protecting innovations, brands, and creative works. Learn about our values and commitment to clients.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Polley IP Law",
    description: "Experienced IP attorneys protecting your innovations",
    url: 'https://www.polleylegal.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
