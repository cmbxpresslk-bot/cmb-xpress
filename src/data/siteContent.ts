export interface ServiceSummary {
  slug: string;
  to: string;
  direction: 'Export' | 'Import' | 'Specialized' | 'Ocean';
  title: string;
  description: string;
  highlights: string[];
}

export interface FaqEntry {
  category: 'Export' | 'Import' | 'Sea Freight' | 'Transit & Tracking' | 'Packaging & Customs';
  question: string;
  answer: string;
}

export const coreServices: ServiceSummary[] = [
  {
    slug: 'international-courier',
    to: '/international-courier',
    direction: 'Export',
    title: 'International Courier Services',
    description:
      'Door-to-door delivery of documents, personal parcels, seasonal gifts, and commercial items from Sri Lanka to 150+ countries.',
    highlights: [
      'Express, Standard, and Economy air options',
      'Documents, gifts, and personal parcel handling',
      'Island-wide collection coordination in Sri Lanka',
    ],
  },
  {
    slug: 'air-export',
    to: '/export',
    direction: 'Export',
    title: 'Air Export Services',
    description:
      'Structured international air cargo from Sri Lanka for commercial consignments, bulk business shipments, and urgent trade orders.',
    highlights: [
      'Commercial shipments and bulk business cargo',
      'Export documentation & customs support',
      'Coverage across UK, USA, Europe, Australia, Japan & Middle East',
    ],
  },
  {
    slug: 'china-thailand-air-import',
    to: '/import',
    direction: 'Import',
    title: 'Import Solutions (China, India, UAE, Thailand & Malaysia)',
    description:
      'Inbound air cargo from China, India, Thailand, UAE, and Malaysia—plus dedicated Sea Freight from our own warehouse in Chennai, India.',
    highlights: [
      'India (Own Chennai Warehouse): Air Cargo & Sea Freight',
      'China Air Cargo: supplier collection & duty-paid options',
      'UAE, Thailand & Malaysia: scheduled air cargo & clearance',
    ],
  },
  {
    slug: 'business-ecommerce',
    to: '/business-logistics',
    direction: 'Export',
    title: 'Business & E-Commerce Logistics',
    description:
      'Scalable shipping workflows tailored for online sellers, SMEs, exporters, importers, retailers, and entrepreneurs.',
    highlights: [
      'Coordinated international fulfillment for online stores',
      'Commercial trade lane guidance for SMEs',
      'Dedicated WhatsApp & operations desk support',
    ],
  },
  {
    slug: 'sea-freight-fcl',
    to: '/sea-freight',
    direction: 'Ocean',
    title: 'Sea Freight / FCL',
    description:
      'Dedicated Full Container Load (FCL) ocean shipping coordination as a separate service for high-volume commercial cargo.',
    highlights: [
      'Full Container Load (FCL) quotations',
      'Cargo specification & documentation support',
      'Port clearance coordination and Sri Lanka delivery',
    ],
  },
  {
    slug: 'customs-packaging',
    to: '/services#packaging-customs',
    direction: 'Specialized',
    title: 'Customs Clearance & Specialized Packaging',
    description:
      'End-to-end customs compliance guidance and protective export packaging, including vacuum-sealed options for sensitive or perishable items.',
    highlights: [
      'Customs documentation & compliance review',
      'Protective carton, fragile & vacuum-sealed packing',
      'Export and import clearance coordination',
    ],
  },
];

export const faqs: FaqEntry[] = [
  {
    category: 'Transit & Tracking',
    question: 'What are the indicative international delivery timeframes?',
    answer:
      'CMB XPRESS.LK publishes three indicative air courier tiers: Express (3–5 business days*), Standard (5–10 business days*), and Economy (7–14 business days*). Actual delivery timeframes depend on destination country, service availability, customs processing, and operational conditions.',
  },
  {
    category: 'Transit & Tracking',
    question: 'How do I track my shipment or request a status update?',
    answer:
      'Visit our Track Shipment Assistance page and enter your order or waybill reference. You will be connected directly with our Wattala operations desk on WhatsApp (+94 77 011 7364) with your reference pre-filled so a coordinator can verify and share the current status.',
  },
  {
    category: 'Import',
    question: 'How does China-to-Sri Lanka air cargo differ from Sea Freight?',
    answer:
      'China-to-Sri Lanka air cargo is a rapid air transportation service supporting eligible supplier collection, receiving, consolidation where applicable, customs clearance support, and duty-paid options for eligible shipments. Sea Freight / FCL is a completely separate ocean container shipping service for full-container commercial volumes.',
  },
  {
    category: 'Import',
    question: 'Do you handle imports from India, China, UAE, Thailand, and Malaysia?',
    answer:
      'Yes. We operate our own warehouse in Chennai, India—handling both Air Cargo and Sea Freight from India to Sri Lanka—alongside scheduled Air Cargo import services from China, UAE, Thailand, and Malaysia with documentation and Sri Lanka customs clearance support.',
  },
  {
    category: 'Import',
    question: 'Do you have a warehouse in India for Air and Sea imports?',
    answer:
      'Yes. We maintain our own warehouse facility in Chennai, India to receive commercial and supplier cargo and coordinate both fast Air Cargo and consolidated Sea Freight shipments into Sri Lanka.',
  },
  {
    category: 'Sea Freight',
    question: 'What is included in your Sea Freight / FCL service?',
    answer:
      'Our Sea Freight / FCL service covers Full Container Load shipping quotations, cargo information collection, import documentation support, customs clearance coordination, and inland delivery arrangements in Sri Lanka. Quotations are tailored per shipment based on verified container specifications.',
  },
  {
    category: 'Packaging & Customs',
    question: 'Do you assist with export packaging and customs paperwork?',
    answer:
      'Yes. Our team provides secure packaging assistance—including specialized vacuum-sealed and protective packing for sensitive goods—alongside customs and export/import documentation support to help prevent border delays.',
  },
  {
    category: 'Export',
    question: 'Which countries can I ship to from Sri Lanka?',
    answer:
      'CMB XPRESS.LK connects Sri Lanka with over 150 international destinations, including the United Kingdom, United States, Canada, Europe, Australia, New Zealand, Japan, South Korea, and the Middle East (subject to current route availability).',
  },
];
