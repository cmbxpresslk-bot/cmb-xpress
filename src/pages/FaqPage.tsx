import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';
import { faqs } from '../data/siteContent';

const categories = ['All', 'Export', 'Import', 'Sea Freight', 'Transit & Tracking', 'Packaging & Customs'] as const;

export function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((item) => item.category === selectedCategory);

  return (
    <>
      <PageMeta
        title="Frequently Asked Questions | CMB XPRESS.LK"
        description="Answers on export delivery timeframes, India (Chennai warehouse Air & Sea), China, UAE, Thailand & Malaysia imports, Sea Freight / FCL, packaging, customs, and tracking."
        path="/faq"
      />

      <section className="bg-[#111111] text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            Shipping Knowledge Base
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-neutral-300">
            Clear answers regarding export couriers, imports from India (Chennai warehouse Air &amp; Sea), China, UAE, Thailand &amp; Malaysia, FCL sea freight, packaging, and customs support.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#B5121B] text-white'
                    : 'bg-[#F8F8F8] text-[#111111] border border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="border border-neutral-200 rounded-xl divide-y divide-neutral-200">
            {filtered.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="p-5 sm:p-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#B5121B]">
                        {item.category}
                      </span>
                      <h2 className="mt-1 text-base sm:text-lg font-bold text-[#111111]">
                        {item.question}
                      </h2>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-[#F8F8F8] border border-neutral-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-[#111111]">Still have a shipment question?</h3>
              <p className="text-sm text-neutral-600 mt-0.5">
                Message our Sri Lanka coordination desk directly on WhatsApp or request a tailored quote.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={buildWhatsAppLink(`Hello ${companyConfig.companyName}, I have a shipping question.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-[#111111] bg-white border border-neutral-300 rounded-md hover:bg-neutral-50"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
