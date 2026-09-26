import React from 'react';
import brandLogoOfficial from '../assets/images/brand_logo_official_1790399532396.jpg';
import brandLogoTransparent from '../assets/images/brand_logo_transparent.png';
import brandLogoTrimmed from '../assets/images/brand_logo_trimmed.png';
import brandLogoIcon from '../assets/images/brand_logo_icon.png';

export interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'horizontal' | 'mark';
  theme?: 'light' | 'dark';
  showSubtitle?: boolean;
}

/**
 * Official Brand Logo Image Component
 * Directly renders the official 3D brand logo for S & L Financial Associate:
 * - 3D metallic golden-orange curved swoosh arc
 * - 3D glossy metallic blue 'S' with beveled grooves
 * - 3D metallic golden-orange '&'
 * - 3D glossy metallic blue 'L'
 * - 'Financial Associate' typography underneath with subtle mirror floor reflection
 */
export const OfficialLogoSvg: React.FC<{
  className?: string;
  withReflection?: boolean;
  withText?: boolean;
  aspect?: 'landscape' | 'mark';
}> = ({
  className = '',
  aspect = 'landscape',
}) => {
  if (aspect === 'mark') {
    return (
      <img
        src={brandLogoIcon}
        alt="S & L Financial Associate Logo Mark"
        className={`w-full h-full object-contain ${className}`}
        loading="eager"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <img
      src={brandLogoTrimmed}
      alt="S & L Financial Associate Official Logo"
      className={`w-full h-full object-contain ${className}`}
      loading="eager"
      referrerPolicy="no-referrer"
    />
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  theme = 'light',
  showSubtitle = true,
}) => {
  const isDark = theme === 'dark';

  // Dimension presets for Navbar, Hero, and Footer
  const dimensions = {
    sm: {
      imgHeight: 'h-10 sm:h-11',
      title: 'text-sm font-bold',
      sub: 'text-[10px]',
    },
    md: {
      imgHeight: 'h-13 sm:h-16',
      title: 'text-base sm:text-lg font-black',
      sub: 'text-xs',
    },
    lg: {
      imgHeight: 'h-16 sm:h-20',
      title: 'text-xl sm:text-2xl font-black',
      sub: 'text-xs sm:text-sm',
    },
    xl: {
      imgHeight: 'h-24 sm:h-32',
      title: 'text-2xl sm:text-3xl font-black',
      sub: 'text-sm sm:text-base',
    },
  };

  const currentSize = dimensions[size] || dimensions.md;

  // Variant "full": The complete official 3D logo showcase card
  if (variant === 'full') {
    return (
      <div
        className={`inline-flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white shadow-lg border border-slate-200/90 transition-all duration-300 hover:shadow-xl ${className}`}
      >
        <img
          src={brandLogoTrimmed}
          alt="S & L Financial Associate Logo"
          className={`${currentSize.imgHeight} w-auto object-contain`}
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Variant "mark": Just the emblem/icon
  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={brandLogoIcon}
          alt="S & L Emblem"
          className={`${currentSize.imgHeight} aspect-square object-contain`}
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Variant "horizontal" (Default for Header Navbar & Footer)
  if (isDark) {
    return (
      <div className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
        {/* Crisp badge for dark background */}
        <div className="flex items-center bg-white/95 px-3 py-1.5 rounded-xl shadow-md border border-slate-700/60 transition-transform duration-300 group-hover:scale-103">
          <img
            src={brandLogoTransparent}
            alt="S & L Financial Associate Logo"
            className={`${currentSize.imgHeight} w-auto object-contain max-w-[200px]`}
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="hidden sm:flex flex-col justify-center">
          <span
            className={`tracking-tight leading-tight text-white transition-colors group-hover:text-amber-400 ${currentSize.title}`}
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            S & L Financial Associates
          </span>
          {showSubtitle && (
            <span className={`font-semibold tracking-wide text-amber-400 ${currentSize.sub}`}>
              Bangalore · Premier Loan Solutions
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default light theme (Navbar)
  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Official 3D Logo on white header */}
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-102 flex items-center">
        <img
          src={brandLogoTransparent}
          alt="S & L Financial Associate Logo"
          className={`${currentSize.imgHeight} w-auto object-contain max-w-[220px]`}
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Accompanying clean company typography */}
      <div className="hidden sm:flex flex-col justify-center">
        <span
          className={`tracking-tight leading-tight text-slate-900 transition-colors group-hover:text-blue-900 ${currentSize.title}`}
          style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          S & L Financial Associates
        </span>
        {showSubtitle && (
          <span className={`font-semibold tracking-wide text-orange-600 ${currentSize.sub}`}>
            Bangalore · Premier Loan Solutions
          </span>
        )}
      </div>
    </div>
  );
};
