import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Anchor,
  ArrowRight,
  Box,
  CheckCircle2,
  Globe2,
  MessageCircle,
  Package,
  PlaneLanding,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import parcelLabelImg from '../assets/images/about-1.png';
import courierHandoverImg from '../assets/images/about-2.png';
import airCargoExportImg from '../assets/images/air_cargo_export_1794931379985.jpg';
import courierDispatchHubImg from '../assets/images/courier_dispatch_hub_1794931381191.jpg';
import importWarehouseImg from '../assets/images/import_warehouse_freight_1794931381438.jpg';
import oceanFclPortImg from '../assets/images/ocean_fcl_port_1794931381536.jpg';
import { BrandLogo } from '../components/BrandLogo';
import { CountryFlag, getCountryCodeFromName } from '../components/CountryFlag';
import { GlobalRouteMap } from '../components/GlobalRouteMap';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { PageMeta } from '../components/PageMeta';
import { SeasonalSnowfall } from '../components/SeasonalSnowfall';
import { ServiceTierComparison } from '../components/ServiceTierComparison';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';
import { coreServices, faqs } from '../data/siteContent';

export function HomePage() {
  const [seasonalActive, setSeasonalActive] = useState<boolean>(
    companyConfig.seasonalCampaign.enabled
  );
  const [mapFilter, setMapFilter] = useState<'both' | 'export' | 'import'>('both');

  return (
    <>
      <PageMeta
        title="CMB XPRESS.LK | International Courier, Import & Export Sri Lanka"
        description="CMB XPRESS.LK connects Sri Lanka with international destinations through courier, air cargo, import, export and business logistics services. Contact our team for a shipping quotation."
        path="/"
      />

      {/* Executive Hero + Real Geography Interactive World Map */}
      <section className="relative bg-[#111111] text-white overflow-hidden border-b border-neutral-800">
        <SeasonalSnowfall active={seasonalActive} />

        {/* Subtle atmospheric lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -right-24 w-96 h-96 rounded-full bg-[#B5121B]/18 blur-3xl"
        />
        {seasonalActive && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
          />
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            {/* Hero Editorial Copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  {seasonalActive
                    ? companyConfig.seasonalCampaign.label
                    : `${companyConfig.companyName} · ${companyConfig.parentCompany}`}
                </p>

                {companyConfig.seasonalCampaign.enabled && (
                  <button
                    type="button"
                    onClick={() => setSeasonalActive((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white border border-neutral-700 rounded-md px-2.5 py-1 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{seasonalActive ? 'Christmas Theme: On' : 'Christmas Theme: Off'}</span>
                  </button>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-white">
                {seasonalActive
                  ? companyConfig.seasonalCampaign.headline
                  : 'Sri Lanka’s International Courier & Trade Partner.'}
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                {seasonalActive
                  ? `${companyConfig.seasonalCampaign.supportingLine} Export parcels and commercial cargo from Sri Lanka to ${companyConfig.internationalCoverageCount}+ countries, or import from India (Chennai warehouse), China, UAE, Thailand, and Malaysia.`
                  : `Connecting Sri Lanka to ${companyConfig.internationalCoverageCount}+ global destinations through express international courier, air export, imports from India, China, UAE, Thailand & Malaysia, and FCL sea freight.`}
              </p>

              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={buildWhatsAppLink(
                    `Hello ${companyConfig.companyName}, I would like to request a shipping quotation.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#111111] bg-white rounded-md hover:bg-neutral-100 transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-[#B5121B]" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  to="/track"
                  className="inline-flex items-center gap-1.5 px-3 py-3.5 text-sm font-medium text-neutral-200 hover:text-white underline-offset-4 hover:underline whitespace-nowrap shrink-0"
                >
                  <span>Track Assistance</span>
                </Link>
              </div>

              {/* Clean Typographic Metadata */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-400">
                <span className="text-neutral-200 font-medium">
                  Powered by {companyConfig.parentCompany}
                </span>
                <span aria-hidden="true">·</span>
                <span>{companyConfig.internationalCoverageCount}+ Destinations</span>
                <span aria-hidden="true">·</span>
                <span>Wattala, Sri Lanka Hub</span>
              </div>
            </motion.div>

            {/* Interactive Real World Route Map with Animated Country Flags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-neutral-400 hidden sm:inline">
                  Hover or select any country flag to inspect active air routes
                </span>
                <div className="flex items-center gap-1.5 ml-auto">
                  {(
                    [
                      { id: 'both', label: 'All Corridors' },
                      { id: 'export', label: 'Export Only' },
                      { id: 'import', label: 'Import Only' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setMapFilter(tab.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        mapFilter === tab.id
                          ? 'bg-[#B5121B] text-white'
                          : 'bg-neutral-900 text-neutral-300 border border-neutral-800 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              <GlobalRouteMap activeDirection={mapFilter} />
            </motion.div>
          </div>

          {/* 4-Column Operations KPI Strip Below Hero Split */}
          <div className="mt-12 pt-8 border-t border-neutral-800/90 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                {companyConfig.internationalCoverageCount}+
              </div>
              <div className="mt-1 text-xs text-neutral-400">
                Global export countries connected from Sri Lanka
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                3–5 Days*
              </div>
              <div className="mt-1 text-xs text-neutral-400">
                Express air courier transit across key destinations
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-white">
                <CountryFlag code="IN" className="w-5 h-3.5" title="India" />
                <CountryFlag code="CN" className="w-5 h-3.5" title="China" />
                <CountryFlag code="AE" className="w-5 h-3.5" title="UAE" />
                <CountryFlag code="TH" className="w-5 h-3.5" title="Thailand" />
                <CountryFlag code="MY" className="w-5 h-3.5" title="Malaysia" />
              </div>
              <div className="mt-1.5 text-xs text-neutral-400">
                Own Chennai India hub (Air &amp; Sea) plus Air Cargo from China, UAE, Thailand &amp; Malaysia
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                Sea / FCL
              </div>
              <div className="mt-1 text-xs text-neutral-400">
                Dedicated Full Container Load commercial ocean division
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Core Commercial Directions: Export & Import With Editorial Photography */}
      <section className="py-16 sm:py-20 bg-[#F8F8F8] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              Two-Way International Logistics
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Built for Exports Out of Sri Lanka &amp; Imports Into Sri Lanka
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Export Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden">
                  <img
                    src={airCargoExportImg}
                    alt="Wide-body air cargo freighter loading international export containers on airport tarmac"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/25 to-transparent"
                  />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                      01. Export · Sri Lanka to the World
                    </span>
                    <PlaneTakeoff className="w-5 h-5 text-white shrink-0" />
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-bold text-[#111111]">
                    International Courier &amp; Air Export
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Send urgent documents, family gifts, personal parcels, e-commerce orders, and commercial air cargo from Sri Lanka to {companyConfig.internationalCoverageCount}+ countries worldwide with customs and packaging support.
                  </p>

                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                      Key Export Destinations
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
                      {companyConfig.exportDestinations.map((dest) => {
                        const code = getCountryCodeFromName(dest);
                        return (
                          <div
                            key={dest}
                            className="flex items-center gap-2 text-xs font-semibold text-[#111111]"
                          >
                            {code && (
                              <CountryFlag
                                code={code}
                                className="w-4 h-2.5 rounded-[1.5px]"
                                title={dest}
                              />
                            )}
                            <span className="truncate">{dest}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 sm:pb-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/export"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Export Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/quote?direction=export"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:bg-[#F8F8F8] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Export Quote</span>
                </Link>
              </div>
            </motion.div>

            {/* Import Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden">
                  <img
                    src={importWarehouseImg}
                    alt="International air-freight consolidation warehouse handling wrapped commercial cargo pallets"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/25 to-transparent"
                  />
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between gap-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                      02. Import · Overseas Suppliers to Sri Lanka
                    </span>
                    <PlaneLanding className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-bold text-[#111111]">
                    India, China, UAE, Thailand &amp; Malaysia Imports
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    Structured import corridors into Sri Lanka: our own warehouse in Chennai handling both Air Cargo and Sea Freight from India, plus scheduled Air Cargo from China, UAE, Thailand, and Malaysia.
                  </p>

                  <div className="mt-6 pt-5 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Link
                        to="/import#india"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#B5121B] hover:underline"
                      >
                        <CountryFlag code="IN" className="w-5 h-3.5" title="India" />
                        <span>India · Chennai Hub (Air &amp; Sea) →</span>
                      </Link>
                      <p className="text-xs text-neutral-600 mt-1">
                        Own Chennai warehouse supporting both Air Cargo and Sea Freight.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="/import#china"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#B5121B] hover:underline"
                      >
                        <CountryFlag code="CN" className="w-5 h-3.5" title="China" />
                        <span>China Air Cargo →</span>
                      </Link>
                      <p className="text-xs text-neutral-600 mt-1">
                        Supplier pickup, consolidation, customs &amp; duty-paid options.
                      </p>
                    </div>
                    <div>
                      <Link
                        to="/import#uae"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-[#B5121B] hover:underline"
                      >
                        <CountryFlag code="AE" className="w-5 h-3.5" title="UAE" />
                        <span>UAE Air Cargo →</span>
                      </Link>
                      <p className="text-xs text-neutral-600 mt-1">
                        Direct Dubai / UAE commercial &amp; parcel air imports.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <Link
                          to="/import#thailand"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#111111] hover:text-[#B5121B] hover:underline"
                        >
                          <CountryFlag code="TH" className="w-4 h-2.5" title="Thailand" />
                          <span>Thailand</span>
                        </Link>
                        <Link
                          to="/import#malaysia"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#111111] hover:text-[#B5121B] hover:underline"
                        >
                          <CountryFlag code="MY" className="w-4 h-2.5" title="Malaysia" />
                          <span>Malaysia</span>
                        </Link>
                      </div>
                      <p className="text-xs text-neutral-600">
                        Scheduled Air Cargo imports into Sri Lanka with clearance support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-7 sm:px-8 pb-7 sm:pb-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/import"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-md hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Import Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/sea-freight"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:bg-[#F8F8F8] transition-colors whitespace-nowrap shrink-0"
                >
                  <Anchor className="w-4 h-4 text-[#B5121B]" />
                  <span>Separate Sea Freight / FCL</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Indicative Service Tiers */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                Air Courier Service Levels
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                Express, Standard &amp; Economy Shipping Tiers
              </h2>
            </div>
            <Link
              to="/international-courier"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B5121B] hover:text-[#111111] whitespace-nowrap"
            >
              <span>View Courier Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ServiceTierComparison direction="export" />
        </div>
      </section>

      {/* Authentic Operations & Facility Gallery */}
      <section className="py-16 sm:py-20 bg-[#F8F8F8] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <BrandLogo variant="about" className="self-start p-2 border border-neutral-200" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                Delivering Excellence, Connecting Sri Lanka to the World
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                Officially registered in Sri Lanka and powered by{' '}
                <strong className="text-[#111111]">{companyConfig.parentCompany}</strong> since{' '}
                {companyConfig.establishedYear}, {companyConfig.companyName} operates from our Wattala logistics hub to serve individuals, online retailers, and SMEs across Sri Lanka.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Customs & Compliance',
                    desc: 'In-house guidance on documentation, duties, and export/import compliance.',
                  },
                  {
                    icon: Box,
                    title: 'Protective Packaging',
                    desc: 'Secure carton prep and vacuum-sealed packing for sensitive items.',
                  },
                  {
                    icon: Globe2,
                    title: `${companyConfig.internationalCoverageCount}+ Global Markets`,
                    desc: 'Connected courier and air cargo networks across key trade lanes.',
                  },
                  {
                    icon: Package,
                    title: 'Direct Human Support',
                    desc: 'Accessible Wattala coordination team via phone and WhatsApp.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-neutral-200 rounded-lg p-4"
                  >
                    <item.icon className="w-5 h-5 text-[#B5121B]" />
                    <h3 className="mt-2.5 text-sm font-bold text-[#111111]">{item.title}</h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B5121B] hover:text-[#111111]"
                >
                  <span>Read About {companyConfig.companyName}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Editorial Visual Bento Showcase */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
              <div className="sm:col-span-2 rounded-xl overflow-hidden border border-neutral-200 bg-white relative aspect-[16/9]">
                <img
                  src={courierDispatchHubImg}
                  alt="Modern express courier sorting and staging hub with sealed export cartons"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-transparent to-transparent"
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Wattala Dispatch Operations
                  </span>
                  <span className="text-neutral-200">Protective Packaging &amp; Staging</span>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white aspect-[4/3]">
                <img
                  src={parcelLabelImg}
                  alt="CMB XPRESS.LK team member applying priority air cargo shipping label onto branded carton"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white aspect-[4/3]">
                <img
                  src={courierHandoverImg}
                  alt="CMB XPRESS.LK courier specialist handing over export parcels"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Capabilities Grid + Dedicated Sea Freight / FCL Feature */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              Service Portfolio
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              End-to-End Courier, Air Cargo &amp; Ocean Freight
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex"
              >
                <Link
                  to={service.to}
                  className="group w-full bg-white border border-neutral-200 rounded-xl p-6 hover:border-[#B5121B] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span className="font-semibold text-[#B5121B]">
                        0{index + 1}. {service.direction}
                      </span>
                      <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#B5121B] transition-colors" />
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-[#111111] group-hover:text-[#B5121B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <ul className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B5121B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Dedicated Ocean Freight Visual Feature Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] text-white rounded-xl overflow-hidden border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="lg:col-span-6 relative aspect-[16/9] lg:aspect-auto min-h-[260px]">
              <img
                src={oceanFclPortImg}
                alt="International container port terminal handling Full Container Load FCL ocean shipments"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]/80 hidden lg:block"
              />
            </div>

            <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                <Anchor className="w-4 h-4" />
                <span>Separate Ocean Freight Division</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Full Container Load (FCL) Sea Freight Coordination
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Alongside our Air &amp; Sea hub in Chennai, India and Air Cargo corridors from China, UAE, Thailand, and Malaysia, our dedicated Sea Freight / FCL division coordinates container quotations, documentation, port clearance, and inland delivery across Sri Lanka.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <Link
                  to="/sea-freight"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explore Sea Freight / FCL</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/quote?direction=import&service=Sea%20Freight%20%2F%20FCL"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white border border-neutral-700 rounded-md hover:bg-neutral-800 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Request FCL Quote</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authentic Google Maps Reviews & FAQ Preview */}
      <section className="py-16 sm:py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Original Google Maps Reviews Only */}
          <GoogleReviewsSection />

          {/* FAQ Highlights */}
          <div className="bg-white border border-neutral-200 rounded-xl p-7 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                  Common Questions
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#111111]">
                  Shipping, Customs &amp; Import Answers
                </h2>
              </div>
              <Link
                to="/faq"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B5121B] hover:text-[#111111] whitespace-nowrap"
              >
                <span>View All FAQs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="divide-y divide-neutral-200">
              {faqs.slice(0, 4).map((item) => (
                <div key={item.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-base font-bold text-[#111111]">{item.question}</h3>
                  <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
