import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Gift,
  Globe2,
  MessageCircle,
  Package,
  Plane,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { SeasonalSnowfall } from '../components/SeasonalSnowfall';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';
import parcelImage from '../assets/images/about-1.png';
import handoverImage from '../assets/images/about-2.png';
import exportImage from '../assets/images/air_cargo_export_1794931379985.jpg';
import businessImage from '../assets/images/courier_dispatch_hub_1794931381191.jpg';
import importImage from '../assets/images/import_warehouse_freight_1794931381438.jpg';

const destinations = [
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇳🇿', name: 'New Zealand' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇮🇹', name: 'Italy' },
  { flag: '🇯🇵', name: 'Japan' },
];

const services = [
  {
    title: 'International parcels',
    description: 'Send personal packages to family, friends and customers overseas.',
    image: parcelImage,
    alt: 'Carefully packed parcels ready for courier dispatch',
    icon: Package,
    href: '/international-courier',
  },
  {
    title: 'Documents & gifts',
    description: 'Send important documents and suitable gifts from Sri Lanka.',
    image: handoverImage,
    alt: 'Courier parcel handover',
    icon: FileText,
    href: '/export',
  },
  {
    title: 'Express courier',
    description: 'Ask about priority international shipping for your destination.',
    image: exportImage,
    alt: 'International air cargo aircraft',
    icon: Plane,
    href: '/export',
  },
  {
    title: 'Business shipments',
    description: 'Courier and cargo support for regular business requirements.',
    image: businessImage,
    alt: 'Courier dispatch and logistics operations',
    icon: Truck,
    href: '/business-logistics',
  },
];

const steps = [
  { number: '01', title: 'Request a quote', copy: 'Share your destination and shipment details.', icon: FileText },
  { number: '02', title: 'Confirm details', copy: 'Our team helps confirm the suitable option.', icon: Check },
  { number: '03', title: 'Hand over your parcel', copy: 'Arrange the available handover or collection.', icon: Package },
  { number: '04', title: 'Send it worldwide', copy: 'Your shipment begins its international journey.', icon: Globe2 },
];

const faqs = [
  {
    question: 'Which countries can I send parcels to?',
    answer: 'We support international destinations including the UK, Canada, USA, Australia, Europe and other locations. Availability is confirmed when you request a quote.',
  },
  {
    question: 'How do I get a courier quotation?',
    answer: 'Share your destination, shipment type and approximate weight through our quote form or WhatsApp. Our team will help confirm the available service and rate.',
  },
  {
    question: 'Can I send documents and gifts?',
    answer: 'Yes, suitable documents, gifts and personal parcels can be quoted subject to destination rules and carrier restrictions.',
  },
  {
    question: 'How can I get a shipment update?',
    answer: 'Send your reference number to our WhatsApp team for tracking assistance. Live carrier tracking is available only where a supported tracking integration exists.',
  },
];

