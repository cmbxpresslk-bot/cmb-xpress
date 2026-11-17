import { Link } from 'react-router-dom';
import { Anchor, ArrowRight, Building2, CheckCircle2, PlaneLanding, Ship } from 'lucide-react';
import importWarehouseImg from '../assets/images/import_warehouse_freight_1794931381438.jpg';
import oceanFclPortImg from '../assets/images/ocean_fcl_port_1794931381536.jpg';
import { CountryFlag } from '../components/CountryFlag';
import { PageMeta } from '../components/PageMeta';

export function ImportPage() {
  return (
    <>
      <PageMeta
        title="Import Into Sri Lanka | India (Chennai Hub), China, UAE, Thailand & Malaysia"
        description="Import cargo into Sri Lanka from India (our own Chennai warehouse handling Air & Sea freight) plus Air Cargo from China, UAE, Thailand, and Malaysia with CMB XPRESS.LK."
        path="/import"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <PlaneLanding className="w-4 h-4" />
              <span>Import · International Origins to Sri Lanka</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Imports Into Sri Lanka From India, China, UAE, Thailand &amp; Malaysia
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Dedicated Air Cargo corridors from China, UAE, Thailand, and Malaysia—plus our own warehouse facility in Chennai, India supporting both Air Cargo and Sea Freight directly into Sri Lanka.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-4">
              <Link
                to="/quote?direction=import"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Request Import Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="inline-flex items-center gap-2 text-xs text-neutral-300">
                <CountryFlag code="IN" className="w-5 h-3.5" title="India" />
                <CountryFlag code="CN" className="w-5 h-3.5" title="China" />
                <CountryFlag code="AE" className="w-5 h-3.5" title="UAE" />
                <CountryFlag code="TH" className="w-5 h-3.5" title="Thailand" />
                <CountryFlag code="MY" className="w-5 h-3.5" title="Malaysia" />
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                <CountryFlag code="LK" className="w-5 h-3.5" title="Sri Lanka" />
              </div>
            </div>

            {/* Quick Corridor Jump Links */}
            <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-neutral-300">
              <a href="#india" className="hover:text-[#D4AF37] transition-colors">
                01. India (Chennai Hub)
              </a>
              <a href="#china" className="hover:text-[#D4AF37] transition-colors">
                02. China
              </a>
              <a href="#thailand" className="hover:text-[#D4AF37] transition-colors">
                03. Thailand
              </a>
              <a href="#uae" className="hover:text-[#D4AF37] transition-colors">
                04. UAE
              </a>
              <a href="#malaysia" className="hover:text-[#D4AF37] transition-colors">
                05. Malaysia
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-neutral-800 aspect-[4/3]">
            <img
              src={importWarehouseImg}
              alt="International air-freight and warehouse consolidation facility staging commercial import pallets"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 01. India — Own Warehouse in Chennai (Air & Sea Freight) */}
      <section id="india" className="scroll-mt-24 py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <CountryFlag code="IN" className="w-5 h-3.5" title="India" />
              <span>01. Own Chennai Warehouse · Air &amp; Sea Freight</span>
            </div>
            <h2 className="mt-2.5 text-3xl font-bold text-[#111111]">
              India to Sri Lanka Imports (Chennai Warehouse)
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              We operate our own warehouse facility in Chennai, India, allowing Sri Lankan importers, wholesalers, and commercial buyers to consolidate supplier goods cleanly and ship via either fast Air Cargo or scheduled Sea Freight into Sri Lanka.
            </p>
            <div className="mt-6">
              <Link
                to="/quote?direction=import&origin=India"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors"
              >
                <span>Quote India Import (Air or Sea)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F8F8F8] border border-neutral-200 rounded-xl p-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5 border-b border-neutral-200">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#B5121B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#111111]">Own Chennai Warehouse</div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Direct cargo receiving, inspection, storage, and supplier order aggregation in Chennai, Tamil Nadu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Ship className="w-5 h-5 text-[#B5121B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#111111]">Dual Mode: Air &amp; Sea Cargo</div>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Flexible choice between urgent Air Cargo or cost-efficient Sea Freight from India to Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Direct cargo drop-off at our Chennai hub',
                'Air Cargo dispatch for urgent trade orders',
                'Sea Freight forwarding for bulk commercial stock',
                'Export & import documentation verification',
                'Sri Lanka customs clearance coordination',
                'Doorstep delivery across Sri Lanka',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#B5121B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. China Air Cargo Anchor Section */}
      <section id="china" className="scroll-mt-24 py-16 sm:py-20 bg-[#F8F8F8] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              <CountryFlag code="CN" className="w-5 h-3.5" title="China" />
              <span>02. Primary Import Corridor · Air Cargo</span>
            </div>
            <h2 className="mt-2.5 text-3xl font-bold text-[#111111]">
              China to Sri Lanka Air Cargo
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Our flagship air cargo import lane designed for Sri Lankan retailers, online sellers, and commercial buyers sourcing from verified suppliers in China. Note that China-to-Sri Lanka air cargo is a rapid air transportation service, separate from ocean container freight.
            </p>
            <div className="mt-6">
              <Link
                to="/quote?direction=import&origin=China"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#111111] rounded-md hover:bg-neutral-800 transition-colors"
              >
                <span>Quote China Air Import</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-xl p-7">
            <h3 className="text-base font-bold text-[#111111]">
              Included China Air Import Capabilities
            </h3>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'International air cargo transportation',
                'Eligible supplier collection in China',
                'Warehouse cargo receiving & verification',
                'Consolidation where applicable',
                'Sri Lanka customs clearance support',
                'Duty-paid options for eligible shipments',
                'Final delivery across Sri Lanka',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-[#B5121B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03, 04, 05. Thailand, UAE & Malaysia Air Cargo Corridors */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              Scheduled Air Cargo Origins
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111111]">
              Thailand, UAE &amp; Malaysia Air Cargo to Sri Lanka
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {/* Thailand */}
            <div
              id="thailand"
              className="scroll-mt-24 bg-[#F8F8F8] border border-neutral-200 rounded-xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                    03. Air Cargo
                  </span>
                  <CountryFlag code="TH" className="w-6 h-4" title="Thailand" />
                </div>
                <h3 className="mt-3 text-xl font-bold text-[#111111]">
                  Thailand to Sri Lanka Air Cargo
                </h3>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  Dedicated air cargo logistics connecting Thai wholesalers and suppliers directly with businesses and importers in Sri Lanka.
                </p>
                <ul className="mt-5 pt-4 border-t border-neutral-200 space-y-2.5">
                  {[
                    'Scheduled international air routing',
                    'Origin cargo handling & preparation',
                    'Import documentation & customs support',
                    'Coordinated local Sri Lanka delivery',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B5121B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7">
                <Link
                  to="/quote?direction=import&origin=Thailand"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-md hover:bg-[#B5121B] transition-colors"
                >
                  <span>Quote Thailand Air Cargo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* UAE */}
            <div
              id="uae"
              className="scroll-mt-24 bg-[#F8F8F8] border border-neutral-200 rounded-xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                    04. Air Cargo
                  </span>
                  <CountryFlag code="AE" className="w-6 h-4" title="UAE" />
                </div>
                <h3 className="mt-3 text-xl font-bold text-[#111111]">
                  UAE to Sri Lanka Air Cargo
                </h3>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  Direct air cargo import services from Dubai and across the UAE for commercial electronics, retail merchandise, and corporate orders bound for Sri Lanka.
                </p>
                <ul className="mt-5 pt-4 border-t border-neutral-200 space-y-2.5">
                  {[
                    'UAE origin cargo receiving & dispatch',
                    'Frequent Dubai-to-Colombo air connectivity',
                    'Customs documentation & compliance check',
                    'Island-wide clearance & final handover',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B5121B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7">
                <Link
                  to="/quote?direction=import&origin=UAE"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-md hover:bg-[#B5121B] transition-colors"
                >
                  <span>Quote UAE Air Cargo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Malaysia */}
            <div
              id="malaysia"
              className="scroll-mt-24 bg-[#F8F8F8] border border-neutral-200 rounded-xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                    05. Air Cargo
                  </span>
                  <CountryFlag code="MY" className="w-6 h-4" title="Malaysia" />
                </div>
                <h3 className="mt-3 text-xl font-bold text-[#111111]">
                  Malaysia to Sri Lanka Air Cargo
                </h3>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  Dependable air cargo imports from Kuala Lumpur and Malaysian commercial suppliers directly into Sri Lanka with full customs support.
                </p>
                <ul className="mt-5 pt-4 border-t border-neutral-200 space-y-2.5">
                  {[
                    'Scheduled Malaysia-to-Sri Lanka air cargo',
                    'Commercial inventory & parcel consolidation',
                    'Sri Lanka customs clearance coordination',
                    'Direct doorstep or Wattala hub pickup',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B5121B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-7">
                <Link
                  to="/quote?direction=import&origin=Malaysia"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#111111] rounded-md hover:bg-[#B5121B] transition-colors"
                >
                  <span>Quote Malaysia Air Cargo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explicit Separation Notice for Sea Freight / FCL */}
      <section className="py-14 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111111] text-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 aspect-[16/9] lg:aspect-auto min-h-[220px]">
              <img
                src={oceanFclPortImg}
                alt="Ocean FCL shipping containers at container terminal"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-center gap-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                <Anchor className="w-4 h-4" />
                <span>Separate Full Container Ocean Service</span>
              </div>
              <h2 className="text-2xl font-bold">
                Looking for Full Container Load (FCL) Sea Freight?
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Alongside our Chennai India warehouse (Air &amp; Sea) and air cargo corridors from China, UAE, Thailand, and Malaysia, we operate dedicated Full Container Load (FCL) sea freight for high-volume commercial imports.
              </p>
              <div>
                <Link
                  to="/sea-freight"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#111111] bg-white rounded-md hover:bg-neutral-100 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>View Sea Freight / FCL</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
