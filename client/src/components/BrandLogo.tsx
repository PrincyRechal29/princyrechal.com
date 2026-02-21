type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export default function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`.trim()}>
      <svg
        aria-hidden="true"
        width={compact ? 34 : 42}
        height={compact ? 34 : 42}
        viewBox="0 0 64 64"
        fill="none"
      >
        <defs>
          <linearGradient id="brandCore" x1="6" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0E2C66" />
            <stop offset="0.5" stopColor="#1D78C4" />
            <stop offset="1" stopColor="#12A3A3" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="54" height="54" rx="16" fill="url(#brandCore)" />
        <path
          d="M21 43V21h12.2c7.1 0 11.2 4 11.2 10.3 0 6.7-4.3 11.7-12.4 11.7H21Zm7.4-6h3.2c3.7 0 5.5-2 5.5-5.6 0-3.2-1.8-4.8-5.1-4.8h-3.6V37Z"
          fill="white"
        />
        <path d="M41 43V21h7.4v7.6l5.9-7.6H63l-8.8 10.5L63 43h-8.8l-5.8-8.1V43H41Z" fill="white" />
      </svg>
      {!compact && (
        <span>
          <span className="block text-[0.7rem] font-mono uppercase tracking-[0.18em] text-[#4b628a]">Princy Rechal</span>
          <span className="block text-sm font-semibold text-[#203252]">Cloud Systems Engineer</span>
        </span>
      )}
    </span>
  );
}
