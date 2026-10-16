import React, { useState } from 'react';
import { DonutItem, CoffeeItem, Language } from '../types';

interface ProductDetailModalProps {
  donut: DonutItem | null;
  coffee: CoffeeItem | null;
  onClose: () => void;
  language: Language;
  onAddToCart: (item: { id: string; nameHy: string; nameEn: string; price: number; type: 'donut' | 'coffee'; image?: string; quantity: number }) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  donut,
  coffee,
  onClose,
  language,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!donut && !coffee) return null;

  const handleAdd = () => {
    if (donut) {
      onAddToCart({
        id: donut.id,
        nameHy: donut.nameHy,
        nameEn: donut.nameEn,
        price: donut.price,
        type: 'donut',
        image: donut.image,
        quantity,
      });
    } else if (coffee) {
      onAddToCart({
        id: coffee.id,
        nameHy: `${coffee.name} (V60)`,
        nameEn: `${coffee.name} (V60)`,
        price: coffee.price,
        type: 'coffee',
        quantity,
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-gutter animate-fadeIn">
      <div 
        className="bg-surface-container border border-outline-variant/40 max-w-2xl w-full p-space-lg lg:p-space-xl relative shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-tertiary hover:text-on-surface p-1 transition-colors z-10"
          aria-label="Close product modal"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {donut && (
          <div className="space-y-space-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="aspect-[4/3] bg-surface-container-high overflow-hidden border border-outline-variant/30">
                <img
                  src={donut.image}
                  alt={donut.altText}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs text-secondary uppercase font-bold tracking-widest block">
                    {language === 'hy' ? donut.badgeHy : donut.badgeEn}
                  </span>
                  <h2 className="font-headline-sm text-on-surface mt-1">
                    {language === 'hy' ? donut.nameHy : donut.nameEn}
                  </h2>
                  <div className="flex items-center gap-2 mt-1 text-secondary text-xs">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                    <span>{donut.rating} ({donut.reviewsCount} {language === 'hy' ? 'կարծիք' : 'reviews'})</span>
                    <span className="text-outline">·</span>
                    <span className="text-outline">{donut.code}</span>
                  </div>

                  <p className="font-body-sm text-tertiary mt-3 leading-relaxed">
                    {language === 'hy' ? donut.descriptionHy : donut.descriptionEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-baseline justify-between">
                  <span className="text-xs text-tertiary uppercase">{language === 'hy' ? 'Գինը՝' : 'Price:'}</span>
                  <span className="font-headline-sm text-secondary font-bold tabular-nums">
                    {donut.price.toLocaleString()} ֏
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients & Allergens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-sm border-t border-outline-variant/30 text-xs">
              <div className="bg-surface-container-low p-space-sm border border-outline-variant/20">
                <span className="text-secondary font-bold uppercase tracking-wider block mb-1">
                  {language === 'hy' ? 'Բաղադրիչներ' : 'Ingredients'}
                </span>
                <p className="text-tertiary leading-relaxed">
                  {(language === 'hy' ? donut.ingredientsHy : donut.ingredientsEn).join(' • ')}
                </p>
              </div>

              <div className="bg-surface-container-low p-space-sm border border-outline-variant/20">
                <span className="text-secondary font-bold uppercase tracking-wider block mb-1">
                  {language === 'hy' ? 'Ալերգեններ' : 'Allergens'}
                </span>
                <p className="text-tertiary leading-relaxed">
                  {(language === 'hy' ? donut.allergensHy : donut.allergensEn).join(', ')}
                </p>
              </div>
            </div>

            {/* Pairing Advice */}
            {donut.recommendedPairing && (
              <div className="bg-surface-container-high/60 p-space-sm border border-primary/30 flex items-center gap-2 text-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">local_cafe</span>
                <div>
                  <span className="font-bold text-primary block">
                    {language === 'hy' ? 'Խորհուրդ տրվող սուրճի համադրություն՝' : 'Recommended Pairing:'}
                  </span>
                  <span className="text-tertiary">{donut.recommendedPairing}</span>
                </div>
              </div>
            )}

            {/* Add action */}
            <div className="pt-space-sm flex items-center justify-between gap-space-md">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-8 h-8 bg-surface-container border border-outline-variant flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="font-mono font-bold px-3 tabular-nums text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-8 h-8 bg-surface-container border border-outline-variant flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-space-sm bg-primary-container hover:bg-inverse-primary text-on-surface uppercase font-label-md tracking-wider flex items-center justify-center gap-2 transition-colors border border-primary"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>
                  {language === 'hy'
                    ? `Ավելացնել (${(donut.price * quantity).toLocaleString()} ֏)`
                    : `Add to Bag (${(donut.price * quantity).toLocaleString()} AMD)`}
                </span>
              </button>
            </div>
          </div>
        )}

        {coffee && (
          <div className="space-y-space-md">
            <div>
              <span className="text-xs text-secondary uppercase font-bold tracking-widest block">
                {language === 'hy' ? coffee.originHy : coffee.originEn}
              </span>
              <h2 className="font-headline-sm text-on-surface mt-1">
                {coffee.name}
              </h2>
              <span className="text-xs text-primary bg-primary-container/20 px-2 py-0.5 border border-primary/30 tabular-nums mt-1 inline-block">
                {coffee.scaScore} SCA Score
              </span>

              <p className="font-body-sm text-tertiary mt-3 leading-relaxed">
                {language === 'hy' ? coffee.descriptionHy : coffee.descriptionEn}
              </p>
            </div>

            {/* Tasting Notes */}
            <div>
              <span className="text-xs text-secondary font-bold uppercase tracking-wider block mb-1">
                {language === 'hy' ? 'Համային նոտաներ' : 'Tasting Notes'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'hy' ? coffee.notesHy : coffee.notesEn).map((note, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-surface-container-high text-xs text-on-surface">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-3 gap-2 p-space-sm bg-surface-container-low border border-outline-variant/30 text-xs">
              <div>
                <span className="text-tertiary block">{language === 'hy' ? 'Մշակում' : 'Process'}</span>
                <span className="font-bold text-on-surface mt-0.5 block">{coffee.processHy}</span>
              </div>
              <div>
                <span className="text-tertiary block">{language === 'hy' ? 'Բարձրություն' : 'Altitude'}</span>
                <span className="font-bold text-on-surface mt-0.5 block">{coffee.altitudeHy}</span>
              </div>
              <div>
                <span className="text-tertiary block">{language === 'hy' ? 'Բովում' : 'Roast'}</span>
                <span className="font-bold text-secondary mt-0.5 block">{coffee.roastHy}</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-space-sm flex items-center justify-between gap-space-md">
              <span className="font-headline-sm text-on-surface font-bold tabular-nums">
                {coffee.price.toLocaleString()} ֏
              </span>

              <button
                onClick={handleAdd}
                className="flex-1 py-space-sm bg-primary-container hover:bg-inverse-primary text-on-surface uppercase font-label-md tracking-wider flex items-center justify-center gap-2 transition-colors border border-primary"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>{language === 'hy' ? 'Պատվիրել V60 Pour Over' : 'Order V60 Pour Over'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
