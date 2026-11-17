import { PageMeta } from '../components/PageMeta';
import { companyConfig } from '../config/companyConfig';

export function PrivacyPolicyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy | CMB XPRESS.LK"
        description="Privacy Policy for CMB XPRESS.LK, operated by Buzzard Logistics (Pvt) Ltd in Sri Lanka."
        path="/privacy-policy"
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
              Legal Information
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#111111]">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              {companyConfig.companyName} · {companyConfig.parentCompany}
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
            <p>
              {companyConfig.companyName}, operated by {companyConfig.parentCompany} ({companyConfig.address}), respects the privacy of individuals and businesses using our courier, air cargo, import, and sea freight services.
            </p>
            <h2 className="text-lg font-bold text-[#111111] pt-2">1. Information Collected</h2>
            <p>
              When you request a shipping quotation or contact our operations desk, we collect only the contact details and cargo specifications you voluntarily share (such as your name, telephone/WhatsApp number, email address, origin, destination, and item descriptions) to prepare quotations and coordinate customs or delivery.
            </p>
            <h2 className="text-lg font-bold text-[#111111] pt-2">2. How Information Is Used</h2>
            <p>
              Your details are used solely to communicate regarding shipping quotations, export/import documentation, customs formalities, and delivery coordination. We do not sell customer data to third parties.
            </p>
            <h2 className="text-lg font-bold text-[#111111] pt-2">3. Google Maps Platform Integration</h2>
            <p>
              Our website integrates interactive Google Maps features and live business reviews for our Wattala hub. Use of Google Maps features is subject to the{' '}
              <a
                href="https://maps.google.com/help/terms_maps/?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B5121B] font-semibold hover:underline"
              >
                Google Maps/Google Earth Additional Terms of Service
              </a>{' '}
              and the{' '}
              <a
                href="https://policies.google.com/privacy?utm_campaign=gmp_mcp_codeassist_v1_aistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B5121B] font-semibold hover:underline"
              >
                Google Privacy Policy
              </a>
              .
            </p>
            <h2 className="text-lg font-bold text-[#111111] pt-2">4. Contact for Privacy Enquiries</h2>
            <p>
              For questions regarding your personal or shipment information, please contact us at{' '}
              <a href={companyConfig.emailHref} className="text-[#B5121B] font-semibold hover:underline">
                {companyConfig.email}
              </a>{' '}
              or call{' '}
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
