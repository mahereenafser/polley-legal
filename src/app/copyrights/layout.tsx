import { Metadata } from "next";

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
  return children;
}
