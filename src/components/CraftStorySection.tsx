import React from 'react';
import { STORY_PHOTOS } from '../data/cafeData';
import { Language } from '../types';

interface CraftStorySectionProps {
  language: Language;
}

export const CraftStorySection: React.FC<CraftStorySectionProps> = ({ language }) => {
  return (
    <section className="w-full bg-surface-container-lowest py-space-2xl border-t border-outline-variant/20" id="craft-story">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Manifesto & Values */}
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs text-primary">
              <span className="material-symbols-outlined text-[16px]">hourglass_empty</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                {language === 'hy' ? 'Դանդաղ Արհեստագործություն' : 'Slow Craftsmanship & Science'}
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              {language === 'hy' ? 'Արվեստանոցը, Ժամանակը և Կիրքը' : 'The Workshop, Time & Obsession'}
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {language === 'hy'
                ? 'Մեր սրճարանը չի շտապում: Փքաբլիթների խմորը հասունանում է ճիշտ 48 ժամ ցածր ջերմաստիճանում, ինչը թույլ է տալիս բնական ֆերմենտացիային քայքայել բարդ շաքարները և ստեղծել անկրկնելի փափկություն:'
                : 'We refuse to rush. Our brioche dough rests for precisely 48 hours at cold fermentation temperatures, allowing wild yeast enzymes to break down starches, creating featherweight structure and deep buttery aromatics.'}
            </p>

            <div className="space-y-space-sm pt-space-xs">
              {/* Value 1 */}
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">grain</span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block text-base font-bold">
                    {language === 'hy' ? 'Ֆրանսիական Բրիոշի Ավանդույթ' : 'Pure French Brioche Tradition'}
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary">
                    {language === 'hy'
                      ? 'Օգտագործվում է բացառապես 82.5% յուղայնությամբ կարագ և տեղական ֆերմերային ձու:'
                      : 'Crafted exclusively with 82.5% churned butter, organic stone-milled flour, and fresh free-range farm eggs.'}
                  </span>
                </div>
              </div>

              {/* Value 2 */}
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">local_fire_department</span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block text-base font-bold">
                    {language === 'hy' ? 'Տեղում Բովված Սուրճ' : 'Roasted In-House on Giesen'}
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary">
                    {language === 'hy'
                      ? 'Մեր Giesen բովիչ մեքենան աշխատում է շաբաթական 3 անգամ՝ երաշխավորելով առավելագույն թարմություն:'
                      : 'Our cast-iron Giesen roaster runs three times weekly in small batches to guarantee optimal degassing and freshness.'}
                  </span>
                </div>
              </div>

              {/* Value 3 */}
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">nature_people</span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block text-base font-bold">
                    {language === 'hy' ? 'Մինիմալիստական Տարածք' : 'Architectural Brutalist Sanctuary'}
                  </span>
                  <span className="font-body-sm text-body-sm text-tertiary">
                    {language === 'hy'
                      ? 'Բրուտալիստական բազալտե հենասյուներ, փայտի ջերմություն և սուրճի հանգստացնող բույր:'
                      : 'Carved Yerevan black basalt stone pillars, oiled natural oak surfaces, and a serene, unhurried morning atmosphere.'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Photo Architectural Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-space-sm">
            <div className="space-y-space-sm">
              <div className="aspect-[3/4] bg-surface-container overflow-hidden border border-outline-variant/30">
                <img
                  src={STORY_PHOTOS[0].image}
                  alt={STORY_PHOTOS[0].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant/30">
                <img
                  src={STORY_PHOTOS[2].image}
                  alt={STORY_PHOTOS[2].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-space-sm pt-space-lg">
              <div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant/30">
                <img
                  src={STORY_PHOTOS[1].image}
                  alt={STORY_PHOTOS[1].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] bg-surface-container overflow-hidden border border-outline-variant/30">
                <img
                  src={STORY_PHOTOS[3].image}
                  alt={STORY_PHOTOS[3].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
