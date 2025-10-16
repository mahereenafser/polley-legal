import Link from 'next/link';
import { ArrowRight, X, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  {
    title: 'Company',
    items: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    items: [
      { name: 'Patents', href: '/patents' },
      { name: 'Trademarks', href: '/trademarks' },
      { name: 'Copyrights', href: '/copyrights' },
      { name: 'Contact', href: '/contact' },
    ],
  },
];

const socialLinks = [
  { name: 'X', href: 'https://x.com/polleylaw', icon: X },
  { name: 'Instagram', href: 'https://instagram.com/polleylaw', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/polley-ip-law', icon: Linkedin },
];

const SocialIcon = ({ href, Icon, name }: { href: string; Icon: React.ElementType; name: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-white/15"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{name}</span>
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#071412] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Polley IP Law, P.A.</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">Guardians of your ideas.</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Strategic intellectual property counsel for innovators, creators, and businesses that need thoughtful protection across patents, trademarks, and copyrights.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <SocialIcon key={social.name} href={social.href} Icon={social.icon} name={social.name} />
              ))}
            </div>
          </div>

          {navLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">{section.title}</p>
              <nav className="flex flex-col gap-3 text-sm text-white/80">
                {section.items.map((link) => (
                  <Link key={link.name} href={link.href} className="transition-colors duration-300 hover:text-white">
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">Connect</p>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white/60" />
                <p>Florida-based. Serving clients nationwide and internationally.</p>
              </div>
              <a href="/contact#contact-form" className="flex items-center gap-3 transition-colors duration-300 hover:text-white">
                <Phone className="h-4 w-4 text-white/60" />
                <span>Call our Tampa office</span>
              </a>
              <a href="mailto:hello@polleylaw.com" className="flex items-center gap-3 transition-colors duration-300 hover:text-white">
                <Mail className="h-4 w-4 text-white/60" />
                <span>hello@polleylaw.com</span>
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <p className="mb-3 font-semibold text-white">Stay informed</p>
              <p className="mb-4">Quarterly updates on IP trends and tactics normally reserved for clients.</p>
              <a
                href="https://calendly.com/polleylaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-[#F4D9C3]"
              >
                Join the list
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[540px] leading-relaxed">
            © Polley IP Law, P.A. The information on this site is provided for general informational purposes and does not constitute legal advice.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

