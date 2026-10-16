import React from 'react';
import { CAFE_METRICS, HERO_FEATURED } from '../data/cafeData';
import { Language, ScreenType } from '../types';

interface HeroSectionProps {
  language: Language;
  onNavigate: (screen: ScreenType) => void;
  onAddToCart: (item: { id: string; nameHy: string; nameEn: string; price: number; type: 'pairing'; image?: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onNavigate,
  onAddToCart,
}) => {
  const handleOrderSpecial = () => {
    onAddToCart({
      id: 'special-hero-combo',
      nameHy: HERO_FEATURED.titleHy,
      nameEn: HERO_FEATURED.titleEn,
      price: HERO_FEATURED.price,
      type: 'pairing',
      image: HERO_FEATURED.image
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest">
      {/* Background atmosphere radial lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(183,205,172,0.18),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(242,188,135,0.12),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-gutter py-space-2xl lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs bg-surface-container-high border border-outline-variant/30 text-secondary">
              <span className="w-2 h-2 rounded-none bg-secondary animate-pulse" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                {language === 'hy'
                  ? 'Թարմ թխված ամեն առավոտ • 100% Սպեցիալթի Արաբիկա'
                  : 'Freshly Baked Every Morning • 100% Specialty Arabica'}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display-lg text-display-lg text-on-surface uppercase tracking-tight leading-tight">
              {language === 'hy' ? (
                <>
                  Արհեստավարժ <span className="text-secondary italic font-normal">Փքաբլիթներ</span> և Հատընտիր <span className="text-primary">Սուրճ</span>
                </>
              ) : (
                <>
                  Artisanal <span className="text-secondary italic font-normal">Brioche Donuts</span> &amp; Specialty <span className="text-primary">Coffee</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {language === 'hy'
                ? 'Մենք համադրում ենք բնական բաղադրիչներով պատրաստված փափուկ բրիոշ փքաբլիթները և թարմ բոված սպեցիալթի սուրճի անկրկնելի նոտաները: Յուրաքանչյուր առավոտ մենք կյանքի ենք կոչում ճաշակի իսկական արվեստը Երևանի սրտում:'
                : 'We pair slow-fermented, melt-in-mouth French brioche donuts with the nuanced clarity of freshly roasted single-origin coffees. Every single morning, craftsmanship comes alive in the heart of Yerevan.'}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <button
                onClick={() => onNavigate('menu')}
                className="px-space-xl py-space-md bg-primary-container text-on-surface font-label-lg text-label-lg uppercase tracking-wider hover:bg-inverse-primary transition-all duration-200 border border-primary-container inline-flex items-center gap-space-sm group cursor-pointer"
              >
                <span>{language === 'hy' ? 'Դիտել Ամբողջ Մենյուն' : 'View Full Menu'}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              <button
                onClick={() => onNavigate('specialty')}
                className="px-space-xl py-space-md bg-transparent text-tertiary-fixed hover:text-on-surface font-label-lg text-label-lg uppercase tracking-wider border border-outline-variant/60 hover:border-secondary transition-all duration-200 cursor-pointer"
              >
                {language === 'hy' ? 'Մեր Տարածաշրջանային Հատիկները' : 'Our Single Origins'}
              </button>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 gap-space-md pt-space-xl border-t border-outline-variant/30 mt-space-md">
              {CAFE_METRICS.map((metric, idx) => (
                <div key={idx}>
                  <span className="font-headline-md text-headline-md text-secondary block font-bold">
                    {metric.value}
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary block mt-0.5">
                    {language === 'hy' ? metric.labelHy : metric.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Specimen Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-surface-container border border-outline-variant/30 p-space-sm">
              <div 
                className="aspect-[4/5] w-full overflow-hidden relative cursor-pointer group"
                onClick={handleOrderSpecial}
                title={language === 'hy' ? 'Սեղմեք ավելացնելու համար' : 'Click to add to cart'}
              >
                <img
                  src={HERO_FEATURED.image}
                  alt="Artisanal glazed brioche donut dusted with sea salt flakes and roasted pistachio beside fresh pour-over coffee"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-space-md bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
                        {language === 'hy' ? HERO_FEATURED.tagHy : HERO_FEATURED.tagEn}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        {language === 'hy' ? HERO_FEATURED.titleHy : HERO_FEATURED.titleEn}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold block tabular-nums">
                        {HERO_FEATURED.price.toLocaleString()} ֏
                      </span>
                      <span className="text-[11px] text-tertiary uppercase font-label-sm tracking-wider flex items-center justify-end gap-1 mt-0.5 text-secondary">
                        <span className="material-symbols-outlined text-[13px]">add_shopping_cart</span>
                        {language === 'hy' ? 'Ավելացնել' : 'Add to cart'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limited Batch Label */}
              <div className="absolute -top-4 -right-4 bg-secondary-container text-on-secondary-container px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider border border-secondary/30 hidden sm:block">
                {language === 'hy' ? HERO_FEATURED.badgeHy : HERO_FEATURED.badgeEn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
