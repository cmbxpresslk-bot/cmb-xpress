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
  const year = new Date().getFullYear();
  const socials = companyConfig.socialLinks.filter((item) => Boolean(item.url));

  return (
    <footer className="bg-[#111111] text-white">
      <div className="border-b border-white/10 bg-[#191716]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">CMB XPRESS.LK · International Courier Partner</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">Ready to send something?</h2>
            <p className="mt-2 text-sm text-white/65">Tell us your destination. We’ll help with the next step.</p>
          </div>
          <div className="flex flex-col gap-2 min-[420px]:flex-row">
            <Link to="/quote?direction=export" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#B5121B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#950F16]">
              Get a courier quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={buildWhatsAppLink('Hello CMB XPRESS.LK, I would like to make an international courier enquiry.')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#F4D98E]">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" aria-label="CMB XPRESS.LK home" className="inline-flex">
              <BrandLogo variant="footer" onDarkBackground />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Your international courier partner from Sri Lanka to the world.
            </p>
            <p className="mt-3 text-xs text-[#D4AF37]">{companyConfig.parentCompany}</p>
            {socials.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-white/15 px-3 text-xs text-white/70 transition hover:border-[#D4AF37] hover:text-white">
                    {social.label} <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">Courier export</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li><Link className="hover:text-white" to="/export">Export from Sri Lanka</Link></li>
              <li><Link className="hover:text-white" to="/international-courier">International courier</Link></li>
              <li><Link className="hover:text-white" to="/services">Documents & parcels</Link></li>
              <li><Link className="hover:text-white" to="/business-logistics">Business shipments</Link></li>
              <li><Link className="hover:text-white" to="/quote?direction=export">Export quotation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">Other services</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li><Link className="hover:text-white" to="/import#china">China air cargo</Link></li>
              <li><Link className="hover:text-white" to="/import#thailand">Thailand imports</Link></li>
              <li><Link className="hover:text-white" to="/sea-freight">Sea freight / FCL</Link></li>
              <li><Link className="hover:text-white" to="/track">Tracking assistance</Link></li>
              <li><Link className="hover:text-white" to="/faq">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37]">Contact our Sri Lanka team</h3>
            <address className="mt-4 space-y-3 not-italic text-sm text-white/65">
              <a href={companyConfig.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-[#D4AF37]" /> {companyConfig.phone}
              </a>
              <a href={companyConfig.emailHref} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-[#D4AF37]" /> {companyConfig.email}
              </a>
              <a href={companyConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" /> {companyConfig.address}
              </a>
              <a href={companyConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 pt-1 font-semibold text-white hover:text-[#F4D98E]">
                <MessageCircle className="h-4 w-4 text-[#D4AF37]" /> Chat with us on WhatsApp
              </a>
            </address>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {companyConfig.companyName}. All rights reserved.</span>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </nav>
          <span>Wattala, Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
}
