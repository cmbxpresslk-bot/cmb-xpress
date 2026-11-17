export interface SocialProfile {
  platform: 'facebook' | 'instagram' | 'linkedin' | 'tiktok';
  label: string;
  url: string;
}

export interface ServiceTierEstimate {
  id: 'express' | 'standard' | 'economy';
  name: string;
  indicativeWindow: string;
  summary: string;
  bestFor: string;
}

export interface QuoteEnquiryPayload {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  direction: 'export' | 'import';
  serviceType: string;
  origin: string;
  destination: string;
  cargoCategory: string;
  cargoDescription: string;
  packageCount: string;
  estimatedWeightKg: string;
  additionalNotes?: string;
}

export const companyConfig = {
  companyName: 'CMB XPRESS.LK',
  tagline: 'INTERNATIONAL COURIER PARTNER',
  parentCompany: 'Buzzard Logistics (Pvt) Ltd',
  establishedYear: 2024,
  country: 'Sri Lanka',
  website: 'https://www.cmbxpress.lk',
  phone: '+94 77 011 7364',
  phoneHref: 'tel:+94770117364',
  whatsappNumber: '94770117364',
  whatsappUrl: 'https://wa.me/94770117364',
  email: 'info@cmbxpress.lk',
  emailHref: 'mailto:info@cmbxpress.lk',
  address: '727/5 Ratnayake Garden, Wattala, Sri Lanka',
  shortAddress: 'Wattala, Sri Lanka',
  googlePlaceId: 'ChIJ9ZHtrfb34joR0C_5rGjtRoE',
  wattalaCoordinates: { lat: 7.001101, lng: 79.8967869 },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=727%2F5+Ratnayake+Garden%2C+Wattala%2C+Sri+Lanka&query_place_id=ChIJ9ZHtrfb34joR0C_5rGjtRoE',
  googleReviewsUrl:
    'https://search.google.com/local/reviews?placeid=ChIJ9ZHtrfb34joR0C_5rGjtRoE',
  googleWriteReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJ9ZHtrfb34joR0C_5rGjtRoE',
  businessHours: 'Mon – Sat · 8:30 AM – 6:00 PM (SLST)',
  internationalCoverageCount: 150,
  brandColors: {
    crimson: '#B5121B',
    black: '#111111',
    gold: '#D4AF37',
    offWhite: '#F8F8F8',
    white: '#FFFFFF',
  },
  socialLinks: [
    {
      platform: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61571530627770',
    },
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/cmbxpress.lk?igsh=MnlheGN2bG5jbWs1&utm_source=qr',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: '', // Configurable: add verified LinkedIn company URL when published
    },
    {
      platform: 'tiktok',
      label: 'TikTok',
      url: '', // Configurable: add verified TikTok profile URL when published
    },
  ] as SocialProfile[],
  exportDestinations: [
    'United Kingdom',
    'United States',
    'Canada',
    'Europe',
    'Australia',
    'New Zealand',
    'Japan',
    'South Korea',
    'Middle East',
  ],
  importOrigins: [
    {
      id: 'china',
      country: 'China',
      role: 'Primary Air Import Corridor',
      mode: 'Air Cargo',
      summary:
        'Dedicated air cargo solutions from China to Sri Lanka with eligible supplier collection, receiving, consolidation, customs clearance support, and duty-paid options for eligible shipments.',
    },
    {
      id: 'india',
      country: 'India',
      role: 'Own Warehouse in Chennai',
      mode: 'Air & Sea Cargo',
      summary:
        'Operated through our own warehouse facility in Chennai, India, supporting both fast Air Cargo and consolidated Sea Freight shipments into Sri Lanka with customs clearance and delivery.',
    },
    {
      id: 'thailand',
      country: 'Thailand',
      role: 'Southeast Asia Air Corridor',
      mode: 'Air Cargo',
      summary:
        'Scheduled international air cargo from Thailand to Sri Lanka with coordinated cargo handling, import documentation assistance, customs clearance support, and local delivery.',
    },
    {
      id: 'uae',
      country: 'UAE',
      role: 'Middle East Air Corridor',
      mode: 'Air Cargo',
      summary:
        'Direct air cargo import handling from the United Arab Emirates (Dubai / UAE) to Sri Lanka for commercial merchandise, supplier dispatches, and personal shipments.',
    },
    {
      id: 'malaysia',
      country: 'Malaysia',
      role: 'Southeast Asia Air Corridor',
      mode: 'Air Cargo',
      summary:
        'Reliable air cargo import coordination from Malaysia to Sri Lanka covering commercial supplier orders, consolidation support, customs clearance, and island-wide delivery.',
    },
  ],
  serviceLevels: [
    {
      id: 'express',
      name: 'Express',
      indicativeWindow: '3–5 business days*',
      summary: 'Priority air courier routing for time-critical documents, gifts, and urgent commercial parcels.',
      bestFor: 'Urgent documents, samples, and priority parcels',
    },
    {
      id: 'standard',
      name: 'Standard',
      indicativeWindow: '5–10 business days*',
      summary: 'Balanced air transit combining dependable schedules with competitive commercial pricing.',
      bestFor: 'E-commerce orders, personal gifts, and regular trade shipments',
    },
    {
      id: 'economy',
      name: 'Economy',
      indicativeWindow: '7–14 business days*',
      summary: 'Cost-efficient international air delivery designed for heavier or non-urgent consignments.',
      bestFor: 'Bulk parcels, consolidated cargo, and budget-conscious shipping',
    },
  ] as ServiceTierEstimate[],
  transitDisclaimer:
    '*Published indicative transit estimates depend on destination country, service availability, customs clearance, and operational conditions.',
  seasonalCampaign: {
    enabled: true,
    seasonId: 'christmas-2026',
    label: 'Christmas 2026 Seasonal Dispatch',
    headline: 'Make This Christmas Cross Every Border.',
    supportingLine: 'From Sri Lanka to the World. Delivering Happiness Across Borders.',
  },
  trackingConfig: {
    hasLiveApi: false,
    providerEndpoint: '',
  },
} as const;

export function buildWhatsAppLink(message: string): string {
  return `${companyConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteWhatsAppMessage(payload: QuoteEnquiryPayload): string {
  const lines = [
    `Hello ${companyConfig.companyName} Team,`,
    `I would like to request a shipping quotation:`,
    ``,
    `Direction: ${payload.direction === 'export' ? 'Export (From Sri Lanka)' : 'Import (To Sri Lanka)'}`,
    `Service Type: ${payload.serviceType}`,
    `Origin: ${payload.origin}`,
    `Destination: ${payload.destination}`,
    `Cargo Category: ${payload.cargoCategory}`,
    `Cargo Description: ${payload.cargoDescription}`,
    `Package Count: ${payload.packageCount}`,
    `Estimated Weight: ${payload.estimatedWeightKg} kg`,
    ``,
    `Customer Name: ${payload.customerName}`,
    `Contact Number: ${payload.customerPhone}`,
    payload.customerEmail ? `Email: ${payload.customerEmail}` : null,
    payload.additionalNotes ? `Notes: ${payload.additionalNotes}` : null,
  ].filter(Boolean);

  return lines.join('\n');
}
