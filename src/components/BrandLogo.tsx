import officialLogo from '../assets/brand/cmb-xpress-logo.png';
import { companyConfig } from '../config/companyConfig';

export type BrandLogoVariant = 'header' | 'mobile' | 'footer' | 'about' | 'contact';

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  onDarkBackground?: boolean;
  className?: string;
}

const variantSizeClasses: Record<BrandLogoVariant, string> = {
  header: 'h-11 sm:h-12 w-auto',
  mobile: 'h-9 w-auto',
  footer: 'h-14 w-auto',
  about: 'h-20 sm:h-24 w-auto',
  contact: 'h-14 sm:h-16 w-auto',
};

export function BrandLogo({
  variant = 'header',
  onDarkBackground = false,
  className = '',
}: BrandLogoProps) {
  const imgElement = (
    <img
      src={officialLogo}
      alt={`${companyConfig.companyName} — ${companyConfig.tagline}`}
      className={`${variantSizeClasses[variant]} max-w-full object-contain select-none block`}
      draggable={false}
    />
  );

  if (onDarkBackground) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-white rounded-lg px-4 py-2.5 shadow-sm ${className}`}
      >
        {imgElement}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center bg-white rounded-md ${className}`}>
      {imgElement}
    </div>
  );
}
