import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Copy, Mail, MessageCircle } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import {
  buildQuoteWhatsAppMessage,
  buildWhatsAppLink,
  companyConfig,
  QuoteEnquiryPayload,
} from '../config/companyConfig';

const serviceOptions = [
  'International Courier',
  'Air Cargo (Export)',
  'India to Sri Lanka Import (Air / Sea - Chennai Warehouse)',
  'China to Sri Lanka Air Cargo Import',
  'Thailand to Sri Lanka Air Cargo Import',
  'UAE to Sri Lanka Air Cargo Import',
  'Malaysia to Sri Lanka Air Cargo Import',
  'Sea Freight / FCL',
  'Business & E-Commerce Logistics',
];

const cargoCategories = [
  'Documents',
  'Personal Parcels & Gifts',
  'E-Commerce / Retail Goods',
  'Commercial Cargo / Stock',
  'Electronics / Sensitive Items',
  'Full Container Load (FCL)',
];

function resolveImportService(originParam: string): string {
  const o = originParam.toLowerCase();
  if (o.includes('india') || o.includes('chennai')) {
    return 'India to Sri Lanka Import (Air / Sea - Chennai Warehouse)';
  }
  if (o.includes('thailand')) return 'Thailand to Sri Lanka Air Cargo Import';
  if (o.includes('uae') || o.includes('dubai')) return 'UAE to Sri Lanka Air Cargo Import';
  if (o.includes('malaysia')) return 'Malaysia to Sri Lanka Air Cargo Import';
  return 'China to Sri Lanka Air Cargo Import';
}

