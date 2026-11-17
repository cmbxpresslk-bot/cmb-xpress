import { useId } from 'react';

export type CountryCode =
  | 'LK'
  | 'GB'
  | 'US'
  | 'CA'
  | 'EU'
  | 'AU'
  | 'NZ'
  | 'JP'
  | 'KR'
  | 'AE'
  | 'CN'
  | 'TH'
  | 'IN'
  | 'MY';

interface CountryFlagProps {
  code: CountryCode;
  className?: string;
  title?: string;
}

export function getCountryCodeFromName(name: string): CountryCode | null {
  const n = name.toLowerCase();
  if (n.includes('sri lanka') || n.includes('cmb')) return 'LK';
  if (n.includes('united kingdom') || n.includes('uk') || n.includes('london')) return 'GB';
  if (n.includes('united states') || n.includes('usa') || n.includes('new york')) return 'US';
  if (n.includes('canada') || n.includes('toronto')) return 'CA';
  if (n.includes('europe') || n.includes('eu') || n.includes('frankfurt')) return 'EU';
  if (n.includes('australia') || n.includes('sydney')) return 'AU';
  if (n.includes('new zealand') || n.includes('auckland')) return 'NZ';
  if (n.includes('japan') || n.includes('tokyo')) return 'JP';
  if (n.includes('south korea') || n.includes('korea') || n.includes('seoul')) return 'KR';
  if (n.includes('middle east') || n.includes('uae') || n.includes('dubai')) return 'AE';
  if (n.includes('china') || n.includes('guangzhou')) return 'CN';
  if (n.includes('thailand') || n.includes('bangkok')) return 'TH';
  if (n.includes('india') || n.includes('chennai')) return 'IN';
  if (n.includes('malaysia') || n.includes('kuala lumpur')) return 'MY';
  return null;
}

