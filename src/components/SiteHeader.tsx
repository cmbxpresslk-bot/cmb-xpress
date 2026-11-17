import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, MessageCircle, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';

interface DropdownItem {
  label: string;
  to: string;
  description: string;
}

const serviceDropdownItems: DropdownItem[] = [
  {
    label: 'All Services Overview',
    to: '/services',
    description: 'Complete export, import, courier, clearance, and packaging capabilities.',
  },
  {
    label: 'International Courier',
    to: '/international-courier',
    description: 'Door-to-door documents, gifts, and personal parcels to 150+ countries.',
  },
  {
    label: 'Sea Freight / FCL',
    to: '/sea-freight',
    description: 'Dedicated Full Container Load ocean freight coordination.',
  },
  {
    label: 'Track Shipment Assistance',
    to: '/track',
    description: 'Immediate tracking support and order status updates via our team.',
  },
];

const importDropdownItems: DropdownItem[] = [
  {
    label: 'Import Overview',
    to: '/import',
    description: 'Air cargo into Sri Lanka from international supplier hubs.',
  },
  {
    label: 'China to Sri Lanka Air Cargo',
    to: '/import#china',
    description: 'Supplier collection, consolidation, clearance, and duty-paid options.',
  },
  {
    label: 'Thailand to Sri Lanka Imports',
    to: '/import#thailand',
    description: 'Scheduled air cargo handling, documentation, and Sri Lanka delivery.',
  },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'services' | 'import' | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname, location.hash]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
      isActive
        ? 'text-[#B5121B]'
        : 'text-[#111111] hover:text-[#B5121B]'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : 'bg-white border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8 h-18 sm:h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5121B] rounded"
            aria-label={`${companyConfig.companyName} Home`}
          >
            <BrandLogo variant="header" className="hidden sm:inline-flex" />
            <BrandLogo variant="mobile" className="inline-flex sm:hidden" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center justify-center gap-6 xl:gap-7"
          >
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('services')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center gap-1">
                <NavLink to="/services" className={navLinkClass}>
                  Services
                </NavLink>
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')}
                  aria-expanded={openMenu === 'services'}
                  aria-label="Toggle Services submenu"
                  className="p-0.5 text-neutral-500 hover:text-[#B5121B] focus-visible:outline-2 focus-visible:outline-[#B5121B] rounded"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
              {openMenu === 'services' && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white border border-neutral-200 rounded-lg shadow-lg p-2">
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-md px-3 py-2.5 hover:bg-[#F8F8F8] transition-colors"
                      >
                        <div className="text-sm font-semibold text-[#111111]">{item.label}</div>
                        <div className="text-xs text-neutral-600 mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/export" className={navLinkClass}>
              Export
            </NavLink>

            {/* Import Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('import')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="flex items-center gap-1">
                <NavLink to="/import" className={navLinkClass}>
                  Import
                </NavLink>
                <button
                  type="button"
                  onClick={() => setOpenMenu(openMenu === 'import' ? null : 'import')}
                  aria-expanded={openMenu === 'import'}
                  aria-label="Toggle Import submenu"
                  className="p-0.5 text-neutral-500 hover:text-[#B5121B] focus-visible:outline-2 focus-visible:outline-[#B5121B] rounded"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
              {openMenu === 'import' && (
                <div className="absolute left-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white border border-neutral-200 rounded-lg shadow-lg p-2">
                    {importDropdownItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-md px-3 py-2.5 hover:bg-[#F8F8F8] transition-colors"
                      >
                        <div className="text-sm font-semibold text-[#111111]">{item.label}</div>
                        <div className="text-xs text-neutral-600 mt-0.5">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/business-logistics" className={navLinkClass}>
              Business Logistics
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={buildWhatsAppLink(
                `Hello ${companyConfig.companyName}, I would like assistance with a shipment.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-[#111111] border border-neutral-300 rounded-md hover:border-[#111111] hover:bg-[#F8F8F8] transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#B5121B]" />
              <span>WhatsApp</span>
            </a>
            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-neutral-200 text-[#111111] hover:bg-[#F8F8F8] focus-visible:outline-2 focus-visible:outline-[#B5121B]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="px-4 py-5 space-y-1">
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'International Courier', to: '/international-courier' },
              { label: 'Export From Sri Lanka', to: '/export' },
              { label: 'Import Into Sri Lanka', to: '/import' },
              { label: 'China Air Cargo Import', to: '/import#china' },
              { label: 'Thailand Air Cargo Import', to: '/import#thailand' },
              { label: 'Sea Freight / FCL', to: '/sea-freight' },
              { label: 'Business Logistics', to: '/business-logistics' },
              { label: 'Track Assistance', to: '/track' },
              { label: 'FAQ', to: '/faq' },
              { label: 'Contact', to: '/contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-3 py-3 text-base font-medium text-[#111111] rounded-md hover:bg-[#F8F8F8] hover:text-[#B5121B] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-neutral-200 grid grid-cols-1 gap-2.5">
              <Link
                to="/quote"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={buildWhatsAppLink(
                  `Hello ${companyConfig.companyName}, I would like to enquire about shipping.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:bg-[#F8F8F8] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#B5121B]" />
                <span>Chat on WhatsApp ({companyConfig.phone})</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
