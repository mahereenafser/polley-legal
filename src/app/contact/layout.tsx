import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Polley IP Law | Free 30-Min IP Consultation",
  description: "Get in touch with Polley IP Law for expert intellectual property guidance. Schedule your free 30-minute consultation today. Serving clients nationwide.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Polley IP Law",
    description: "Schedule your free IP consultation today",
    url: 'https://www.polleylegal.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
