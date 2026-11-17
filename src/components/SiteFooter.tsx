import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const activeSocials = companyConfig.socialLinks.filter((s) => Boolean(s.url));

  return (
    <footer className="bg-[#111111] text-white border-t border-neutral-800">
      {/* Top Conversion Section */}
      <div className="border-b border-neutral-800 bg-neutral-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                {companyConfig.companyName} · {companyConfig.parentCompany}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Ready to Move Your Shipment?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-300">
                Request an export or import quotation from our Sri Lanka logistics team or speak directly with a specialist on WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={buildWhatsAppLink(
                  `Hello ${companyConfig.companyName}, I would like to arrange a shipment.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#111111] bg-white rounded-md hover:bg-neutral-100 transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#B5121B]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Five Functional Content Groups */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Group 1: Brand Identity & Company Description */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block" aria-label={companyConfig.companyName}>
              <BrandLogo variant="footer" onDarkBackground />
            </Link>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              {companyConfig.companyName}, powered by{' '}
              <span className="text-white font-medium">{companyConfig.parentCompany}</span>, connects Sri Lanka with{' '}
              {companyConfig.internationalCoverageCount}+ international destinations through courier, air export, air import, and commercial logistics solutions.
            </p>

            {activeSocials.length > 0 && (
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Verified Channels
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {activeSocials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-md hover:border-[#D4AF37] hover:text-white transition-colors"
                    >
                      <span>{social.label}</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Group 2: Export Services */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Export Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li>
                <Link to="/export" className="hover:text-white transition-colors">
                  Export From Sri Lanka
                </Link>
              </li>
              <li>
                <Link to="/international-courier" className="hover:text-white transition-colors">
                  International Courier
                </Link>
              </li>
              <li>
                <Link to="/business-logistics" className="hover:text-white transition-colors">
                  Business &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link to="/quote?direction=export" className="hover:text-white transition-colors">
                  Export Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 3: Import Solutions */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Import Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li>
                <Link to="/import#india" className="hover:text-white transition-colors">
                  India Imports (Chennai Hub · Air &amp; Sea)
                </Link>
              </li>
              <li>
                <Link to="/import#china" className="hover:text-white transition-colors">
                  China Air Cargo Imports
                </Link>
              </li>
              <li>
                <Link to="/import#uae" className="hover:text-white transition-colors">
                  UAE, Thailand &amp; Malaysia Air Cargo
                </Link>
              </li>
              <li>
                <Link to="/sea-freight" className="hover:text-white transition-colors">
                  Sea Freight / FCL
                </Link>
              </li>
              <li>
                <Link to="/quote?direction=import" className="hover:text-white transition-colors">
                  Import Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 4: Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Contact Sri Lanka Desk
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-neutral-300">
              <li>
                <a
                  href={companyConfig.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#B5121B] shrink-0" />
                  <span>{companyConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyConfig.emailHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B5121B] shrink-0" />
                  <span>{companyConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#B5121B] shrink-0 mt-0.5" />
                  <span>{companyConfig.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Group 5: Secondary Navigation, Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <nav aria-label="Footer secondary navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/track" className="hover:text-white transition-colors">
              Track Shipment Assistance
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </nav>

          <p className="text-xs text-neutral-400">
            © {currentYear} {companyConfig.companyName} · {companyConfig.parentCompany}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
