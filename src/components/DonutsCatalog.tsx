import React, { useState } from 'react';
import { DONUTS_DATA } from '../data/cafeData';
import { DonutCategory, DonutItem, Language } from '../types';

interface DonutsCatalogProps {
  language: Language;
  onAddToCart: (item: { id: string; nameHy: string; nameEn: string; price: number; type: 'donut'; image?: string }) => void;
  onSelectDonut: (item: DonutItem) => void;
}

export const DonutsCatalog: React.FC<DonutsCatalogProps> = ({
  language,
  onAddToCart,
  onSelectDonut,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<DonutCategory>('all');

  const filterTabs: { id: DonutCategory; labelHy: string; labelEn: string; count: number }[] = [
    { id: 'all', labelHy: `Բոլորը (${DONUTS_DATA.length})`, labelEn: `All (${DONUTS_DATA.length})`, count: DONUTS_DATA.length },
    { id: 'glaze', labelHy: 'Կլասիկ Գլազուր', labelEn: 'Classic Glaze', count: DONUTS_DATA.filter(d => d.category === 'glaze').length },
    { id: 'cream', labelHy: 'Կրեմային Միջուկով', labelEn: 'Filled Cream', count: DONUTS_DATA.filter(d => d.category === 'cream').length },
    { id: 'seasonal', labelHy: 'Սեզոնային Բացառիկ', labelEn: 'Seasonal Batch', count: DONUTS_DATA.filter(d => d.category === 'seasonal').length },
  ];

  const filteredDonuts = selectedFilter === 'all'
    ? DONUTS_DATA
    : DONUTS_DATA.filter(d => d.category === selectedFilter);

  return (
    <section className="w-full bg-surface py-space-2xl border-t border-outline-variant/20" id="donuts-catalog">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs text-primary mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">bakery_dining</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                {language === 'hy' ? 'Արհեստանոցի Բաղադրատոմսեր' : 'Artisanal Bakery Recipes'}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              {language === 'hy' ? 'Մեր Հեղինակային Փքաբլիթները' : 'Our Signature Brioche Donuts'}
            </h2>
            <p className="font-body-md text-body-md text-tertiary max-w-xl mt-space-xs">
              {language === 'hy'
                ? 'Ֆրանսիական կարագով հարուստ բրիոշ խմոր, որը հասունանում է 48 ժամ՝ ստանալով անհավանական թեթև, օդեղեն կառուցվածք:'
                : 'French butter-enriched brioche dough, slow-fermented for 48 hours for an airy, cloud-like texture and pure flavor.'}
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-space-xs">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-space-md py-space-xs font-label-md text-label-md uppercase transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-primary-container text-on-surface border border-primary-container font-bold'
                      : 'bg-surface-container text-tertiary border border-outline-variant/30 hover:text-on-surface'
                  }`}
                >
                  {language === 'hy' ? tab.labelHy : tab.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Donuts 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {filteredDonuts.map((donut) => (
            <div
              key={donut.id}
              className="bg-surface-container-low border border-outline-variant/30 flex flex-col group hover:border-primary transition-colors cursor-pointer"
              onClick={() => onSelectDonut(donut)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img
                  src={donut.image}
                  alt={donut.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-surface-container-highest/90 backdrop-blur px-space-xs py-0.5 text-secondary font-label-sm text-label-sm border border-outline-variant/20 uppercase">
                  {language === 'hy' ? donut.badgeHy : donut.badgeEn}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                <div>
                  <div className="flex items-center justify-between text-secondary mb-1">
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-label-sm text-label-sm tabular-nums">
                        {donut.rating} ({donut.reviewsCount})
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline">
                      {language === 'hy' ? `Կոդ՝ ${donut.code}` : `Code: ${donut.code}`}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                    {language === 'hy' ? donut.nameHy : donut.nameEn}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs line-clamp-2">
                    {language === 'hy' ? donut.descriptionHy : donut.descriptionEn}
                  </p>
                </div>

                {/* Card Action Strip */}
                <div 
                  className="pt-space-sm border-t border-outline-variant/20 flex items-center justify-between gap-space-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold tabular-nums">
                    {donut.price.toLocaleString()} ֏
                  </span>

                  <button
                    onClick={() => onAddToCart({
                      id: donut.id,
                      nameHy: donut.nameHy,
                      nameEn: donut.nameEn,
                      price: donut.price,
                      type: 'donut',
                      image: donut.image,
                    })}
                    className="px-space-md py-space-xs bg-primary-container hover:bg-inverse-primary text-on-surface font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">shopping_bag</span>
                    <span>{language === 'hy' ? 'Ավելացնել' : 'Add'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
