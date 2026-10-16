import React from 'react';
import { PAIRINGS_DATA } from '../data/cafeData';
import { Language, PairingItem } from '../types';

interface PairingsSectionProps {
  language: Language;
  onAddToCart: (item: { id: string; nameHy: string; nameEn: string; price: number; type: 'pairing' }) => void;
}

export const PairingsSection: React.FC<PairingsSectionProps> = ({
  language,
  onAddToCart,
}) => {
  const handleSelectPairing = (pairing: PairingItem) => {
    onAddToCart({
      id: pairing.id,
      nameHy: `${pairing.nameHy}`,
      nameEn: `${pairing.nameEn}`,
      price: pairing.price,
      type: 'pairing'
    });
  };

  return (
    <section className="w-full bg-surface py-space-2xl border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">
            {language === 'hy' ? 'Սոմելյեի Ուղեցույց' : 'Sommelier Pairing Guide'}
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
            {language === 'hy' ? 'Իդեալական Համադրություններ' : 'Harmonious Flavor Pairings'}
          </h2>
          <p className="font-body-md text-body-md text-tertiary mt-space-xs">
            {language === 'hy'
              ? 'Սուրճի բնական թթվայնությունը և բրիոշի կարագային քաղցրությունը ստեղծում են հիանալի սիմֆոնիա:'
              : 'The vibrant, clean acidity of single-origin coffee balances the rich, buttery brioche sweetness into an unforgettable sensory duet.'}
          </p>
        </div>

        {/* 3 Pairings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {PAIRINGS_DATA.map((pairing) => (
            <div
              key={pairing.id}
              className="bg-surface-container-high border border-outline-variant/30 p-space-lg relative flex flex-col justify-between hover:border-primary transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between text-label-sm font-label-sm text-secondary mb-space-sm">
                  <span>
                    {language === 'hy'
                      ? `ՀԱՄԱԴՐՈՒԹՅՈՒՆ ${pairing.number}`
                      : `PAIRING ${pairing.number}`}
                  </span>
                  <span className="text-primary font-bold">
                    {language === 'hy' ? pairing.titleHy : pairing.titleEn}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs group-hover:text-primary transition-colors">
                  {language === 'hy' ? pairing.nameHy : pairing.nameEn}
                </h3>

                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {language === 'hy' ? pairing.descHy : pairing.descEn}
                </p>
              </div>

              <div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex justify-between items-center">
                <span className="font-label-md text-label-md text-tertiary uppercase tabular-nums">
                  {language === 'hy'
                    ? `Զույգի արժեքը՝ ${pairing.price.toLocaleString()} ֏`
                    : `Combo: ${pairing.price.toLocaleString()} AMD`}
                </span>
                <button
                  onClick={() => handleSelectPairing(pairing)}
                  className="px-space-md py-1 bg-surface-container hover:bg-primary-container text-on-surface font-label-sm text-label-sm uppercase transition-colors cursor-pointer border border-outline-variant/30 hover:border-primary"
                >
                  {language === 'hy' ? 'Ընտրել' : 'Select'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
