import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe2, PlaneTakeoff } from 'lucide-react';
import airCargoExportImg from '../assets/images/air_cargo_export_1794931379985.jpg';
import { CountryFlag, getCountryCodeFromName } from '../components/CountryFlag';
import { PageMeta } from '../components/PageMeta';
import { ServiceTierComparison } from '../components/ServiceTierComparison';
import { companyConfig } from '../config/companyConfig';

const exportCategories = [
  {
    title: 'Personal Parcels, Gifts & Documents',
    items: [
      'Urgent legal & academic documents',
      'Family gifts & seasonal parcels',
      'Permitted personal items & apparel',
      'Doorstep or Wattala drop-off handling',
    ],
  },
  {
    title: 'Commercial & Bulk Air Export',
    items: [
      'Commercial trade consignments',
      'Bulk business & wholesale air cargo',
      'E-commerce international order fulfillment',
      'Packaging & export documentation support',
    ],
  },
];

export function ExportPage() {
  return (
    <>
      <PageMeta
        title="Export From Sri Lanka | International Courier & Air Cargo"
        description="Send documents, gifts, personal parcels, and commercial air export cargo from Sri Lanka to UK, USA, Canada, Europe, Australia, Japan, and 150+ destinations."
        path="/export"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <PlaneTakeoff className="w-4 h-4" />
              <span>Export · Sri Lanka to the World</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              International Courier &amp; Air Export From Sri Lanka
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Reach {companyConfig.internationalCoverageCount}+ global destinations with dependable door-to-door courier delivery, commercial air export cargo, packaging assistance, and export customs support.
            </p>
            <div className="pt-1">
              <Link
                to="/quote?direction=export"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Request Export Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-neutral-800 aspect-[16/9]">
            <img
              src={airCargoExportImg}
              alt="International export air cargo freighter loading at twilight tarmac"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {exportCategories.map((cat) => (
            <div key={cat.title} className="bg-[#F8F8F8] border border-neutral-200 rounded-xl p-7">
              <h2 className="text-xl font-bold text-[#111111]">{cat.title}</h2>
              <ul className="mt-5 space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#B5121B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Export Markets With Crisp Country Flags */}
      <section className="py-16 sm:py-20 bg-[#F8F8F8] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            <Globe2 className="w-4 h-4" />
            <span>Key Export Markets</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#111111]">
            Major Destinations Served From Sri Lanka
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {companyConfig.exportDestinations.map((dest) => {
              const code = getCountryCodeFromName(dest);
              return (
                <Link
                  key={dest}
                  to={`/quote?direction=export&destination=${encodeURIComponent(dest)}`}
                  className="bg-white border border-neutral-200 rounded-lg px-4 py-4 text-sm font-semibold text-[#111111] hover:border-[#B5121B] hover:text-[#B5121B] transition-colors flex items-center justify-between gap-2"
                >
                  <span className="inline-flex items-center gap-2.5 min-w-0">
                    {code && (
                      <CountryFlag
                        code={code}
                        className="w-5 h-3.5 rounded-[2px]"
                        title={dest}
                      />
                    )}
                    <span className="truncate">{dest}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-8">
            Indicative Export Delivery Speeds
          </h2>
          <ServiceTierComparison direction="export" />
        </div>
      </section>
    </>
  );
}
