import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { geoGraticule10, geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldAtlas from 'world-atlas/countries-110m.json';
import { ArrowRight, Plane } from 'lucide-react';
import { CountryCode, CountryFlag } from './CountryFlag';

interface GlobalRouteMapProps {
  activeDirection?: 'export' | 'import' | 'both';
}

interface CorridorNode {
  id: string;
  code: CountryCode;
  country: string;
  city: string;
  direction: 'export' | 'import';
  coords: [number, number];
  isoIds: string[];
  serviceSummary: string;
  labelAlign?: 'left' | 'right' | 'center';
}

const HUB_COORDS: [number, number] = [79.8968, 7.0011]; // Wattala / Colombo, Sri Lanka
const HUB_ISO_ID = '144';

const CORRIDORS: CorridorNode[] = [
  {
    id: 'gb',
    code: 'GB',
    country: 'United Kingdom',
    city: 'London',
    direction: 'export',
    coords: [-0.1276, 51.5072],
    isoIds: ['826'],
    serviceSummary: 'Air Export · Express 3–5d*',
    labelAlign: 'center',
  },
  {
    id: 'us',
    code: 'US',
    country: 'United States',
    city: 'New York',
    direction: 'export',
    coords: [-74.006, 40.7128],
    isoIds: ['840'],
    serviceSummary: 'Air Export · Express / Standard',
    labelAlign: 'left',
  },
  {
    id: 'ca',
    code: 'CA',
    country: 'Canada',
    city: 'Toronto',
    direction: 'export',
    coords: [-95.0, 56.0],
    isoIds: ['124'],
    serviceSummary: 'Air Export · Door-to-Door',
    labelAlign: 'left',
  },
  {
    id: 'eu',
    code: 'EU',
    country: 'Europe',
    city: 'Frankfurt',
    direction: 'export',
    coords: [10.4515, 51.1657],
    isoIds: ['276', '250', '528', '380', '724', '056'],
    serviceSummary: 'Air Export · EU Network',
    labelAlign: 'right',
  },
  {
    id: 'ae',
    code: 'AE',
    country: 'Middle East',
    city: 'Dubai',
    direction: 'export',
    coords: [55.2708, 25.2048],
    isoIds: ['784', '682', '634'],
    serviceSummary: 'Express Regional Air Lane',
    labelAlign: 'left',
  },
  {
    id: 'au',
    code: 'AU',
    country: 'Australia',
    city: 'Sydney',
    direction: 'export',
    coords: [148.2093, -31.8688],
    isoIds: ['036'],
    serviceSummary: 'Air Export · Express / Economy',
    labelAlign: 'center',
  },
  {
    id: 'jp',
    code: 'JP',
    country: 'Japan',
    city: 'Tokyo',
    direction: 'export',
    coords: [139.6917, 35.6895],
    isoIds: ['392'],
    serviceSummary: 'East Asia Air Export',
    labelAlign: 'right',
  },
  {
    id: 'cn',
    code: 'CN',
    country: 'China',
    city: 'Guangzhou',
    direction: 'import',
    coords: [113.2644, 24.5],
    isoIds: ['156'],
    serviceSummary: 'Air Import · Duty-Paid Eligible',
    labelAlign: 'right',
  },
  {
    id: 'in',
    code: 'IN',
    country: 'India (Chennai Hub)',
    city: 'Chennai',
    direction: 'import',
    coords: [79.2, 16.5],
    isoIds: ['356'],
    serviceSummary: 'Own Chennai Warehouse · Air & Sea Freight',
    labelAlign: 'left',
  },
  {
    id: 'th',
    code: 'TH',
    country: 'Thailand',
    city: 'Bangkok',
    direction: 'import',
    coords: [100.5018, 14.5],
    isoIds: ['764'],
    serviceSummary: 'Scheduled Air Import',
    labelAlign: 'right',
  },
  {
    id: 'ae-imp',
    code: 'AE',
    country: 'UAE',
    city: 'Dubai',
    direction: 'import',
    coords: [54.4, 23.8],
    isoIds: ['784'],
    serviceSummary: 'Air Cargo Import · UAE to Sri Lanka',
    labelAlign: 'left',
  },
  {
    id: 'my',
    code: 'MY',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    direction: 'import',
    coords: [102.2, 3.8],
    isoIds: ['458'],
    serviceSummary: 'Air Cargo Import · Malaysia to Sri Lanka',
    labelAlign: 'right',
  },
];

function computeArc(x1: number, y1: number, x2: number, y2: number) {
  const dist = Math.hypot(x2 - x1, y2 - y1);
  const lift = Math.min(95, Math.max(28, dist * 0.28));
  const cx = (x1 + x2) / 2;
  const cy = Math.max(18, Math.min(y1, y2) - lift);
  const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;

  // Sample waypoints along the quadratic Bezier curve for smooth aircraft + flag flight animation
  const steps = 16;
  const xs: number[] = [];
  const ys: number[] = [];
  const angles: number[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const inv = 1 - t;
    const x = inv * inv * x1 + 2 * inv * t * cx + t * t * x2;
    const y = inv * inv * y1 + 2 * inv * t * cy + t * t * y2;
    const dx = 2 * inv * (cx - x1) + 2 * t * (x2 - cx);
    const dy = 2 * inv * (cy - y1) + 2 * t * (y2 - cy);
    xs.push(x);
    ys.push(y);
    angles.push((Math.atan2(dy, dx) * 180) / Math.PI);
  }

  return { d, xs, ys, angles };
}

export function GlobalRouteMap({ activeDirection = 'both' }: GlobalRouteMapProps) {
  const visibleCorridors = useMemo(
    () =>
      CORRIDORS.filter((c) => activeDirection === 'both' || c.direction === activeDirection),
    [activeDirection]
  );

  const [selectedId, setSelectedId] = useState<string>(visibleCorridors[0]?.id || 'gb');
  const [isPaused, setIsPaused] = useState(false);

  // Sync selected corridor if direction tab changes
  useEffect(() => {
    if (!visibleCorridors.some((c) => c.id === selectedId)) {
      setSelectedId(visibleCorridors[0]?.id || 'gb');
    }
  }, [visibleCorridors, selectedId]);

  // Smoothly cycle through corridors unless user focuses/hovers one
  useEffect(() => {
    if (isPaused || visibleCorridors.length <= 1) return;
    const timer = window.setInterval(() => {
      setSelectedId((prev) => {
        const idx = visibleCorridors.findIndex((c) => c.id === prev);
        const nextIdx = (idx + 1) % visibleCorridors.length;
        return visibleCorridors[nextIdx].id;
      });
    }, 3400);
    return () => window.clearInterval(timer);
  }, [isPaused, visibleCorridors]);

  const mapGeometry = useMemo(() => {
    const topo = worldAtlas as any;
    const geojson = feature(topo, topo.objects.countries) as any;
    const countries = (geojson.features || []).filter(
      (f: any) => String(f.id) !== '010' && String(f.id) !== '10'
    );

    const collection = { type: 'FeatureCollection', features: countries } as any;
    const projection = geoNaturalEarth1().fitExtent(
      [
        [10, 12],
        [830, 398],
      ],
      collection
    );
    const pathGenerator = geoPath(projection);
    const graticulePath = pathGenerator(geoGraticule10()) || '';

    const countryPaths: Array<{ id: string; d: string }> = countries.map(
      (c: any, idx: number) => ({
        id: String(c.id ?? idx),
        d: pathGenerator(c) || '',
      })
    );

    const hubPoint = projection(HUB_COORDS) || [585, 220];

    const projectedCorridors = CORRIDORS.map((node) => {
      const pt = projection(node.coords) || [400, 150];
      const start = node.direction === 'export' ? hubPoint : pt;
      const end = node.direction === 'export' ? pt : hubPoint;
      const arc = computeArc(start[0], start[1], end[0], end[1]);
      return {
        ...node,
        x: pt[0],
        y: pt[1],
        arc,
      };
    });

    return { graticulePath, countryPaths, hubPoint, projectedCorridors };
  }, []);

  const activeCorridor =
    mapGeometry.projectedCorridors.find((c) => c.id === selectedId) ||
    mapGeometry.projectedCorridors.find((c) =>
      visibleCorridors.some((v) => v.id === c.id)
    ) ||
    mapGeometry.projectedCorridors[0];

  const activeCountryIsoSet = new Set([
    HUB_ISO_ID,
    ...(activeCorridor?.isoIds || []),
  ]);

  const isImportActive = activeCorridor?.direction === 'import';

  return (
    <div
      className="relative w-full bg-[#0D0F12] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Map Header Bar */}
      <div className="px-5 pt-4 pb-3 border-b border-neutral-800/90 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#D4AF37]">
            Live Trade Corridors · 150+ Countries
          </p>
          <p className="text-sm font-semibold text-white mt-0.5">
            Global Export Network &amp; Asia Import Lanes
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-neutral-300">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#E11D2E] inline-block" />
            <span>Export</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#D4AF37] inline-block" />
            <span>Import</span>
          </span>
        </div>
      </div>

      {/* Real Natural-Earth Vector World Map */}
      <div className="relative bg-[#0B0D10] px-2 pt-2">
        <svg
          viewBox="0 0 840 410"
          role="img"
          aria-label="Real world map displaying international courier export and import air cargo corridors connected to Sri Lanka"
          className="w-full h-auto block select-none"
        >
          {/* Lat/Long Graticule */}
          <path
            d={mapGeometry.graticulePath}
            fill="none"
            stroke="#1B2028"
            strokeWidth="0.6"
            strokeDasharray="2 3"
          />

          {/* Countries Layer */}
          <g>
            {mapGeometry.countryPaths.map((country) => {
              const isHub = country.id === HUB_ISO_ID;
              const isHighlighted = activeCountryIsoSet.has(country.id);
              const fill = isHub
                ? '#B5121B'
                : isHighlighted
                ? isImportActive
                  ? '#8A6D1C'
                  : '#7A1620'
                : '#1A1F26';
              const stroke = isHighlighted ? '#E5E7EB' : '#2A313C';

              return (
                <path
                  key={country.id}
                  d={country.d}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isHighlighted ? 0.85 : 0.45}
                  className="transition-colors duration-300"
                />
              );
            })}
          </g>

          {/* Corridor Arcs */}
          <g>
            {mapGeometry.projectedCorridors
              .filter(
                (node) =>
                  activeDirection === 'both' || node.direction === activeDirection
              )
              .map((node) => {
                const isActive = node.id === activeCorridor?.id;
                const strokeColor =
                  node.direction === 'export' ? '#E11D2E' : '#D4AF37';

                return (
                  <g key={node.id}>
                    <path
                      d={node.arc.d}
                      fill="none"
                      stroke={strokeColor}
                      strokeOpacity={isActive ? 0.95 : 0.25}
                      strokeWidth={isActive ? 2.1 : 1.05}
                      strokeDasharray={node.direction === 'export' ? '5 4' : undefined}
                      className="transition-opacity duration-300"
                    />
                  </g>
                );
              })}
          </g>

          {/* Animated Moving Plane + Flag Indicator Along Active Route */}
          {activeCorridor && (
            <motion.g
              key={activeCorridor.id}
              initial={{
                x: activeCorridor.arc.xs[0],
                y: activeCorridor.arc.ys[0],
                opacity: 0,
              }}
              animate={{
                x: activeCorridor.arc.xs,
                y: activeCorridor.arc.ys,
                opacity: [0, 1, 1, 1, 0.9],
              }}
              transition={{
                duration: 2.8,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.4,
              }}
            >
              {/* Moving Country Flag Card attached to flight */}
              <g transform="translate(-14, -22)">
                <rect
                  x="0"
                  y="0"
                  width="28"
                  height="16"
                  rx="3"
                  fill="#111111"
                  stroke={isImportActive ? '#D4AF37' : '#FFFFFF'}
                  strokeWidth="1"
                />
                <foreignObject x="2" y="1.5" width="24" height="13">
                  <div className="w-full h-full flex items-center justify-center">
                    <CountryFlag
                      code={activeCorridor.code}
                      className="w-5 h-3 rounded-[1.5px]"
                    />
                  </div>
                </foreignObject>
              </g>

              {/* Flight Beacon & Plane Glyph */}
              <circle
                r="7.5"
                fill={isImportActive ? '#D4AF37' : '#B5121B'}
                fillOpacity="0.28"
              />
              <circle
                r="4"
                fill={isImportActive ? '#D4AF37' : '#FFFFFF'}
                stroke={isImportActive ? '#111111' : '#B5121B'}
                strokeWidth="1.5"
              />
            </motion.g>
          )}

          {/* Destination / Origin Pins with Crisp Country Flags */}
          {mapGeometry.projectedCorridors
            .filter(
              (node) =>
                (activeDirection === 'both' || node.direction === activeDirection) &&
                !(activeDirection === 'both' && node.id === 'ae-imp')
            )
            .map((node) => {
              const isActive = node.id === activeCorridor?.id;
              const accent =
                node.direction === 'export' ? '#B5121B' : '#D4AF37';

              return (
                <g
                  key={`pin-${node.id}`}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setSelectedId(node.id)}
                  onMouseEnter={() => setSelectedId(node.id)}
                  className="cursor-pointer"
                >
                  <circle
                    r={isActive ? 11 : 7}
                    fill={accent}
                    fillOpacity={isActive ? 0.25 : 0.12}
                  />
                  <circle
                    r={isActive ? 4.2 : 3}
                    fill={isActive ? '#FFFFFF' : '#E5E7EB'}
                    stroke={accent}
                    strokeWidth="1.6"
                  />

                  {/* Small Flag Badge beside node */}
                  <foreignObject
                    x={node.labelAlign === 'right' ? 7 : node.labelAlign === 'left' ? -29 : -11}
                    y={-18}
                    width="22"
                    height="15"
                  >
                    <div className="flex items-center justify-center">
                      <CountryFlag
                        code={node.code}
                        className={`w-[18px] h-[12px] rounded-[2px] transition-transform duration-200 ${
                          isActive ? 'scale-110 ring-1 ring-white' : 'opacity-90'
                        }`}
                      />
                    </div>
                  </foreignObject>
                </g>
              );
            })}

          {/* Sri Lanka Hub Pin */}
          <g
            transform={`translate(${mapGeometry.hubPoint[0]}, ${mapGeometry.hubPoint[1]})`}
          >
            <circle r="13" fill="#B5121B" fillOpacity="0.3" />
            <circle r="6" fill="#B5121B" stroke="#FFFFFF" strokeWidth="1.8" />
            <foreignObject x="-42" y="10" width="84" height="22">
              <div className="flex items-center justify-center gap-1 bg-[#111111]/95 border border-neutral-700 rounded px-1.5 py-0.5 text-[9.5px] font-bold text-white shadow">
                <CountryFlag code="LK" className="w-3.5 h-2.5 rounded-[1px]" />
                <span>CMB HUB</span>
              </div>
            </foreignObject>
          </g>
        </svg>
      </div>

      {/* Live Moving Route Strip + Interactive Country Flag Selectors */}
      <div className="px-5 py-3.5 bg-[#121418] border-t border-neutral-800 space-y-3">
        {activeCorridor && (
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-white font-semibold">
              <CountryFlag
                code={activeCorridor.direction === 'export' ? 'LK' : activeCorridor.code}
                className="w-5 h-3.5 rounded-[2px]"
              />
              <span>
                {activeCorridor.direction === 'export'
                  ? 'Sri Lanka'
                  : activeCorridor.country}
              </span>
              <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
              <ArrowRight className="w-3 h-3 text-neutral-500" />
              <CountryFlag
                code={activeCorridor.direction === 'export' ? activeCorridor.code : 'LK'}
                className="w-5 h-3.5 rounded-[2px]"
              />
              <span>
                {activeCorridor.direction === 'export'
                  ? `${activeCorridor.city}, ${activeCorridor.country}`
                  : 'Wattala, Sri Lanka'}
              </span>
            </div>

            <span className="text-[11px] font-medium text-neutral-300 tabular-nums">
              {activeCorridor.serviceSummary}
            </span>
          </div>
        )}

        {/* Clickable Country Flag Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {visibleCorridors.map((node) => {
            const active = node.id === activeCorridor?.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-white text-[#111111]'
                    : 'bg-[#1B1E24] text-neutral-300 hover:bg-[#252A33] hover:text-white'
                }`}
              >
                <CountryFlag code={node.code} className="w-4 h-2.5 rounded-[1.5px]" />
                <span>{node.country}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