export function CountryFlag({ code, className = 'w-6 h-4 rounded-[2px]', title }: CountryFlagProps) {
  const uid = useId();
  const clipId = `flag-clip-${code}-${uid}`;

  return (
    <svg
      viewBox="0 0 30 20"
      className={`inline-block shrink-0 shadow-[0_0_0_1px_rgba(0,0,0,0.12)] ${className}`}
      role="img"
      aria-label={title || `${code} flag`}
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="30" height="20" rx="2" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        {code === 'LK' && (
          <>
            <rect width="30" height="20" fill="#FFBE29" />
            <rect x="1.5" y="1.5" width="4" height="17" fill="#00534E" />
            <rect x="5.5" y="1.5" width="4" height="17" fill="#EB7400" />
            <rect x="11" y="1.5" width="17.5" height="17" fill="#8D153A" />
            <circle cx="19.7" cy="10" r="3.4" fill="#FFBE29" />
          </>
        )}

        {code === 'GB' && (
          <>
            <rect width="30" height="20" fill="#012169" />
            <path d="M0 0 L30 20 M30 0 L0 20" stroke="#FFFFFF" strokeWidth="3.6" />
            <path d="M0 0 L30 20 M30 0 L0 20" stroke="#C8102E" strokeWidth="1.8" />
            <path d="M15 0 V20 M0 10 H30" stroke="#FFFFFF" strokeWidth="5.4" />
            <path d="M15 0 V20 M0 10 H30" stroke="#C8102E" strokeWidth="3.2" />
          </>
        )}

        {code === 'US' && (
          <>
            <rect width="30" height="20" fill="#FFFFFF" />
            {[0, 2, 4, 6, 8, 10, 12].map((i) => (
              <rect
                key={i}
                y={(i * 20) / 13}
                width="30"
                height={20 / 13 + 0.1}
                fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
              />
            ))}
            <rect width="13.5" height={20 * (7 / 13)} fill="#3C3B6E" />
            <g fill="#FFFFFF">
              <circle cx="3" cy="2.6" r="0.7" />
              <circle cx="6.7" cy="2.6" r="0.7" />
              <circle cx="10.4" cy="2.6" r="0.7" />
              <circle cx="4.8" cy="5.2" r="0.7" />
              <circle cx="8.6" cy="5.2" r="0.7" />
              <circle cx="3" cy="7.8" r="0.7" />
              <circle cx="6.7" cy="7.8" r="0.7" />
              <circle cx="10.4" cy="7.8" r="0.7" />
            </g>
          </>
        )}

        {code === 'CA' && (
          <>
            <rect width="30" height="20" fill="#FFFFFF" />
            <rect width="7.5" height="20" fill="#D80621" />
            <rect x="22.5" width="7.5" height="20" fill="#D80621" />
            <path
              d="M15 4.2 L16.2 7.2 L19.2 6.8 L17.6 9.5 L19.6 10.7 L17 12.2 L17.3 14.1 L15.4 13.7 L15.4 16.3 H14.6 L14.6 13.7 L12.7 14.1 L13 12.2 L10.4 10.7 L12.4 9.5 L10.8 6.8 L13.8 7.2 Z"
              fill="#D80621"
            />
          </>
        )}

        {code === 'EU' && (
          <>
            <rect width="30" height="20" fill="#003399" />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => {
              const angle = (idx * Math.PI * 2) / 12;
              const cx = 15 + Math.cos(angle) * 5.8;
              const cy = 10 + Math.sin(angle) * 5.8;
              return <circle key={idx} cx={cx} cy={cy} r="0.85" fill="#FFCC00" />;
            })}
          </>
        )}

        {code === 'AU' && (
          <>
            <rect width="30" height="20" fill="#00008B" />
            <rect width="14" height="10" fill="#012169" />
            <path d="M0 0 L14 10 M14 0 L0 10" stroke="#FFFFFF" strokeWidth="1.9" />
            <path d="M0 0 L14 10 M14 0 L0 10" stroke="#C8102E" strokeWidth="0.95" />
            <path d="M7 0 V10 M0 5 H14" stroke="#FFFFFF" strokeWidth="2.8" />
            <path d="M7 0 V10 M0 5 H14" stroke="#C8102E" strokeWidth="1.6" />
            <circle cx="7" cy="14.5" r="1.7" fill="#FFFFFF" />
            <circle cx="22.5" cy="5.5" r="1" fill="#FFFFFF" />
            <circle cx="25.5" cy="9.5" r="0.9" fill="#FFFFFF" />
            <circle cx="20.5" cy="10.8" r="0.9" fill="#FFFFFF" />
            <circle cx="22.5" cy="15.2" r="1.1" fill="#FFFFFF" />
          </>
        )}

        {code === 'NZ' && (
          <>
            <rect width="30" height="20" fill="#00247D" />
            <rect width="14" height="10" fill="#012169" />
            <path d="M0 0 L14 10 M14 0 L0 10" stroke="#FFFFFF" strokeWidth="1.9" />
            <path d="M0 0 L14 10 M14 0 L0 10" stroke="#C8102E" strokeWidth="0.95" />
            <path d="M7 0 V10 M0 5 H14" stroke="#FFFFFF" strokeWidth="2.8" />
            <path d="M7 0 V10 M0 5 H14" stroke="#C8102E" strokeWidth="1.6" />
            <circle cx="22.5" cy="5" r="1.15" fill="#CC142B" stroke="#FFFFFF" strokeWidth="0.5" />
            <circle cx="26" cy="9" r="1.05" fill="#CC142B" stroke="#FFFFFF" strokeWidth="0.5" />
            <circle cx="19.8" cy="10" r="1.05" fill="#CC142B" stroke="#FFFFFF" strokeWidth="0.5" />
            <circle cx="22.5" cy="15.2" r="1.25" fill="#CC142B" stroke="#FFFFFF" strokeWidth="0.5" />
          </>
        )}

        {code === 'JP' && (
          <>
            <rect width="30" height="20" fill="#FFFFFF" />
            <circle cx="15" cy="10" r="5.5" fill="#BC002D" />
          </>
        )}

        {code === 'KR' && (
          <>
            <rect width="30" height="20" fill="#FFFFFF" />
            <circle cx="15" cy="10" r="4.8" fill="#0047A0" />
            <path d="M10.2 10 A4.8 4.8 0 0 1 19.8 10 A2.4 2.4 0 0 1 15 10 A2.4 2.4 0 0 0 10.2 10 Z" fill="#CD2E3A" />
            <g stroke="#111111" strokeWidth="1.2">
              <line x1="5" y1="4.5" x2="8" y2="3" />
              <line x1="5.8" y1="6.3" x2="8.8" y2="4.8" />
              <line x1="22" y1="3" x2="25" y2="4.5" />
              <line x1="21.2" y1="4.8" x2="24.2" y2="6.3" />
              <line x1="5" y1="15.5" x2="8" y2="17" />
              <line x1="22" y1="17" x2="25" y2="15.5" />
            </g>
          </>
        )}

        {code === 'AE' && (
          <>
            <rect width="30" height="6.7" fill="#00732F" />
            <rect y="6.7" width="30" height="6.6" fill="#FFFFFF" />
            <rect y="13.3" width="30" height="6.7" fill="#000000" />
            <rect width="7.8" height="20" fill="#FF0000" />
          </>
        )}

        {code === 'CN' && (
          <>
            <rect width="30" height="20" fill="#DE2910" />
            <circle cx="6.2" cy="5.8" r="2.2" fill="#FFDE00" />
            <circle cx="10.2" cy="3.1" r="0.7" fill="#FFDE00" />
            <circle cx="11.5" cy="5.2" r="0.7" fill="#FFDE00" />
            <circle cx="11.4" cy="7.7" r="0.7" fill="#FFDE00" />
            <circle cx="9.8" cy="9.4" r="0.7" fill="#FFDE00" />
          </>
        )}

        {code === 'TH' && (
          <>
            <rect width="30" height="3.3" fill="#A51931" />
            <rect y="3.3" width="30" height="3.3" fill="#F4F5F8" />
            <rect y="6.6" width="30" height="6.8" fill="#2D2A4A" />
            <rect y="13.4" width="30" height="3.3" fill="#F4F5F8" />
            <rect y="16.7" width="30" height="3.3" fill="#A51931" />
          </>
        )}

        {code === 'IN' && (
          <>
            <rect width="30" height="6.67" fill="#FF9933" />
            <rect y="6.67" width="30" height="6.66" fill="#FFFFFF" />
            <rect y="13.33" width="30" height="6.67" fill="#138808" />
            <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth="0.7" />
            <circle cx="15" cy="10" r="0.6" fill="#000080" />
          </>
        )}

        {code === 'MY' && (
          <>
            <rect width="30" height="20" fill="#FFFFFF" />
            {[0, 2, 4, 6, 8, 10, 12].map((i) => (
              <rect
                key={i}
                y={(i * 20) / 14}
                width="30"
                height={20 / 14 + 0.05}
                fill="#CC0001"
              />
            ))}
            <rect width="15" height={20 * (8 / 14)} fill="#010066" />
            <circle cx="6.2" cy="5.7" r="3.1" fill="#FFCC00" />
            <circle cx="7.3" cy="5.7" r="2.5" fill="#010066" />
            <circle cx="10.2" cy="5.7" r="1.7" fill="#FFCC00" />
          </>
        )}
      </g>
    </svg>
  );
}
