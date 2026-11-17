import { Link } from 'react-router-dom';
import { Anchor, ArrowRight, CheckCircle2, FileCheck2, Ship, Truck } from 'lucide-react';
import oceanFclPortImg from '../assets/images/ocean_fcl_port_1794931381536.jpg';
import { PageMeta } from '../components/PageMeta';

export function SeaFreightPage() {
  return (
    <>
      <PageMeta
        title="Sea Freight / FCL Shipping Sri Lanka | CMB XPRESS.LK"
        description="Dedicated Full Container Load (FCL) sea freight quotations, cargo information collection, import documentation support, clearance coordination, and delivery arrangements."
        path="/sea-freight"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <Anchor className="w-4 h-4" />
              <span>Ocean Cargo · Full Container Load</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Sea Freight / FCL Shipping Solutions
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Alongside our India Chennai warehouse (supporting both Air &amp; Sea) and scheduled Air Cargo from China, UAE, Thailand, and Malaysia, CMB XPRESS.LK coordinates dedicated Full Container Load (FCL) ocean shipping tailored to verified commercial cargo specifications.
            </p>
            <div className="pt-1">
              <Link
                to="/quote?direction=import&service=Sea%20Freight%20%2F%20FCL"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Request FCL Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-xl overflow-hidden border border-neutral-800 aspect-[16/9]">
            <img
              src={oceanFclPortImg}
              alt="Deep-water container port terminal handling crimson and dark steel FCL shipping containers"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Ship,
                title: 'Full Container Load (FCL)',
                desc: 'Dedicated FCL shipping coordination scoped directly to your commercial volume and container needs.',
              },
              {
                icon: FileCheck2,
                title: 'Cargo Info & Quotations',
                desc: 'Structured cargo information intake so our logistics team can prepare an accurate, lane-specific FCL quotation.',
              },
              {
                icon: CheckCircle2,
                title: 'Documentation & Clearance',
                desc: 'Import documentation assistance and port customs clearance coordination in Sri Lanka.',
              },
              {
                icon: Truck,
                title: 'Inland Delivery',
                desc: 'Coordinated container haulage and final delivery arrangements from port to your Sri Lanka warehouse.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F8F8F8] border border-neutral-200 rounded-xl p-6">
                <item.icon className="w-6 h-6 text-[#B5121B]" />
                <h2 className="mt-3 text-lg font-bold text-[#111111]">{item.title}</h2>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#F8F8F8] border border-neutral-200 rounded-xl p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-[#111111]">
                Need Air Cargo or India Chennai Hub Consolidation?
              </h2>
              <p className="mt-1.5 text-sm text-neutral-600">
                Explore our dedicated import solutions from India (Air &amp; Sea via our own Chennai warehouse), China, UAE, Thailand, and Malaysia.
              </p>
            </div>
            <Link
              to="/import"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#111111] bg-white border border-neutral-300 rounded-md hover:border-[#111111] whitespace-nowrap shrink-0"
            >
              <span>View Air Imports</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
