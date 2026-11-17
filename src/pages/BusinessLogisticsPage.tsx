import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, CheckCircle2, ShoppingBag, TrendingUp } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';

const businessSegments = [
  {
    icon: ShoppingBag,
    title: 'Online Sellers & E-Commerce Stores',
    desc: 'Fulfill cross-border customer orders from Sri Lanka or restock inventory from overseas suppliers with predictable coordination.',
    points: [
      'Flexible Express, Standard & Economy tiers',
      'Protective packaging & labeling assistance',
      'Direct WhatsApp coordination for order batches',
    ],
  },
  {
    icon: Briefcase,
    title: 'SMEs, Retailers & Entrepreneurs',
    desc: 'Scale regional sourcing and international trade without maintaining an internal freight department.',
    points: [
      'China & Thailand air cargo sourcing lanes',
      'Duty-paid options for eligible China air imports',
      'Separate FCL sea freight for full-container scaling',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Commercial Exporters & Importers',
    desc: 'Move commercial cargo, trade samples, and bulk shipments with clear customs and documentation workflows.',
    points: [
      'Commercial invoice & packing list review',
      'Bulk air export capacity to key global markets',
      'Dedicated Sri Lanka clearance & delivery support',
    ],
  },
];

export function BusinessLogisticsPage() {
  return (
    <>
      <PageMeta
        title="Business & E-Commerce Logistics Sri Lanka | CMB XPRESS.LK"
        description="International shipping and import/export logistics built for Sri Lankan online sellers, SMEs, retailers, entrepreneurs, importers, and exporters."
        path="/business-logistics"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Commercial Trade &amp; Fulfillment
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Business &amp; E-Commerce Logistics Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Helping Sri Lankan online stores, SMEs, retailers, entrepreneurs, importers, and exporters move goods across international borders efficiently.
            </p>
          </div>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0 self-start lg:self-end"
          >
            <span>Request Business Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-7">
          {businessSegments.map((seg) => (
            <div
              key={seg.title}
              className="border border-neutral-200 rounded-xl p-7 flex flex-col justify-between bg-white"
            >
              <div>
                <seg.icon className="w-6 h-6 text-[#B5121B]" />
                <h2 className="mt-4 text-xl font-bold text-[#111111]">{seg.title}</h2>
                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">{seg.desc}</p>
                <ul className="mt-5 pt-4 border-t border-neutral-100 space-y-2.5">
                  {seg.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#B5121B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
