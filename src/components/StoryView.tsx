import React from 'react';
import { STORY_PHOTOS } from '../data/cafeData';
import { Language } from '../types';

interface StoryViewProps {
  language: Language;
  onOpenReservation: () => void;
}

export const StoryView: React.FC<StoryViewProps> = ({
  language,
  onOpenReservation,
}) => {
  const fermentationTimeline = [
    {
      hour: '00:00',
      titleHy: 'Ավտոլիզ և Կարագի Ներմուծում',
      titleEn: 'Autolyse & French Butter Emulsion',
      descHy: 'Բնական ցորենի ալյուրը և ֆերմերային ձվերը խառնվում են: Դանդաղ ավելացվում է 82.5% ֆրանսիական կարագը մինչև մետաքսյա էմուլսիա:',
      descEn: 'Stone-milled flour and farm eggs rest. 82.5% churned butter is slowly folded in until dough achieves a silky emulsion.'
    },
    {
      hour: '12:00',
      titleHy: 'Սենյակային Խմորում և Ծալում',
      titleEn: 'Ambient Ferment & Structural Folds',
      descHy: 'Առաջնային ակտիվ խմորում: Կատարվում են նուրբ ձեռքի ծալումներ՝ գլյուտենային ցանցը ամրապնդելու և օդային գրպանիկներ ստեղծելու համար:',
      descEn: 'Gentle hand turns develop dough tensile strength and trap aromatic carbon dioxide pockets.'
    },
    {
      hour: '24:00',
      titleHy: 'Սառը Հասունացում (+4°C)',
      titleEn: 'Cold Retardation (+4°C)',
      descHy: 'Խմորը տեղափոխվում է սառնարանային խուց: Ցածր ջերմաստիճանը դանդաղեցնում է խմորիչները՝ թույլ տալով ֆերմենտներին ստեղծել խորը կարամելային բուրմունք:',
      descEn: 'Dough is moved to cold lockers. Cold slows yeast while enzymes break complex sugars into natural sweetness.'
    },
    {
      hour: '48:00',
      titleHy: 'Ձեռքով Ձևավորում և Թխվածք',
      titleEn: 'Hand-Shaping & Morning Fry',
      descHy: 'Առավոտյան ժամը 06:00-ին հացթուխները ձեռքով կլորացնում են փքաբլիթները: Վերջնական հասունացումից հետո դրանք տապակվում են մաքուր յուղում:',
      descEn: 'Bakers gently hand-shape each ring at 06:00 AM. After proofing, they flash-fry in high-smoke-point pure oil.'
    },
    {
      hour: '09:00',
      titleHy: 'Գլազուրապատում և Առաջին Թողարկում',
      titleEn: 'Artisanal Glaze & First Release',
      descHy: 'Տաք փքաբլիթները պատվում են բնական վանիլով, շոկոլադով կամ պիստակով: Սրճարանի դռները բացվում են:',
      descEn: 'Warm donuts receive Madagascar vanilla glaze or Valrhona ganache as doors open to morning guests.'
    }
  ];

  return (
    <div className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-2xl">
        {/* Header Section */}
        <div className="border-b border-outline-variant/30 pb-space-lg">
          <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
            <span className="material-symbols-outlined text-[16px]">history_edu</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest">
              {language === 'hy' ? 'Մեր Ուղին և Սկզբունքները' : 'Our Heritage & Philosophy'}
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface uppercase tracking-tight">
            {language === 'hy' ? 'Արվեստանոցի Պատմությունը' : 'The Story of Craft'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 leading-relaxed">
            {language === 'hy'
              ? '«Փքաբլիթներ և Սուրճ»-ը ծնվել է Երևանում՝ որպես երկու կրքերի միաձուլում՝ ֆրանսիական դասական հացաբուլկեղենի տեխնիկայի և համաշխարհային երրորդ ալիքի սպեցիալթի սուրճի:'
              : 'Born in Yerevan at the intersection of classical French viennoiserie and third-wave specialty coffee, we celebrate patience, honest ingredients, and architectural restraint.'}
          </p>
        </div>

        {/* 2-Column Split: Philosophy & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 space-y-space-md text-body-md text-on-surface-variant leading-relaxed">
            <h2 className="font-headline-md text-on-surface uppercase">
              {language === 'hy' ? 'Ինչու՞ 48 Ժամ' : 'Why 48 Hours Matters'}
            </h2>
            <p>
              {language === 'hy'
                ? 'Արդյունաբերական փքաբլիթները պատրաստվում են 40 րոպեում՝ օգտագործելով արհեստական բարձրացնող նյութեր և կայունարարներ: Մենք ընտրել ենք ճիշտ հակառակ ճանապարհը: 48 ժամյա դանդաղ խմորումը ոչ միայն ստեղծում է ամպանման թեթևություն, այլև ապահովում է հեշտ մարսելիություն:'
                : 'Commercial donuts rely on chemical leaveners and 40-minute fast mixing. We take 48 hours. This slow, low-temperature fermentation completely transforms gluten structures, making our brioche uniquely light, tender, and effortlessly digestible.'}
            </p>
            <p>
              {language === 'hy'
                ? 'Մեր բոլոր բաղադրիչները մաքուր են՝ ոչ մի արհեստական բուրավետիչ, կոնսերվանտ կամ արմավենու յուղ: Միայն ֆրանսիական կարագ, Մադագասկարի վանիլի բնական պատիճներ, բելգիական Valrhona շոկոլադ և տեղական ծիրան:'
                : 'Zero artificial flavorings, palm oils, or chemical glazes. Only 82.5% Normandy butter, Madagascar whole vanilla pods, Valrhona single-estate chocolate, and ripe Ararat apricots.'}
            </p>

            <div className="pt-space-sm">
              <button
                onClick={onOpenReservation}
                className="px-space-xl py-space-sm bg-primary-container text-on-surface uppercase font-label-lg tracking-wider hover:bg-inverse-primary transition-colors cursor-pointer border border-primary"
              >
                {language === 'hy' ? 'Այցելել Մեր Արվեստանոց' : 'Reserve a Seat'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-space-sm">
            {STORY_PHOTOS.map((photo, idx) => (
              <div key={idx} className="aspect-square bg-surface-container overflow-hidden border border-outline-variant/30">
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 48-Hour Fermentation Timeline */}
        <div className="bg-surface-container p-space-lg lg:p-space-xl border border-outline-variant/30">
          <div className="mb-space-lg">
            <span className="text-xs text-secondary font-label-sm uppercase tracking-widest block">
              {language === 'hy' ? 'Քայլ Առ Քայլ' : 'Hour by Hour'}
            </span>
            <h2 className="font-headline-md text-on-surface uppercase mt-1">
              {language === 'hy' ? '48-Ժամյա Բրիոշի Ծնունդը' : 'The 48-Hour Brioche Journey'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md border-t border-outline-variant/30 pt-space-lg">
            {fermentationTimeline.map((step, idx) => (
              <div key={idx} className="flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl text-primary font-bold block mb-1">
                    {step.hour}
                  </span>
                  <h3 className="font-label-lg text-on-surface font-bold text-sm">
                    {language === 'hy' ? step.titleHy : step.titleEn}
                  </h3>
                  <p className="text-xs text-tertiary mt-2 leading-relaxed">
                    {language === 'hy' ? step.descHy : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
