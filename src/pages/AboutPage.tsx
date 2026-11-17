import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Globe2, MapPin, ShieldCheck } from 'lucide-react';
import parcelLabelImg from '../assets/images/about-1.png';
import courierHandoverImg from '../assets/images/about-2.png';
import { BrandLogo } from '../components/BrandLogo';
import { PageMeta } from '../components/PageMeta';
import { companyConfig } from '../config/companyConfig';

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About CMB XPRESS.LK | Buzzard Logistics (Pvt) Ltd"
        description="Learn about CMB XPRESS.LK, powered by Buzzard Logistics (Pvt) Ltd in Wattala, Sri Lanka. International courier, export, and import cargo solutions."
        path="/about"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              About {companyConfig.companyName}
            </p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Connecting Sri Lanka With Global Markets Since {companyConfig.establishedYear}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              {companyConfig.companyName} is a Sri Lankan international courier and logistics provider powered by{' '}
              <span className="text-white font-semibold">{companyConfig.parentCompany}</span>, supporting personal shippers, online sellers, importers, and SMEs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <BrandLogo variant="about" className="p-3 border border-neutral-200" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111]">
              Built Around Two-Way Trade &amp; Transparent Coordination
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Operating from our operations office in Wattala, Colombo—and our own warehouse in Chennai, India—{companyConfig.companyName} handles both outbound exports from Sri Lanka to {companyConfig.internationalCoverageCount}+ international destinations and inbound Air Cargo and India Sea Freight imports from India, China, UAE, Thailand, and Malaysia into Sri Lanka.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              Every shipment—whether an urgent family gift, an e-commerce customer order, or commercial stock—is supported with practical packaging guidance, customs documentation review, and direct human communication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F8F8F8] border border-neutral-200 rounded-lg p-4">
                <Building2 className="w-5 h-5 text-[#B5121B]" />
                <div className="mt-2 text-sm font-bold text-[#111111]">Parent Entity</div>
                <div className="text-xs text-neutral-600 mt-0.5">{companyConfig.parentCompany}</div>
              </div>
              <div className="bg-[#F8F8F8] border border-neutral-200 rounded-lg p-4">
                <MapPin className="w-5 h-5 text-[#B5121B]" />
                <div className="mt-2 text-sm font-bold text-[#111111]">Sri Lanka Hub</div>
                <div className="text-xs text-neutral-600 mt-0.5">{companyConfig.address}</div>
              </div>
              <div className="bg-[#F8F8F8] border border-neutral-200 rounded-lg p-4">
                <Globe2 className="w-5 h-5 text-[#B5121B]" />
                <div className="mt-2 text-sm font-bold text-[#111111]">Global Network</div>
                <div className="text-xs text-neutral-600 mt-0.5">
                  {companyConfig.internationalCoverageCount}+ Countries (subject to route availability)
                </div>
              </div>
              <div className="bg-[#F8F8F8] border border-neutral-200 rounded-lg p-4">
                <ShieldCheck className="w-5 h-5 text-[#B5121B]" />
                <div className="mt-2 text-sm font-bold text-[#111111]">Dedicated Support</div>
                <div className="text-xs text-neutral-600 mt-0.5 tabular-nums">{companyConfig.phone}</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:bg-[#F8F8F8] transition-colors"
              >
                <span>Contact Wattala Office</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <img
              src={parcelLabelImg}
              alt="CMB XPRESS.LK dispatch label preparation"
              className="w-full h-80 sm:h-[28rem] object-cover rounded-xl border border-neutral-200"
            />
            <img
              src={courierHandoverImg}
              alt="CMB XPRESS.LK courier parcel handover"
              className="w-full h-80 sm:h-[28rem] object-cover rounded-xl border border-neutral-200"
            />
          </div>
        </div>
      </section>
    </>
  );
}
