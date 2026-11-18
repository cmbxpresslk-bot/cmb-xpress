import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';

const navigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/#destinations' },
  { label: 'Export', to: '/export' },
  { label: 'Import', to: '/import' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    'rounded-sm py-2 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5121B] ' +
    (isActive ? 'text-[#B5121B]' : 'text-[#37332F] hover:text-[#B5121B]');

  const whatsapp = buildWhatsAppLink(
    'Hello CMB XPRESS.LK, I need help with an international courier shipment from Sri Lanka.'
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#ECE8E4] bg-white/95 backdrop-blur-xl">
      {companyConfig.seasonalCampaign.enabled && (
        <div className="bg-[#B5121B] px-3 py-2 text-center text-[11px] font-medium text-white sm:text-xs">
          <span aria-hidden="true">✦ </span>
          Christmas sending season is here.
          <Link to="/quote?direction=export" className="ml-2 font-semibold underline underline-offset-2">
            Get your courier quote
          </Link>
        </div>
      )}

      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[74px] sm:px-6 lg:px-8">
        <Link to="/" aria-label="CMB XPRESS.LK home" className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5121B]">
          <BrandLogo variant="header" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-md px-3 text-[13px] font-medium text-[#34302D] transition hover:bg-[#F7F5F2] hover:text-[#B5121B]">
            <MessageCircle className="h-4 w-4 text-[#B5121B]" /> WhatsApp
          </a>
          <Link to="/quote?direction=export" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#B5121B] px-4 text-[13px] font-semibold text-white transition hover:bg-[#950F16]">
            Get a Quote <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <Link to="/quote?direction=export" className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#B5121B] px-3 text-xs font-semibold text-white">
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            className="grid h-10 w-10 place-items-center rounded-md border border-[#E8E3DE] text-[#222222] transition hover:bg-[#F8F6F3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5121B]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="absolute left-0 right-0 top-full max-h-[calc(100dvh-100px)] overflow-y-auto border-t border-[#ECE8E4] bg-white px-4 pb-5 pt-3 shadow-xl xl:hidden sm:px-6">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  'flex min-h-12 items-center justify-between border-b border-[#F0ECE8] text-sm font-medium ' +
                  (isActive ? 'text-[#B5121B]' : 'text-[#24211E]')
                }
              >
                {item.label}
                <span aria-hidden="true" className="text-[#B5121B]">›</span>
              </NavLink>
            ))}
          </nav>
          <div className="mx-auto mt-4 grid max-w-7xl grid-cols-1 gap-2 min-[420px]:grid-cols-2">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#E5DED7] px-4 text-sm font-semibold text-[#25211E]">
              <MessageCircle className="h-4 w-4 text-[#B5121B]" /> Chat on WhatsApp
            </a>
            <Link to="/quote?direction=export" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#B5121B] px-4 text-sm font-semibold text-white">
              Get a courier quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
