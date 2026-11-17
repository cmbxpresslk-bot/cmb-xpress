import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink, companyConfig } from '../config/companyConfig';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink(
        `Hello ${companyConfig.companyName}, I would like assistance with an international shipment.`
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp with ${companyConfig.companyName}`}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111111] text-white border border-neutral-700 shadow-lg hover:bg-[#B5121B] hover:border-[#B5121B] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B5121B]"
    >
      <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        WhatsApp Desk
      </span>
    </a>
  );
}
