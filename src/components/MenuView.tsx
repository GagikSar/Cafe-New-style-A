import React, { useState } from 'react';
import { DONUTS_DATA, COFFEE_BEANS_DATA, PAIRINGS_DATA } from '../data/cafeData';
import { DonutItem, CoffeeItem, Language, PairingItem } from '../types';

interface MenuViewProps {
  language: Language;
  onAddToCart: (item: { id: string; nameHy: string; nameEn: string; price: number; type: 'donut' | 'coffee' | 'pairing'; image?: string }) => void;
  onSelectDonut: (item: DonutItem) => void;
  onSelectCoffee: (item: CoffeeItem) => void;
}

type MenuCategoryTab = 'all' | 'donuts' | 'specialty' | 'espresso' | 'pairings';

export const MenuView: React.FC<MenuViewProps> = ({
  language,
  onAddToCart,
  onSelectDonut,
  onSelectCoffee,
}) => {
  const [activeTab, setActiveTab] = useState<MenuCategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [nutFreeOnly, setNutFreeOnly] = useState(false);

  // Additional espresso bar items
  const ESPRESSO_ITEMS = [
    {
      id: 'espresso-single',
      nameHy: 'Սոլո Էսպրեսո (Տեղում բովված)',
      nameEn: 'Single Espresso (In-House Roast)',
      descHy: 'Կոլումբիական և Եթովպիական հատիկների խառնուրդ, խիտ ոսկեգույն կրեմա:',
      descEn: 'Blend of washed Colombia and natural Ethiopia, rich viscous golden crema.',
      price: 1000,
      badge: 'Single Origin'
    },
    {
      id: 'flat-white-oat',
      nameHy: 'Օրգանական Oat Flat White',
      nameEn: 'Organic Oat Flat White',
      descHy: 'Դաբլ ռիստրետտո և շվեդական վարսակի կաթի մետաքսյա միկրոփրփուր:',
      descEn: 'Double ristretto with silky Swedish barista oat microfoam.',
      price: 1500,
      badge: 'Barista Favorite'
    },
    {
      id: 'cold-brew-tonic',
      nameHy: 'Geisha Cold Brew Տոնիկ և Արյունոտ Նարինջ',
      nameEn: 'Geisha Cold Brew Tonic & Blood Orange',
      descHy: '18-ժամյա սառը թրմում, արհեստական ցիտրուսային տոնիկ և կարմիր նարնջի չորացրած շերտ:',
      descEn: '18-hour cold steeped Geisha, artisanal botanical tonic, dehydrated blood orange wheel.',
      price: 1800,
      badge: 'Signature Cold'
    },
    {
      id: 'matcha-latte-uji',
      nameHy: 'Կիոտոյի Սերեմոնիալ Մաչա Լատտե',
      nameEn: 'Kyoto Ceremonial Uji Matcha Latte',
      descHy: 'Առաջին բերքահավաքի ճապոնական մաչա, նուրբ կաթ, բնական վանիլ:',
      descEn: 'First harvest ceremonial grade matcha from Uji, steamed milk, hint of vanilla.',
      price: 1900,
      badge: 'Ceremonial'
    }
  ];

  const categoryTabs: { id: MenuCategoryTab; labelHy: string; labelEn: string }[] = [
    { id: 'all', labelHy: 'Ամբողջ Մենյուն', labelEn: 'All Items' },
    { id: 'donuts', labelHy: 'Բրիոշ Փքաբլիթներ', labelEn: 'Brioche Donuts' },
    { id: 'specialty', labelHy: 'Սպեցիալթի Ֆիլտր Սուրճ', labelEn: 'Specialty Filter' },
    { id: 'espresso', labelHy: 'Էսպրեսո Բար & Ըմպելիքներ', labelEn: 'Espresso Bar' },
    { id: 'pairings', labelHy: 'Համադրություններ', labelEn: 'Pairings' },
  ];

  const filteredDonuts = DONUTS_DATA.filter(d => {
    const matchesSearch = d.nameHy.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.descriptionHy.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNutFree = !nutFreeOnly || !d.allergensEn.some(a => a.toLowerCase().includes('nut'));
    return matchesSearch && matchesNutFree;
  });

  const filteredCoffee = COFFEE_BEANS_DATA.filter(c => {
    return c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           c.originHy.toLowerCase().includes(searchQuery.toLowerCase()) ||
           c.notesHy.some(n => n.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const filteredPairings = PAIRINGS_DATA.filter(p => {
    return p.nameHy.toLowerCase().includes(searchQuery.toLowerCase()) ||
           p.descHy.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">
        {/* Header Title & Description */}
        <div className="border-b border-outline-variant/30 pb-space-lg">
          <div className="flex items-center gap-space-xs text-primary mb-space-xs">
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest">
              {language === 'hy' ? 'Սեզոնային Ամբողջական Ցանկ' : 'Complete Seasonal Menu'}
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface uppercase tracking-tight">
            {language === 'hy' ? 'Սրճարանի և Արհեստանոցի Մենյու' : 'Café & Roastery Menu'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">
            {language === 'hy'
              ? 'Յուրաքանչյուր փքաբլիթ թխվում է օրական 2 անգամ (09:00 և 15:00): Սուրճերը բովվում են տեղում՝ բարձրլեռնային միկրո-խմբաքանակներով:'
              : 'Donuts baked fresh in small batches twice daily (09:00 & 15:00). Coffees roasted on-site in microlots.'}
          </p>

          {/* Search & Filter Bar */}
          <div className="mt-space-lg flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder={language === 'hy' ? 'Փնտրել փքաբլիթ, սուրճ, բաղադրիչ...' : 'Search donuts, coffee, tasting notes...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant/40 pl-10 pr-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary placeholder:text-outline"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface text-xs uppercase"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Nut-Free Toggle */}
            <label className="inline-flex items-center gap-2 cursor-pointer select-none text-xs text-tertiary">
              <input
                type="checkbox"
                checked={nutFreeOnly}
                onChange={(e) => setNutFreeOnly(e.target.checked)}
                className="w-4 h-4 accent-primary bg-surface border border-outline"
              />
              <span>{language === 'hy' ? 'Առանց ընկուզեղենի (Nut-Free)' : 'Nut-Free items only'}</span>
            </label>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-space-md">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-label-sm uppercase tracking-wider transition-colors cursor-pointer border ${
                  activeTab === tab.id
                    ? 'bg-primary-container text-on-surface border-primary font-bold'
                    : 'bg-surface-container border-outline-variant/30 text-tertiary hover:text-on-surface'
                }`}
              >
                {language === 'hy' ? tab.labelHy : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Donuts */}
        {(activeTab === 'all' || activeTab === 'donuts') && (
          <div className="space-y-space-md">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-on-surface uppercase">
                {language === 'hy' ? 'Թարմ Բրիոշ Փքաբլիթներ' : 'Fresh Artisanal Brioche Donuts'}
              </h2>
              <span className="text-xs text-secondary font-label-sm">
                {language === 'hy' ? 'Թխվածքի 48Ժ Խմորում' : '48h Ferment'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              {filteredDonuts.map((donut) => (
                <div
                  key={donut.id}
                  className="bg-surface-container border border-outline-variant/30 p-space-md flex flex-col justify-between group hover:border-primary transition-colors cursor-pointer"
                  onClick={() => onSelectDonut(donut)}
                >
                  <div className="flex gap-space-md">
                    <div className="w-24 h-24 shrink-0 bg-surface-container-high overflow-hidden border border-outline-variant/30">
                      <img
                        src={donut.image}
                        alt={donut.altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-1">
                        <span className="text-[10px] text-secondary uppercase tracking-widest font-bold">
                          {donut.badgeHy}
                        </span>
                        <span className="text-xs text-outline tabular-nums">{donut.code}</span>
                      </div>
                      <h3 className="font-headline-sm text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors mt-0.5">
                        {language === 'hy' ? donut.nameHy : donut.nameEn}
                      </h3>
                      <p className="text-xs text-tertiary mt-1 line-clamp-2">
                        {language === 'hy' ? donut.descriptionHy : donut.descriptionEn}
                      </p>
                    </div>
                  </div>

                  <div 
                    className="mt-3 pt-3 border-t border-outline-variant/20 flex items-center justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="font-headline-sm text-secondary font-bold tabular-nums">
                      {donut.price.toLocaleString()} ֏
                    </span>
                    <button
                      onClick={() => onAddToCart({
                        id: donut.id,
                        nameHy: donut.nameHy,
                        nameEn: donut.nameEn,
                        price: donut.price,
                        type: 'donut',
                        image: donut.image
                      })}
                      className="px-3 py-1 bg-primary-container hover:bg-inverse-primary text-xs uppercase font-label-sm text-on-surface flex items-center gap-1 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[14px]">add</span>
                      <span>{language === 'hy' ? 'Ավելացնել' : 'Add'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Specialty Coffee */}
        {(activeTab === 'all' || activeTab === 'specialty') && (
          <div className="space-y-space-md pt-space-lg">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-on-surface uppercase">
                {language === 'hy' ? 'Սպեցիալթի Ֆիլտր Սուրճ' : 'Single Origin Filter Pour-Overs'}
              </h2>
              <span className="text-xs text-primary font-label-sm">
                {language === 'hy' ? 'V60 • Chemex • Aeropress' : 'V60 • Chemex • Aeropress'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {filteredCoffee.map((coffee) => (
                <div
                  key={coffee.id}
                  className="bg-surface-container border border-outline-variant/30 p-space-lg flex flex-col justify-between hover:border-secondary transition-colors cursor-pointer"
                  onClick={() => onSelectCoffee(coffee)}
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-secondary uppercase tracking-widest font-bold">
                        {language === 'hy' ? coffee.originHy : coffee.originEn}
                      </span>
                      <span className="text-xs text-primary bg-primary-container/20 px-2 py-0.5 border border-primary/30 tabular-nums">
                        {coffee.scaScore} SCA
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-on-surface">
                      {coffee.name}
                    </h3>

                    <div className="flex flex-wrap gap-1 my-3">
                      {(language === 'hy' ? coffee.notesHy : coffee.notesEn).map((note, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 bg-surface-container-high text-tertiary">
                          {note}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-tertiary line-clamp-2">
                      {language === 'hy' ? coffee.descriptionHy : coffee.descriptionEn}
                    </p>
                  </div>

                  <div 
                    className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="font-bold text-on-surface tabular-nums">
                      {coffee.price.toLocaleString()} ֏ <span className="text-xs text-outline font-normal">/ 250մլ</span>
                    </span>
                    <button
                      onClick={() => onAddToCart({
                        id: coffee.id,
                        nameHy: `${coffee.name} (V60)`,
                        nameEn: `${coffee.name} (V60)`,
                        price: coffee.price,
                        type: 'coffee'
                      })}
                      className="px-3 py-1 bg-surface-container-high hover:bg-primary-container text-xs uppercase font-label-sm text-primary hover:text-on-surface border border-primary/30 transition-colors"
                    >
                      {language === 'hy' ? 'Պատվիրել V60' : 'Order V60'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Espresso Bar */}
        {(activeTab === 'all' || activeTab === 'espresso') && (
          <div className="space-y-space-md pt-space-lg">
            <h2 className="font-headline-md text-on-surface uppercase">
              {language === 'hy' ? 'Էսպրեսո Բար & Ըմպելիքներ' : 'Espresso Bar & Botanicals'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {ESPRESSO_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container border border-outline-variant/30 p-space-md flex items-center justify-between gap-space-md hover:border-outline transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase font-bold text-secondary bg-surface-container-highest px-1.5 py-0.5 border border-outline-variant/30">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="font-label-lg text-on-surface font-bold">
                      {language === 'hy' ? item.nameHy : item.nameEn}
                    </h3>
                    <p className="text-xs text-tertiary mt-0.5">
                      {language === 'hy' ? item.descHy : item.descEn}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-headline-sm text-secondary font-bold block tabular-nums">
                      {item.price.toLocaleString()} ֏
                    </span>
                    <button
                      onClick={() => onAddToCart({
                        id: item.id,
                        nameHy: item.nameHy,
                        nameEn: item.nameEn,
                        price: item.price,
                        type: 'coffee'
                      })}
                      className="mt-2 px-3 py-1 bg-primary-container hover:bg-inverse-primary text-xs uppercase font-label-sm text-on-surface transition-colors"
                    >
                      {language === 'hy' ? 'Ավելացնել' : 'Add'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Pairings */}
        {(activeTab === 'all' || activeTab === 'pairings') && (
          <div className="space-y-space-md pt-space-lg">
            <h2 className="font-headline-md text-on-surface uppercase">
              {language === 'hy' ? 'Սոմելյեի Համադրություններ' : 'Sommelier Curated Combos'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {filteredPairings.map((pairing) => (
                <div
                  key={pairing.id}
                  className="bg-surface-container border border-outline-variant/30 p-space-lg flex flex-col justify-between hover:border-primary transition-colors"
                >
                  <div>
                    <span className="text-xs text-secondary font-bold block mb-1">
                      {language === 'hy' ? `ՀԱՄԱԴՐՈՒԹՅՈՒՆ ${pairing.number} • ${pairing.titleHy}` : `PAIRING ${pairing.number} • ${pairing.titleEn}`}
                    </span>
                    <h3 className="font-headline-sm text-on-surface mt-1">
                      {language === 'hy' ? pairing.nameHy : pairing.nameEn}
                    </h3>
                    <p className="text-xs text-tertiary mt-2">
                      {language === 'hy' ? pairing.descHy : pairing.descEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-bold text-secondary tabular-nums">
                      {pairing.price.toLocaleString()} ֏
                    </span>
                    <button
                      onClick={() => onAddToCart({
                        id: pairing.id,
                        nameHy: pairing.nameHy,
                        nameEn: pairing.nameEn,
                        price: pairing.price,
                        type: 'pairing'
                      })}
                      className="px-3 py-1 bg-primary-container hover:bg-inverse-primary text-xs uppercase font-label-sm text-on-surface transition-colors"
                    >
                      {language === 'hy' ? 'Ընտրել Զույգը' : 'Select Combo'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
