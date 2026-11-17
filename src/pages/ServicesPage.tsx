import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PackageCheck, ShieldCheck } from 'lucide-react';
import airCargoExportImg from '../assets/images/air_cargo_export_1794931379985.jpg';
import courierDispatchHubImg from '../assets/images/courier_dispatch_hub_1794931381191.jpg';
import { PageMeta } from '../components/PageMeta';
import { coreServices } from '../data/siteContent';

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Logistics & Courier Services | CMB XPRESS.LK"
        description="Explore CMB XPRESS.LK services: international courier, air export, imports from India (Chennai warehouse Air & Sea), China, UAE, Thailand & Malaysia, customs clearance, and Sea Freight / FCL."
        path="/services"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              Complete Logistics Capabilities
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              International Courier, Air Cargo &amp; Ocean Freight Services
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Every service is structured around clear export lanes from Sri Lanka, dedicated import corridors into Sri Lanka, and separate Full Container Load (FCL) sea freight coordination.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/3]">
              <img
                src={courierDispatchHubImg}
                alt="Express courier sorting and packaging facility"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/3]">
              <img
                src={airCargoExportImg}
                alt="Wide-body air cargo freighter loading international exports"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => (
              <div
                key={service.slug}
                className="border border-neutral-200 rounded-xl p-6 flex flex-col justify-between bg-white"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                    0{idx + 1}. {service.direction}
                  </span>
                  <h2 className="mt-2.5 text-xl font-bold text-[#111111]">{service.title}</h2>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B5121B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    to={service.to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B5121B] hover:text-[#111111]"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Customs & Packaging Detail Anchor */}
          <div
            id="packaging-customs"
            className="mt-14 bg-[#F8F8F8] border border-neutral-200 rounded-xl p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div>
              <ShieldCheck className="w-6 h-6 text-[#B5121B]" />
              <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                Customs &amp; Documentation Support
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                International shipping depends on accurate invoices, packing lists, HS classifications, and compliance checks. Our operations team guides shippers and importers through customs formalities to reduce unnecessary clearance holds.
              </p>
            </div>
            <div>
              <PackageCheck className="w-6 h-6 text-[#B5121B]" />
              <h2 className="mt-3 text-2xl font-bold text-[#111111]">
                Specialized &amp; Vacuum-Sealed Packaging
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                From fragile retail goods to permitted food items and commercial electronics, we assist with protective export boxing, cushioning, and vacuum-sealed packing designed for international air transit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
