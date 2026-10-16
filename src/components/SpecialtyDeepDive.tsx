import React, { useState } from 'react';
import { COFFEE_BEANS_DATA } from '../data/cafeData';
import { CoffeeItem, Language } from '../types';

interface SpecialtyDeepDiveProps {
  language: Language;
  onAddToCart: (item: { id: string; nameHy: string; nameEn: string; price: number; type: 'coffee'; brewMethod: string }) => void;
  onSelectCoffee: (item: CoffeeItem) => void;
}

export const SpecialtyDeepDive: React.FC<SpecialtyDeepDiveProps> = ({
  language,
  onAddToCart,
  onSelectCoffee,
}) => {
  const [selectedBeanId, setSelectedBeanId] = useState(COFFEE_BEANS_DATA[0].id);
  const [doseGrams, setDoseGrams] = useState(18);
  const [method, setMethod] = useState<'v60' | 'chemex' | 'aeropress'>('v60');
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const selectedBean = COFFEE_BEANS_DATA.find(b => b.id === selectedBeanId) || COFFEE_BEANS_DATA[0];

  // Ratio config
  const ratios = {
    v60: { ratio: 16.0, grind: 'Medium-Fine', temp: '92°C - 94°C', time: '2:45 - 3:15' },
    chemex: { ratio: 16.6, grind: 'Medium-Coarse', temp: '93°C - 95°C', time: '3:45 - 4:15' },
    aeropress: { ratio: 12.5, grind: 'Fine-Medium', temp: '88°C - 90°C', time: '1:45 - 2:00' }
  };

  const currentConfig = ratios[method];
  const waterYield = Math.round(doseGrams * currentConfig.ratio);
  const bloomGrams = Math.round(doseGrams * 3);

  // Timer loop
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive) {
      interval = setInterval(() => setTimerSeconds(s => s + 1), 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-2xl">
        {/* Editorial Header */}
        <div className="border-b border-outline-variant/30 pb-space-lg">
          <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
            <span className="material-symbols-outlined text-[16px]">coffee_maker</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest">
              {language === 'hy' ? 'Մասնագիտացված Լաբորատորիա' : 'Specialty Sensory Laboratory'}
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface uppercase tracking-tight">
            {language === 'hy' ? 'Սպեցիալթի Սուրճի Մշակույթը' : 'The Specialty Coffee Culture'}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-2 leading-relaxed">
            {language === 'hy'
              ? 'Մենք աշխատում ենք բացառապես 86+ SCA գնահատական ունեցող միկրո-խմբաքանակների հետ: Յուրաքանչյուր հատիկ ունի իր յուրահատուկ տերուարը, գենետիկան և բովման կորը:'
              : 'We roast strictly 86+ SCA score microlots. Each specimen preserves authentic single-origin terroir, natural fermentation character, and precision roasting curves on our cast-iron Giesen.'}
          </p>
        </div>

        {/* Bean Selector & Terroir Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Terroir Selector */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="text-xs font-label-sm uppercase tracking-widest text-outline">
              {language === 'hy' ? 'Ընտրեք Տերուարը' : 'Select Origin Specimen'}
            </span>

            <div className="space-y-space-sm">
              {COFFEE_BEANS_DATA.map((bean) => {
                const isSelected = bean.id === selectedBeanId;
                return (
                  <div
                    key={bean.id}
                    onClick={() => setSelectedBeanId(bean.id)}
                    className={`p-space-md border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-surface-container-high border-primary'
                        : 'bg-surface-container border-outline-variant/30 hover:border-outline'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[11px] text-secondary uppercase font-bold tracking-wider">
                          {language === 'hy' ? bean.originHy : bean.originEn}
                        </span>
                        <h3 className="font-headline-sm text-base text-on-surface font-bold mt-0.5">
                          {bean.name}
                        </h3>
                      </div>
                      <span className="text-xs text-primary font-mono bg-primary-container/20 px-2 py-0.5 border border-primary/30 tabular-nums">
                        {bean.scaScore} SCA
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {(language === 'hy' ? bean.notesHy : bean.notesEn).map((note, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 bg-surface-container-lowest text-tertiary">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-space-md bg-surface-container border border-outline-variant/30 mt-space-sm">
              <span className="text-xs text-secondary font-bold uppercase tracking-wider block mb-1">
                {language === 'hy' ? 'Ուղիղ Ֆերմերային Գործընկերություն' : 'Direct Trade Sourcing'}
              </span>
              <p className="text-xs text-tertiary leading-relaxed">
                {language === 'hy'
                  ? 'Մեր բոլոր կանաչ հատիկները գնվում են անմիջապես ֆերմերային կոոպերատիվներից՝ ապահովելով արդարացի վարձատրություն և 100% թափանցիկություն:'
                  : 'All green beans are directly traded with farm cooperatives in Ethiopia, Colombia, and Kenya, ensuring living wages and agronomic sustainability.'}
              </p>
            </div>
          </div>

          {/* Right Column: Deep Terroir Specs & Pour-Over Lab */}
          <div className="lg:col-span-7 bg-surface-container border border-outline-variant/30 p-space-lg">
            <div className="flex justify-between items-start border-b border-outline-variant/30 pb-space-md">
              <div>
                <span className="text-xs text-secondary uppercase tracking-widest font-bold">
                  {language === 'hy' ? selectedBean.originHy : selectedBean.originEn}
                </span>
                <h2 className="font-headline-md text-on-surface mt-1">
                  {selectedBean.name}
                </h2>
              </div>
              <div className="text-right">
                <span className="font-headline-sm text-secondary font-bold tabular-nums">
                  {selectedBean.price.toLocaleString()} ֏
                </span>
                <span className="text-xs text-outline block">/ 250մլ</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-on-surface-variant my-space-md leading-relaxed">
              {language === 'hy' ? selectedBean.descriptionHy : selectedBean.descriptionEn}
            </p>

            {/* Specs Table */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm py-space-sm border-t border-b border-outline-variant/20 text-xs">
              <div>
                <span className="text-tertiary block">{language === 'hy' ? 'Մշակման եղանակ' : 'Processing'}</span>
                <span className="text-on-surface font-bold mt-0.5 block">{selectedBean.processHy}</span>
              </div>
              <div>
                <span className="text-tertiary block">{language === 'hy' ? 'Բարձրություն' : 'Elevation'}</span>
                <span className="text-on-surface font-bold mt-0.5 block">{selectedBean.altitudeHy}</span>
              </div>
              <div>
                <span className="text-tertiary block">{language === 'hy' ? 'Բովման պրոֆիլ' : 'Roast Profile'}</span>
                <span className="text-secondary font-bold mt-0.5 block">{selectedBean.roastHy}</span>
              </div>
            </div>

            {/* Interactive Brew Lab */}
            <div className="mt-space-lg pt-space-md bg-surface-container-low p-space-md border border-outline-variant/30">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-space-sm pb-space-sm border-b border-outline-variant/30">
                <span className="text-xs font-label-sm uppercase tracking-widest text-primary font-bold">
                  {language === 'hy' ? 'Ինտերակտիվ Էքստրակցիայի Հաշվիչ' : 'Interactive Brew Extraction Calculator'}
                </span>
                <div className="flex gap-1">
                  {(['v60', 'chemex', 'aeropress'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMethod(m)}
                      className={`px-2.5 py-1 text-xs uppercase font-bold border transition-colors ${
                        method === m
                          ? 'bg-primary-container text-on-surface border-primary'
                          : 'bg-surface-container text-tertiary border-outline-variant/30 hover:text-on-surface'
                      }`}
                    >
                      {m.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculator Parameters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md text-xs">
                <div>
                  <span className="text-tertiary block mb-1">
                    {language === 'hy' ? 'Սուրճի դոզա' : 'Coffee Dose'}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setDoseGrams(g => Math.max(12, g - 1))}
                      className="w-6 h-6 bg-surface-container border border-outline-variant flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="font-mono text-sm font-bold text-secondary px-2 tabular-nums">
                      {doseGrams}գ
                    </span>
                    <button
                      onClick={() => setDoseGrams(g => Math.min(32, g + 1))}
                      className="w-6 h-6 bg-surface-container border border-outline-variant flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-tertiary block mb-1">
                    {language === 'hy' ? 'Ջրի ծավալ' : 'Water Volume'}
                  </span>
                  <span className="font-mono text-sm font-bold text-primary block tabular-nums">
                    {waterYield} մլ
                  </span>
                </div>

                <div>
                  <span className="text-tertiary block mb-1">
                    {language === 'hy' ? 'Բլում / Թրջում' : 'Bloom Water'}
                  </span>
                  <span className="font-mono text-sm font-bold text-on-surface block tabular-nums">
                    {bloomGrams} մլ
                  </span>
                </div>

                <div>
                  <span className="text-tertiary block mb-1">
                    {language === 'hy' ? 'Ջրի ջերմաստիճան' : 'Water Temp'}
                  </span>
                  <span className="font-mono text-sm font-bold text-secondary block">
                    {currentConfig.temp}
                  </span>
                </div>
              </div>

              {/* Live Extraction Timer & Pour Guide */}
              <div className="mt-space-md pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl text-primary font-bold px-3 py-1 bg-surface-container-lowest border border-primary/40 tabular-nums">
                    {formatTime(timerSeconds)}
                  </span>
                  <button
                    onClick={() => setTimerActive(!timerActive)}
                    className="px-4 py-1.5 bg-primary-container hover:bg-inverse-primary text-xs uppercase font-bold text-on-surface transition-colors"
                  >
                    {timerActive ? (language === 'hy' ? 'Դադար' : 'Pause') : (language === 'hy' ? 'Սկսել Ժամաչափը' : 'Start Timer')}
                  </button>
                  <button
                    onClick={() => {
                      setTimerActive(false);
                      setTimerSeconds(0);
                    }}
                    className="text-xs text-outline hover:text-on-surface uppercase"
                  >
                    {language === 'hy' ? 'Զրոյացնել' : 'Reset'}
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart({
                    id: selectedBean.id,
                    nameHy: `${selectedBean.name} (${method.toUpperCase()})`,
                    nameEn: `${selectedBean.name} (${method.toUpperCase()})`,
                    price: selectedBean.price,
                    type: 'coffee',
                    brewMethod: method.toUpperCase()
                  })}
                  className="px-4 py-2 bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary text-xs uppercase font-label-sm font-bold border border-secondary transition-colors"
                >
                  {language === 'hy' ? `Պատվիրել ${method.toUpperCase()}` : `Order Fresh ${method.toUpperCase()}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
