import { useCallback, useEffect, useState } from 'react';
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { ExternalLink, MapPin, Navigation } from 'lucide-react';
import { companyConfig } from '../config/companyConfig';

interface MapsConfigResponse {
  hasKey: boolean;
  apiKey: string;
  placeId: string;
}

function HubMarkerWithInfoWindow() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoOpen, setInfoOpen] = useState(true);

  const handleClose = useCallback(() => {
    setInfoOpen(false);
  }, []);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={companyConfig.wattalaCoordinates}
        onClick={() => setInfoOpen((prev) => !prev)}
        title="CMB Xpress Courier & Cargo - Wattala"
      >
        <Pin background="#B5121B" borderColor="#111111" glyphColor="#FFFFFF" />
      </AdvancedMarker>

      {infoOpen && marker && (
        <InfoWindow anchor={marker} onCloseClick={handleClose}>
          <div className="p-1 max-w-[240px] space-y-1.5 text-[#111111]">
            <div className="text-xs font-bold uppercase tracking-wider text-[#B5121B]">
              {companyConfig.companyName}
            </div>
            <div className="text-sm font-bold leading-snug">
              CMB Xpress Courier &amp; Cargo - Wattala
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {companyConfig.address}
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs font-semibold">
              <a
                href={companyConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B5121B] hover:underline inline-flex items-center gap-1"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={companyConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:underline"
              >
                Google Reviews
              </a>
            </div>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export function WattalaLocationMap() {
  const [apiKey, setApiKey] = useState<string>(
    (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim() || ''
  );
  const [loading, setLoading] = useState(!apiKey);
  const [quotaReached, setQuotaReached] = useState(false);

  useEffect(() => {
    const handleQuota = () => setQuotaReached(true);
    window.addEventListener('gmp-quota-exceeded', handleQuota);
    return () => window.removeEventListener('gmp-quota-exceeded', handleQuota);
  }, []);

  useEffect(() => {
    if (apiKey) {
      setLoading(false);
      return;
    }

    let active = true;
    async function loadConfig() {
      try {
        const res = await fetch('/api/maps-client-config');
        const json: MapsConfigResponse = await res.json();
        if (active && json?.hasKey && json?.apiKey) {
          setApiKey(json.apiKey);
        }
      } catch {
        // Fallback panel renders if key is unavailable
      } finally {
        if (active) setLoading(false);
      }
    }

    loadConfig();
    return () => {
      active = false;
    };
  }, [apiKey]);

  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#B5121B]">
            Wattala Hub Location
          </p>
          <h2 className="text-lg font-bold text-[#111111]">
            CMB Xpress Courier &amp; Cargo - Wattala
          </h2>
        </div>

        <a
          href={companyConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#111111] rounded-md hover:bg-[#B5121B] transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="w-full h-[340px] sm:h-[380px] bg-neutral-100 relative">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center text-sm text-neutral-500">
            Loading Wattala location map…
          </div>
        ) : apiKey && !quotaReached ? (
          <APIProvider apiKey={apiKey} version="weekly" language="en" region="LK">
            <GoogleMap
              defaultCenter={companyConfig.wattalaCoordinates}
              defaultZoom={16}
              mapId="DEMO_MAP_ID"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              gestureHandling="cooperative"
              style={{ width: '100%', height: '100%' }}
            >
              <HubMarkerWithInfoWindow />
            </GoogleMap>
          </APIProvider>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#F8F8F8]">
            <MapPin className="w-8 h-8 text-[#B5121B]" />
            <div className="text-base font-bold text-[#111111]">
              {companyConfig.address}
            </div>
            <p className="text-xs text-neutral-600 max-w-md">
              Interactive map preview is unavailable right now. Use Google Maps directly for turn-by-turn directions to our Wattala dispatch hub.
            </p>
            <a
              href={companyConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#B5121B] rounded-md hover:bg-[#910D14] transition-colors"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
