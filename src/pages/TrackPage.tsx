import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Search } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { companyConfig } from '../config/companyConfig';
import { lookupShipmentTracking, TrackingLookupResult } from '../services/trackingService';

export function TrackPage() {
  const [reference, setReference] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingLookupResult | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!reference.trim()) {
      setError('Please enter your order or waybill reference number.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await lookupShipmentTracking(reference);
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Track Shipment Assistance | CMB XPRESS.LK"
        description="Request verified shipment tracking assistance from CMB XPRESS.LK via WhatsApp or telephone with your order or waybill reference."
        path="/track"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Shipment Tracking Assistance
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Track Your Shipment With Our Operations Desk
          </h1>
          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Enter your order or waybill reference below to start an instant WhatsApp tracking check with our Wattala team.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8"
          >
            <label htmlFor="tracking-ref" className="block text-sm font-semibold text-[#111111]">
              Order Number / Waybill Reference
            </label>
            <div className="mt-2.5 flex flex-col sm:flex-row gap-3">
              <input
                id="tracking-ref"
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="e.g., CMB-2026-XXXX"
                className="flex-1 rounded-md border border-neutral-300 px-4 py-3 text-sm font-mono uppercase focus:border-[#B5121B] focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors whitespace-nowrap disabled:opacity-60 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{loading ? 'Preparing...' : 'Request Status Check'}</span>
              </button>
            </div>
            {error && <p className="mt-2 text-xs text-[#B5121B]">{error}</p>}
          </form>

          {result && (
            <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
                  Reference Prepared
                </span>
                <span className="font-mono text-sm font-bold text-[#111111] tabular-nums">
                  {result.referenceNumber}
                </span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">{result.message}</p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={result.whatsappAssistanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Check Status on WhatsApp</span>
                </a>
                <a
                  href={companyConfig.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:bg-[#F8F8F8] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#B5121B]" />
                  <span>Call {companyConfig.phone}</span>
                </a>
              </div>
            </div>
          )}

          <div className="text-xs text-neutral-600 flex flex-wrap items-center justify-between gap-3 px-1">
            <span>
              Looking to send a new shipment?{' '}
              <Link to="/quote" className="text-[#B5121B] font-semibold hover:underline">
                Request a quote
              </Link>
            </span>
            <span>{companyConfig.businessHours}</span>
          </div>
        </div>
      </section>
    </>
  );
}
