import React from 'react';

interface DiagonalRibbonProps {
  items: string[];
  theme?: 'white' | 'dark';
  rotation?: number; // degrees, e.g. -7, -14, -17, -3.5
  direction?: 'left' | 'right';
  cornerBadge?: string;
  className?: string;
  speed?: 'normal' | 'slow';
  scale?: number;
}

export const DiagonalRibbon: React.FC<DiagonalRibbonProps> = ({
  items,
  theme = 'white',
  rotation = -7,
  direction = 'left',
  cornerBadge,
  className = '',
  speed = 'normal',
  scale = 1.08,
}) => {
  // Repeat items so the ticker loop is seamless
  const repeatedItems = [...items, ...items, ...items, ...items];

  const isWhite = theme === 'white';
  const animationClass = direction === 'left' ? 'animate-ticker-left' : 'animate-ticker-right';

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none py-2 sm:py-3 ${className}`}
      style={{ zIndex: 20 }}
    >
      <div
        className="w-[180vw] -ml-[40vw] flex flex-col shadow-2xl transition-transform duration-300"
        style={{
          transform: `rotate(${rotation}deg) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <div
          className={`relative py-3 sm:py-4 px-6 shadow-2xl flex items-center overflow-hidden border-y ${
            isWhite
              ? 'bg-white text-black border-white'
              : 'bg-[#121212] text-white border-neutral-800'
          }`}
        >
          {/* Continuous Ticker flex container */}
          <div className={`flex whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl font-black tracking-widest uppercase ${animationClass}`}>
            <span className="inline-flex items-center">
              {repeatedItems.map((item, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span className="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#FF5C00] mx-3 sm:mx-5 shadow-[0_0_6px_rgba(255,92,0,0.6)]"></span>
                  <span className={isWhite ? 'text-black' : 'text-neutral-100'}>{item}</span>
                </span>
              ))}
            </span>
          </div>

          {/* Optional Corner Category Pill */}
          {cornerBadge && (
            <div
              className={`absolute right-12 sm:right-24 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-sm uppercase pointer-events-auto ${
                isWhite ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <span>{cornerBadge}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
