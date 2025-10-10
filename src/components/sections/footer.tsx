import Link from 'next/link';
import { X, Instagram, Linkedin } from 'lucide-react';

const browseLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'X', href: 'https://x.com/polleylaw', icon: X },
  { name: 'Instagram', href: 'https://instagram.com/polleylaw', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/polley-ip-law', icon: Linkedin },
];

const SocialIcon = ({ href, Icon }: { href: string; Icon: React.ElementType }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white transition-opacity hover:opacity-70"
  >
    <Icon className="h-5 w-5" />
    <span className="sr-only">{Icon.displayName}</span>
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] font-body text-white">
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-16 md:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm text-[#999999]">Find Us</h3>
            <p className="text-sm leading-normal">
              Polley IP Law, P.A.
              <br />
              Florida, USA
              <br />
              <br />
              Serving clients nationwide
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm text-[#999999]">Browse</h3>
            <nav className="flex flex-col gap-4">
              {browseLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white transition-opacity hover:opacity-70"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.polleylegal.com"
                className="text-sm text-white transition-opacity hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.polleylegal.com
              </a>
              <a
                href="https://calendly.com/polleylaw"
                className="text-sm text-white transition-opacity hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </div>
            <div className="mt-8 flex gap-6">
              {socialLinks.map((social) => (
                <SocialIcon key={social.name} href={social.href} Icon={social.icon} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-[#333333] pt-12 lg:flex-row lg:items-center">
          <p className="max-w-[450px] text-xs text-[#999999]">
            The information provided on this website by Polley IP Law, P.A. is for general
            informational purposes only and does not constitute legal advice. All content is subject
            to change without notice.
          </p>
          <div className="flex shrink-0 flex-col gap-6 text-xs text-[#999999] sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Polley IP Law, P.A. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}