export function QuotePage() {
  const [searchParams] = useSearchParams();
  const initialDirection =
    searchParams.get('direction') === 'import' ? 'import' : 'export';
  const initialOrigin = searchParams.get('origin') || (initialDirection === 'export' ? 'Sri Lanka' : 'India');
  const initialDestination =
    searchParams.get('destination') || (initialDirection === 'import' ? 'Sri Lanka' : 'United Kingdom');
  const initialService =
    searchParams.get('service') ||
    (initialDirection === 'import'
      ? resolveImportService(initialOrigin)
      : 'International Courier');

  const [step, setStep] = useState<'form' | 'review'>('form');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<QuoteEnquiryPayload>({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    direction: initialDirection,
    serviceType: initialService,
    origin: initialOrigin,
    destination: initialDestination,
    cargoCategory: cargoCategories[1],
    cargoDescription: '',
    packageCount: '1',
    estimatedWeightKg: '',
    additionalNotes: '',
  });

  useEffect(() => {
    const dir = searchParams.get('direction');
    const org = searchParams.get('origin');
    const dest = searchParams.get('destination');
    const svc = searchParams.get('service');
    if (dir === 'import' || dir === 'export') {
      const resolvedOrg = org || (dir === 'export' ? 'Sri Lanka' : 'India');
      setForm((prev) => ({
        ...prev,
        direction: dir,
        origin: resolvedOrg,
        destination: dest || (dir === 'import' ? 'Sri Lanka' : 'United Kingdom'),
        serviceType:
          svc ||
          (dir === 'import'
            ? resolveImportService(resolvedOrg)
            : 'International Courier'),
      }));
    }
  }, [searchParams]);

  const handleDirectionChange = (direction: 'export' | 'import') => {
    setForm((prev) => ({
      ...prev,
      direction,
      origin: direction === 'export' ? 'Sri Lanka' : 'India',
      destination: direction === 'import' ? 'Sri Lanka' : 'United Kingdom',
      serviceType:
        direction === 'import'
          ? 'India to Sri Lanka Import (Air / Sea - Chennai Warehouse)'
          : 'International Courier',
    }));
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!form.customerName.trim()) next.customerName = 'Please enter your full name.';
    if (!form.customerPhone.trim() || form.customerPhone.replace(/\D/g, '').length < 7) {
      next.customerPhone = 'Please enter a valid contact or WhatsApp number.';
    }
    if (form.customerEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.customerEmail)) {
      next.customerEmail = 'Please enter a valid email address.';
    }
    if (!form.origin.trim()) next.origin = 'Origin country/city is required.';
    if (!form.destination.trim()) next.destination = 'Destination country/city is required.';
    if (!form.cargoDescription.trim()) next.cargoDescription = 'Please describe the items being shipped.';
    const weight = Number(form.estimatedWeightKg);
    if (!form.estimatedWeightKg.trim() || Number.isNaN(weight) || weight <= 0) {
      next.estimatedWeightKg = 'Enter an estimated weight in kg (greater than 0).';
    }
    const count = Number(form.packageCount);
    if (!form.packageCount.trim() || Number.isNaN(count) || count < 1) {
      next.packageCount = 'Enter at least 1 package.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('review');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const whatsappMessage = buildQuoteWhatsAppMessage(form);
  const whatsappHref = buildWhatsAppLink(whatsappMessage);
  const mailtoHref = `mailto:${companyConfig.email}?subject=${encodeURIComponent(
    `Quotation Request (${form.direction.toUpperCase()}) — ${form.customerName}`
  )}&body=${encodeURIComponent(whatsappMessage)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Get a Shipping Quotation | CMB XPRESS.LK"
        description="Request an export or import shipping quotation from CMB XPRESS.LK. Supports international courier, air cargo, China & Thailand imports, and Sea Freight / FCL."
        path="/quote"
      />

      <section className="bg-[#111111] text-white py-14 sm:py-16 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Shipping Quotation Request
          </p>
          <h1 className="mt-2.5 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {step === 'form' ? 'Request Your Export or Import Quote' : 'Review & Send Your Enquiry'}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300">
            Complete your shipment details below, review the formatted summary, and open WhatsApp or email directly with our Wattala coordination desk.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {step === 'form' ? (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-8"
            >
              {/* Direction Switch */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-3">
                  01. Shipping Direction
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleDirectionChange('export')}
                    className={`px-4 py-3.5 rounded-lg border text-left transition-colors ${
                      form.direction === 'export'
                        ? 'bg-[#B5121B] text-white border-[#B5121B]'
                        : 'bg-[#F8F8F8] text-[#111111] border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="text-sm font-bold">Export From Sri Lanka</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        form.direction === 'export' ? 'text-white/85' : 'text-neutral-600'
                      }`}
                    >
                      Sri Lanka to 150+ global destinations
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDirectionChange('import')}
                    className={`px-4 py-3.5 rounded-lg border text-left transition-colors ${
                      form.direction === 'import'
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-[#F8F8F8] text-[#111111] border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    <div className="text-sm font-bold">Import Into Sri Lanka</div>
                    <div
                      className={`text-xs mt-0.5 ${
                        form.direction === 'import' ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      India, China, UAE, Thailand &amp; Malaysia to Sri Lanka
                    </div>
                  </button>
                </div>
              </div>

              {/* Route & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    className="w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#B5121B] focus:outline-none"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="origin" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Origin (Country / City)
                  </label>
                  <input
                    id="origin"
                    type="text"
                    value={form.origin}
                    onChange={(e) => setForm({ ...form, origin: e.target.value })}
                    placeholder="e.g., Chennai (India), Dubai (UAE), Malaysia, or Guangzhou"
                    className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                  />
                  {errors.origin && <p className="mt-1 text-xs text-[#B5121B]">{errors.origin}</p>}
                </div>

                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Destination (Country / City)
                  </label>
                  <input
                    id="destination"
                    type="text"
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    placeholder="e.g., United Kingdom or Wattala, Sri Lanka"
                    className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                  />
                  {errors.destination && (
                    <p className="mt-1 text-xs text-[#B5121B]">{errors.destination}</p>
                  )}
                </div>
              </div>

              {/* Cargo Information */}
              <div className="space-y-5 pt-2 border-t border-neutral-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  02. Cargo Details
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="cargoCategory" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Cargo Category
                    </label>
                    <select
                      id="cargoCategory"
                      value={form.cargoCategory}
                      onChange={(e) => setForm({ ...form, cargoCategory: e.target.value })}
                      className="w-full rounded-md border border-neutral-300 bg-white px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                    >
                      {cargoCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="packageCount" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Package Count
                    </label>
                    <input
                      id="packageCount"
                      type="number"
                      min="1"
                      value={form.packageCount}
                      onChange={(e) => setForm({ ...form, packageCount: e.target.value })}
                      className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm tabular-nums focus:border-[#B5121B] focus:outline-none"
                    />
                    {errors.packageCount && (
                      <p className="mt-1 text-xs text-[#B5121B]">{errors.packageCount}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="estimatedWeightKg" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Estimated Weight (kg)
                    </label>
                    <input
                      id="estimatedWeightKg"
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={form.estimatedWeightKg}
                      onChange={(e) => setForm({ ...form, estimatedWeightKg: e.target.value })}
                      placeholder="e.g., 12.5"
                      className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm tabular-nums focus:border-[#B5121B] focus:outline-none"
                    />
                    {errors.estimatedWeightKg && (
                      <p className="mt-1 text-xs text-[#B5121B]">{errors.estimatedWeightKg}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="cargoDescription" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Cargo Description
                  </label>
                  <textarea
                    id="cargoDescription"
                    rows={3}
                    value={form.cargoDescription}
                    onChange={(e) => setForm({ ...form, cargoDescription: e.target.value })}
                    placeholder="Describe contents, dimensions if oversized, or FCL container specs."
                    className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                  />
                  {errors.cargoDescription && (
                    <p className="mt-1 text-xs text-[#B5121B]">{errors.cargoDescription}</p>
                  )}
                </div>
              </div>

              {/* Customer Details */}
              <div className="space-y-5 pt-2 border-t border-neutral-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  03. Contact Information
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      value={form.customerName}
                      onChange={(e) => setForm({ ...form, customerName: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-xs text-[#B5121B]">{errors.customerName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="customerPhone" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="customerPhone"
                      type="tel"
                      value={form.customerPhone}
                      onChange={(e) => setForm({ ...form, customerPhone: e.target.value })}
                      placeholder="+94 7X XXX XXXX"
                      className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm tabular-nums focus:border-[#B5121B] focus:outline-none"
                    />
                    {errors.customerPhone && (
                      <p className="mt-1 text-xs text-[#B5121B]">{errors.customerPhone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="customerEmail" className="block text-sm font-semibold text-[#111111] mb-1.5">
                      Email (Optional)
                    </label>
                    <input
                      id="customerEmail"
                      type="email"
                      value={form.customerEmail}
                      onChange={(e) => setForm({ ...form, customerEmail: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                    />
                    {errors.customerEmail && (
                      <p className="mt-1 text-xs text-[#B5121B]">{errors.customerEmail}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-semibold text-[#111111] mb-1.5">
                    Additional Notes (Optional)
                  </label>
                  <input
                    id="additionalNotes"
                    type="text"
                    value={form.additionalNotes}
                    onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                    placeholder="Pickup location, preferred tier (Express/Standard/Economy), or supplier readiness"
                    className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-neutral-500">
                  Next step lets you review your formatted quotation summary before sending via WhatsApp or email.
                </p>
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors cursor-pointer"
                >
                  Review Quotation Summary
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111]">
                  <CheckCircle2 className="w-5 h-5 text-[#B5121B]" />
                  <span>Quotation Summary Ready</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-[#111111]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Edit Details</span>
                </button>
              </div>

              <div className="bg-[#F8F8F8] border border-neutral-200 rounded-lg p-5">
                <pre className="whitespace-pre-wrap font-sans text-sm text-[#111111] leading-relaxed">
                  {whatsappMessage}
                </pre>
              </div>

              <p className="text-xs text-neutral-600">
                Sending opens WhatsApp ({companyConfig.phone}) or your email client ({companyConfig.email}) with your shipment summary pre-filled. Quotations are confirmed directly by our logistics team after reviewing cargo details.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </a>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:bg-[#F8F8F8] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B5121B]" />
                  <span>Send via Email</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-neutral-700 border border-neutral-200 rounded-md hover:bg-[#F8F8F8] transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
