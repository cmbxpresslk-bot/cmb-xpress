import { companyConfig } from '../config/companyConfig';

export interface TrackingLookupResult {
  mode: 'assistance_required' | 'live_record';
  referenceNumber: string;
  message: string;
  whatsappAssistanceUrl: string;
}

/**
 * Integration-ready tracking service architecture.
 * Currently operates in honest WhatsApp assistance mode because no live carrier API
 * endpoint is configured. Never fabricates shipment statuses or package locations.
 */
export async function lookupShipmentTracking(rawCode: string): Promise<TrackingLookupResult> {
  const referenceNumber = rawCode.trim().toUpperCase();

  if (companyConfig.trackingConfig.hasLiveApi && companyConfig.trackingConfig.providerEndpoint) {
    // Future carrier API integration hook:
    // const response = await fetch(`${companyConfig.trackingConfig.providerEndpoint}?ref=${encodeURIComponent(referenceNumber)}`);
    // ...
  }

  const whatsappText = [
    `Hello ${companyConfig.companyName} Team,`,
    `I would like tracking assistance for my shipment:`,
    `Order / Waybill Reference: ${referenceNumber}`,
    `Please share the latest transit update.`,
  ].join('\n');

  return {
    mode: 'assistance_required',
    referenceNumber,
    message:
      'Live automated carrier lookup is not connected on this web portal yet. Contact our Wattala operations desk directly on WhatsApp with your reference number for an accurate, verified status update.',
    whatsappAssistanceUrl: `${companyConfig.whatsappUrl}?text=${encodeURIComponent(whatsappText)}`,
  };
}
