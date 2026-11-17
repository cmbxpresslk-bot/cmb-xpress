import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Gift, Package } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { ServiceTierComparison } from '../components/ServiceTierComparison';
import { companyConfig } from '../config/companyConfig';

export function InternationalCourierPage() {
  return (
    <>
      <PageMeta
        title="International Courier Services Sri Lanka | CMB XPRESS.LK"
        description="Fast door-to-door international courier from Sri Lanka to 150+ countries for documents, gifts, personal parcels, and e-commerce shipments."
        path="/international-courier"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Door-to-Door Global Delivery
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              International Courier Services From Sri Lanka
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Send documents, gifts, and personal or commercial parcels across {companyConfig.internationalCoverageCount}+ countries with Express, Standard, and Economy tiers.
            </p>
          </div>
          <Link
            to="/quote?direction=export"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0 self-start lg:self-end"
          >
            <span>Book Courier Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: FileText,
              title: 'Urgent Documents',
              desc: 'Academic transcripts, contracts, legal paperwork, and corporate documents dispatched with priority handling.',
            },
            {
              icon: Gift,
              title: 'Family Gifts & Seasonal Parcels',
              desc: 'Carefully packed gifts, clothing, and permitted personal goods sent to loved ones abroad.',
            },
            {
              icon: Package,
              title: 'Small Business Parcels',
              desc: 'Reliable outbound parcel shipping for samples, craft exports, and online store orders.',
            },
          ].map((card) => (
            <div key={card.title} className="bg-[#F8F8F8] border border-neutral-200 rounded-xl p-6">
              <card.icon className="w-6 h-6 text-[#B5121B]" />
              <h2 className="mt-3 text-lg font-bold text-[#111111]">{card.title}</h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6">
            Available Courier Speeds
          </h2>
          <ServiceTierComparison direction="export" />
        </div>
      </section>

      <section className="py-14 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#111111]">
              Included With Every International Dispatch
            </h2>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700">
              {[
                'Packaging review',
                'Export documentation assistance',
                'WhatsApp tracking support',
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B5121B]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Link
            to="/track"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#111111] bg-white border border-neutral-300 rounded-md hover:border-[#111111] whitespace-nowrap shrink-0"
          >
            <span>Track Shipment Assistance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