export function HomePage() {
  const seasonalEnabled = companyConfig.seasonalCampaign.enabled;

  return (
    <>
      <PageMeta
        title="CMB XPRESS.LK | International Courier from Sri Lanka"
        description="Send parcels, documents and business shipments from Sri Lanka to international destinations with CMB XPRESS.LK. Request a courier quotation."
        path="/"
      />

      <main>
        {/* Export-led hero */}
        <section className="relative isolate overflow-hidden bg-[#F8F8F8]">
          {seasonalEnabled && <SeasonalSnowfall active={seasonalEnabled} />}
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-48 h-[34rem] w-[34rem] rounded-full border border-[#B5121B]/10" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-9 px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:px-8 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative z-10"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B5121B]/15 bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-[#B5121B]">
                <Plane className="h-3.5 w-3.5" />
                INTERNATIONAL COURIER FROM SRI LANKA
              </div>

              <h1 className="max-w-xl text-[2.65rem] font-semibold leading-[1.06] tracking-[-0.045em] text-[#111111] sm:text-5xl lg:text-[3.65rem]">
                Sri Lanka to <span className="text-[#B5121B]">the world.</span>
              </h1>

              <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#5D5A58] sm:text-base">
                Send parcels, documents and business shipments overseas with CMB XPRESS.LK.
              </p>

              <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
                <Link
                  to="/quote?direction=export"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#B5121B] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(181,18,27,0.16)] transition hover:-translate-y-0.5 hover:bg-[#970F17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5121B]"
                >
                  Get a courier quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={buildWhatsAppLink('Hello CMB XPRESS.LK, I would like a courier quotation from Sri Lanka.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#D8D3CF] bg-white px-5 py-3 text-sm font-semibold text-[#222222] transition hover:border-[#B5121B] hover:text-[#B5121B]"
                >
                  <MessageCircle className="h-4 w-4 text-[#B5121B]" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#77716B]">
                <span className="font-semibold text-[#333333]">Your International Courier Partner</span>
                <span aria-hidden="true">·</span>
                <span>Wattala, Sri Lanka</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative min-w-0"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#211A18] shadow-[0_24px_70px_rgba(25,20,17,0.18)] sm:aspect-[16/10] lg:aspect-[1.18/1]">
                <img
                  src={exportImage}
                  alt="International air cargo prepared for shipment from Sri Lanka"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#100E0D]/70 via-transparent to-[#100E0D]/5" />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-2 text-[11px] font-semibold text-[#8E1119] shadow-lg sm:left-6 sm:top-6">
                  {seasonalEnabled ? '🎄 Christmas sending season' : 'International dispatch'}
                </div>

                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 700 500" fill="none" aria-hidden="true">
                  <motion.path
                    d="M82 330 C190 180 320 405 450 230 S590 130 650 98"
                    stroke="#F8D98B"
                    strokeWidth="2"
                    strokeDasharray="7 9"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.9 }}
                    transition={{ duration: 2.2, delay: 0.5 }}
                  />
                  <motion.circle
                    cx="650"
                    cy="98"
                    r="7"
                    fill="#F8D98B"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1.15, 1] }}
                    transition={{ duration: 0.8, delay: 2.4 }}
                  />
                </svg>

                {seasonalEnabled && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.5 }}
                    className="absolute bottom-4 right-4 flex items-center gap-3 rounded-xl border border-white/40 bg-white/95 p-3 shadow-xl sm:bottom-6 sm:right-6 sm:p-4"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#B5121B] text-white">
                      <Gift className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#B5121B]">Christmas dispatch</p>
                      <p className="mt-0.5 text-sm font-semibold text-[#171717]">Send a little happiness.</p>
                    </div>
                  </motion.div>
                )}

                <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F8D98B]">From Sri Lanka</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">Ready for the world.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-b border-[#EEEAE6] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              { icon: Globe2, value: companyConfig.internationalCoverageCount + '+', label: 'Destinations' },
              { icon: Package, value: 'Parcels', label: 'Personal & business' },
              { icon: MessageCircle, value: 'Real people', label: 'Helpful support' },
              { icon: ShieldCheck, value: 'Clear quotes', label: 'Before you ship' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F9EEEE] text-[#B5121B]">
                  <item.icon className="h-[18px] w-[18px]" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#222222]">{item.value}</span>
                  <span className="mt-0.5 block text-xs text-[#77716B]">{item.label}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Destinations */}
        <section id="destinations" className="scroll-mt-24 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5121B]">International delivery</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl">Where would you like to send?</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#77716B]">Choose a destination to start your courier enquiry.</p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-8">
              {destinations.map((item) => (
                <Link
                  key={item.name}
                  to={'/quote?direction=export&destination=' + encodeURIComponent(item.name)}
                  className="group flex min-h-[88px] flex-col items-center justify-center rounded-xl border border-[#ECE8E3] bg-[#FCFBFA] px-2 py-3 text-center transition hover:-translate-y-0.5 hover:border-[#DDB5B7] hover:bg-white hover:shadow-sm"
                >
                  <span className="text-2xl leading-none" aria-hidden="true">{item.flag}</span>
                  <span className="mt-2 text-xs font-medium text-[#34302D] group-hover:text-[#B5121B]">{item.name === 'United States' ? 'USA' : item.name}</span>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-5 text-[#918A83]">Destination and service availability are confirmed when you request a quotation.</p>
          </div>
        </section>

        {/* Courier services */}
        <section id="services" className="scroll-mt-24 bg-[#F8F8F7] py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5121B]">Courier services</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl">Ship what matters.</h2>
              </div>
              <Link to="/services" className="hidden items-center gap-1 text-sm font-semibold text-[#B5121B] hover:underline sm:inline-flex">
                All services <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group overflow-hidden rounded-xl border border-[#EAE6E1] bg-white transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(30,24,20,0.08)]"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-[#EDE9E4]">
                    <img src={service.image} alt={service.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[#B5121B]">
                      <service.icon className="h-4 w-4" />
                      <h3 className="text-base font-semibold tracking-tight text-[#1C1A18]">{service.title}</h3>
                    </div>
                    <p className="mt-2 min-h-[42px] text-sm leading-6 text-[#77716B]">{service.description}</p>
                    <Link to={service.href} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#B5121B]">
                      Explore service <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-6 sm:hidden">
              <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#B5121B]">Explore all services <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5121B]">Simple steps</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl">From your door to their door.</h2>
              <p className="mt-3 text-sm leading-6 text-[#77716B]">Our team helps you through each step of the shipment.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step.number} className="relative border-l-2 border-[#E9C9CA] pl-5 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-5">
                  <span className="absolute -left-[9px] top-0 grid h-4 w-4 place-items-center rounded-full border-4 border-white bg-[#B5121B] sm:-top-[9px] sm:left-0" />
                  <div className="flex items-center gap-3 sm:block">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#F9EEEE] text-[#B5121B]">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.14em] text-[#B5121B]">{step.number}</p>
                      <h3 className="mt-1 text-sm font-semibold text-[#222222]">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#77716B] sm:mt-3">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Christmas campaign */}
        {seasonalEnabled && (
          <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#8F1119] px-6 py-9 text-white sm:px-10 sm:py-12">
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10 shadow-[0_0_0_26px_rgba(255,255,255,0.025),0_0_0_60px_rgba(255,255,255,0.02)]" />
              <SeasonalSnowfall active={seasonalEnabled} />
              <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-center">
                <div className="max-w-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F5D891]">Christmas 2026 · International courier</p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">Send a little happiness home.</h2>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">Make this Christmas special with parcels and gifts sent from Sri Lanka.</p>
                </div>
                <Link to="/quote?direction=export" className="relative inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#8F1119] transition hover:bg-[#FFF6E6]">
                  Get your Christmas quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute bottom-[-22px] right-[17%] hidden rotate-[-8deg] sm:block">
                <div className="relative h-20 w-24 rounded-md border border-[#D5A43A] bg-[#B5121B] shadow-2xl">
                  <div className="absolute left-1/2 top-0 h-full w-3 -translate-x-1/2 bg-[#D4AF37]" />
                  <div className="absolute left-0 top-1/2 h-3 w-full -translate-y-1/2 bg-[#D4AF37]" />
                  <div className="absolute -top-5 left-1/2 h-7 w-12 -translate-x-1/2 rounded-full border-[5px] border-[#D4AF37]" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Import is secondary */}
        <section className="bg-[#F8F8F7] py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="overflow-hidden rounded-xl">
              <img src={importImage} alt="International import cargo being handled at a logistics warehouse" loading="lazy" className="aspect-[16/10] h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5121B]">Also available</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl">Import into Sri Lanka.</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#77716B]">Bring cargo from international suppliers with support from CMB XPRESS.LK.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#E7D5D2] bg-white px-3 py-2 text-xs font-medium text-[#4B403D]">🇨🇳 China air cargo</span>
                <span className="rounded-full border border-[#E7D5D2] bg-white px-3 py-2 text-xs font-medium text-[#4B403D]">🇹🇭 Thailand imports</span>
                <span className="rounded-full border border-[#E7D5D2] bg-white px-3 py-2 text-xs font-medium text-[#4B403D]">Sea freight / FCL</span>
              </div>
              <Link to="/import" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B5121B] hover:underline">
                Explore import services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5121B]">Need a hand?</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl">A few quick answers.</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#77716B]">Still have a question? Our team is happy to help.</p>
                <a href={buildWhatsAppLink('Hello CMB XPRESS.LK, I have a question about international courier services.')} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B5121B]">
                  Ask us on WhatsApp <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="divide-y divide-[#EEEAE6] border-y border-[#EEEAE6]">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#292522] marker:hidden">
                      {faq.question}
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#F8EEEE] text-[#B5121B] transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-[#77716B]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#F7F2EC] py-12 sm:py-14">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#B5121B]">Your next shipment starts here</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#171717] sm:text-3xl">Where are you sending?</h2>
              <p className="mt-2 text-sm text-[#77716B]">Tell us your destination. We’ll help with the next step.</p>
            </div>
            <div className="flex flex-col gap-3 min-[420px]:flex-row">
              <Link to="/quote?direction=export" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#B5121B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#970F17]">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={buildWhatsAppLink('Hello CMB XPRESS.LK, I would like help with an international shipment from Sri Lanka.')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#D6CCC2] bg-white px-5 py-3 text-sm font-semibold text-[#2A2521]">
                <MessageCircle className="h-4 w-4 text-[#B5121B]" /> WhatsApp us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
