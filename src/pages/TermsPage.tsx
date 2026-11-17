import { PageMeta } from '../components/PageMeta';
import { companyConfig } from '../config/companyConfig';

export function TermsPage() {
  return (
    <>
      <PageMeta
        title="Terms & Conditions | CMB XPRESS.LK"
        description="Terms and Conditions governing international courier, air export, air import, and sea freight coordination by CMB XPRESS.LK (Buzzard Logistics (Pvt) Ltd)."
        path="/terms"
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              Legal Information
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#111111]">
              Terms &amp; Conditions
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              {companyConfig.companyName} · {companyConfig.parentCompany}
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
            <h2 className="text-lg font-bold text-[#111111]">1. Quotations &amp; Service Availability</h2>
            <p>
              All courier, air cargo, and Sea Freight / FCL quotations issued by {companyConfig.companyName} are subject to actual verified weight, volumetric dimensions, item eligibility, origin/destination route availability, and prevailing customs regulations.
            </p>
            <h2 className="text-lg font-bold text-[#111111] pt-2">2. Indicative Transit Timeframes</h2>
            <p>
              Published service windows (Express 3–5 business days, Standard 5–10 business days, Economy 7–14 business days) are indicative estimates only and depend on destination country, flight schedules, customs inspections, and operational conditions.
            </p>
            <h2 className="text-lg font-bold text-[#111111] pt-2">3. Prohibited &amp; Restricted Items</h2>
            <p>
              Shippers and importers are responsible for declaring accurate contents and values. Restricted, hazardous, or prohibited goods under Sri Lankan or destination customs law cannot be accepted without explicit regulatory clearance.
            </p>
            <h2 className="text-lg font-bold text-[#111111] pt-2">4. Contact</h2>
            <p>
              Questions regarding shipment terms may be directed to {companyConfig.parentCompany} at{' '}
              {companyConfig.address}, email{' '}
              <a href={companyConfig.emailHref} className="text-[#B5121B] font-semibold hover:underline">
                {companyConfig.email}
              </a>
              , or telephone{' '}
              <a href={companyConfig.phoneHref} className="text-[#B5121B] font-semibold hover:underline tabular-nums">
                {companyConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
