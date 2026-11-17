import { FormEvent, useState } from 'react';
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { PageMeta } from '../components/PageMeta';
import { WattalaLocationMap } from '../components/WattalaLocationMap';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';

export function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError('Please fill in your name, contact number, and message.');
      return;
    }
    setError('');
    const text = [
      `Hello ${companyConfig.companyName} Team,`,
      `Name: ${name.trim()}`,
      `Contact: ${phone.trim()}`,
      `Enquiry: ${message.trim()}`,
    ].join('\n');
    window.open(buildWhatsAppLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageMeta
        title="Contact CMB XPRESS.LK | Wattala, Sri Lanka"
        description="Contact CMB XPRESS.LK (Buzzard Logistics (Pvt) Ltd) at 727/5 Ratnayake Garden, Wattala, Sri Lanka. Call or WhatsApp +94 77 011 7364 or email info@cmbxpress.lk."
        path="/contact"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Sri Lanka Operations Desk
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact {companyConfig.companyName}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl">
            Reach our Wattala logistics office directly by telephone, WhatsApp, or email for export couriers, China &amp; Thailand imports, and FCL sea freight.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Official Contact Details */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-xl p-7 space-y-6">
            <BrandLogo variant="contact" className="p-2 border border-neutral-200" />

            <div>
              <h2 className="text-xl font-bold text-[#111111]">{companyConfig.companyName}</h2>
              <p className="text-sm text-neutral-600 mt-0.5">{companyConfig.parentCompany}</p>
            </div>

            <div className="space-y-4 pt-2 border-t border-neutral-100 text-sm">
              <a
                href={companyConfig.phoneHref}
                className="flex items-start gap-3 text-[#111111] hover:text-[#B5121B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B5121B] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Telephone &amp; WhatsApp</div>
                  <div className="text-neutral-600 tabular-nums">{companyConfig.phone}</div>
                </div>
              </a>

              <a
                href={companyConfig.emailHref}
                className="flex items-start gap-3 text-[#111111] hover:text-[#B5121B] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B5121B] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-neutral-600">{companyConfig.email}</div>
                </div>
              </a>

              <a
                href={companyConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#111111] hover:text-[#B5121B] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#B5121B] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Office Address</div>
                  <div className="text-neutral-600">{companyConfig.address}</div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B5121B] mt-1">
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Direct Message Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white border border-neutral-200 rounded-xl p-7 space-y-5"
          >
            <h2 className="text-xl font-bold text-[#111111]">Send a Message via WhatsApp</h2>
            <p className="text-sm text-neutral-600">
              Submit your contact details and enquiry to start an immediate conversation with our team on WhatsApp ({companyConfig.phone}).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#111111] mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm tabular-nums focus:border-[#B5121B] focus:outline-none"
                  placeholder="+94 7X XXX XXXX"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-[#111111] mb-1.5">
                How Can We Help?
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-sm focus:border-[#B5121B] focus:outline-none"
                placeholder="Tell us about your export, import, pickup, or clearance enquiry."
              />
            </div>

            {error && <p className="text-xs text-[#B5121B]">{error}</p>}

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </button>
              <a
                href={companyConfig.emailHref}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#111111] border border-neutral-300 rounded-md hover:bg-[#F8F8F8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B5121B]" />
                <span>Email {companyConfig.email}</span>
              </a>
            </div>
          </form>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
          <WattalaLocationMap />
          <GoogleReviewsSection compact />
        </div>
      </section>
    </>
  );
}
