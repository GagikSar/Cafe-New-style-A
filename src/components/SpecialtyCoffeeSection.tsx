import React, { useState } from 'react';
import { COFFEE_BEANS_DATA } from '../data/cafeData';
import { CoffeeItem, Language } from '../types';

interface SpecialtyCoffeeSectionProps {
  language: Language;
  onAddToCart: (item: { id: string; nameHy: string; nameEn: string; price: number; type: 'coffee'; brewMethod: string }) => void;
  onSelectCoffee: (item: CoffeeItem) => void;
}

export const SpecialtyCoffeeSection: React.FC<SpecialtyCoffeeSectionProps> = ({
  language,
  onAddToCart,
  onSelectCoffee,
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('all');
  const [showBrewCalculator, setShowBrewCalculator] = useState(false);
  const [coffeeGrams, setCoffeeGrams] = useState(15);
  const [activeTimerSeconds, setActiveTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const brewMethods = [
    { id: 'all', label: language === 'hy' ? 'Բոլորը' : 'All' },
    { id: 'V60 Pour Over', label: 'V60 Pour Over' },
    { id: 'Chemex', label: 'Chemex' },
    { id: 'Aeropress', label: 'Aeropress' },
    { id: 'Espresso Bar', label: 'Espresso Bar' },
  ];

  // Water calculation based on 1:16 ratio for pour over
  const targetWater = Math.round(coffeeGrams * 16.6);
  const bloomWater = Math.round(coffeeGrams * 3);

  // Simple timer effect for brew extraction
  React.useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setActiveTimerSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const filteredBeans = selectedMethod === 'all'
    ? COFFEE_BEANS_DATA
    : COFFEE_BEANS_DATA.filter(bean => bean.brewMethods.some(m => m.toLowerCase().includes(selectedMethod.toLowerCase())) || selectedMethod === 'Espresso Bar');

  return (
    <section className="w-full bg-surface-container-lowest py-space-2xl border-t border-outline-variant/20" id="specialty-philosophy">
      <div className="max-w-7xl mx-auto px-gutter">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-space-lg mb-space-2xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
              <span className="material-symbols-outlined text-[16px]">coffee</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">
                {language === 'hy' ? 'Մասնագիտացված Հատիկներ' : 'Single Origin Specimen Beans'}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              {language === 'hy' ? 'Սուրճի Փիլիսոփայությունը' : 'Coffee Philosophy & Terroir'}
            </h2>
            <p className="font-body-md text-body-md text-tertiary mt-space-xs">
              {language === 'hy'
                ? 'Մենք բովում ենք միկրո-խմբաքանակներով՝ ընդգծելով յուրաքանչյուր տերուարի բնական պրոֆիլը: Թարմություն, թափանցիկ ծագում և ճշգրիտ էքստրակցիա:'
                : 'We roast in ultra-microlots on our Giesen roaster, accentuating the natural terroir of every origin. Total transparency, fresh peak profile, and measured extraction.'}
            </p>
          </div>

          {/* Brew Methods Tags & Interactive Calculator Toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-sm">
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase px-space-xs">
                {language === 'hy' ? 'Մատուցման Եղանակներ՝' : 'Brew Methods:'}
              </span>
              {brewMethods.slice(1).map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(selectedMethod === method.id ? 'all' : method.id)}
                  className={`px-space-sm py-1 font-label-sm text-label-sm transition-colors cursor-pointer border ${
                    selectedMethod === method.id
                      ? 'bg-primary-container text-on-surface border-primary font-bold'
                      : 'bg-surface-container border-outline-variant/30 text-on-surface hover:border-outline'
                  }`}
                >
                  {method.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowBrewCalculator(!showBrewCalculator)}
              className="px-3 py-1 bg-surface-container-high border border-secondary/40 text-secondary hover:text-on-surface text-label-sm uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>{language === 'hy' ? 'Էքստրակցիայի Հաշվիչ' : 'Extraction Lab'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Brew Calculator Drawer (Collapsible) */}
        {showBrewCalculator && (
          <div className="mb-space-2xl p-space-lg bg-surface-container border border-secondary/40">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md pb-space-sm border-b border-outline-variant/30">
              <div>
                <span className="font-label-sm text-secondary uppercase tracking-widest block">
                  {language === 'hy' ? 'Բարիստայի Ճշգրիտ Լաբորատորիա' : 'Barista Pour-Over Precision Tool'}
                </span>
                <h3 className="font-headline-sm text-on-surface mt-0.5">
                  {language === 'hy' ? 'V60 / Chemex Հաշվիչ & Ժամաչափ' : 'V60 & Chemex Ratio & Timer'}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl text-primary font-bold px-3 py-1 bg-surface-container-lowest border border-outline-variant/40 tabular-nums">
                  {formatTimer(activeTimerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`px-4 py-1.5 font-label-sm uppercase font-bold text-on-surface ${
                    isTimerRunning ? 'bg-secondary-container text-secondary' : 'bg-primary-container'
                  }`}
                >
                  {isTimerRunning ? (language === 'hy' ? 'Դադար' : 'Pause') : (language === 'hy' ? 'Սկսել Թրմումը' : 'Start Timer')}
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setActiveTimerSeconds(0);
                  }}
                  className="px-2 py-1.5 text-xs text-outline hover:text-on-surface uppercase"
                >
                  {language === 'hy' ? 'Վերականգնել' : 'Reset'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
              <div className="bg-surface-container-lowest p-space-sm border border-outline-variant/30">
                <label className="text-xs text-tertiary block mb-1">
                  {language === 'hy' ? 'Սուրճի քաշ (գրամ)' : 'Coffee Dose (g)'}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="12"
                    max="30"
                    value={coffeeGrams}
                    onChange={(e) => setCoffeeGrams(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <span className="font-mono font-bold text-secondary text-base tabular-nums">
                    {coffeeGrams}գ
                  </span>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-sm border border-outline-variant/30">
                <span className="text-xs text-tertiary block mb-1">
                  {language === 'hy' ? 'Բլում / Թրջում (45 վրկ)' : 'Bloom Stage (45s)'}
                </span>
                <span className="font-mono font-bold text-primary text-base tabular-nums">
                  ~{bloomWater} մլ (93°C)
                </span>
              </div>

              <div className="bg-surface-container-lowest p-space-sm border border-outline-variant/30">
                <span className="text-xs text-tertiary block mb-1">
                  {language === 'hy' ? 'Ընդհանուր Ջուր (1:16.6)' : 'Total Water Yield'}
                </span>
                <span className="font-mono font-bold text-on-surface text-base tabular-nums">
                  {targetWater} մլ
                </span>
              </div>

              <div className="bg-surface-container-lowest p-space-sm border border-outline-variant/30">
                <span className="text-xs text-tertiary block mb-1">
                  {language === 'hy' ? 'Խորհուրդ տրվող աղացվածք' : 'Recommended Grind'}
                </span>
                <span className="text-xs text-secondary font-bold">
                  {language === 'hy' ? 'Միջին-խոշոր (Կոպիտ ծովի աղ)' : 'Medium-Coarse (Sea Salt)'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 3 Specimen Bean Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {filteredBeans.map((bean) => (
            <div
              key={bean.id}
              className="bg-surface-container border border-outline-variant/30 p-space-lg flex flex-col justify-between relative group hover:border-secondary transition-colors cursor-pointer"
              onClick={() => onSelectCoffee(bean)}
            >
              <div>
                {/* Header Origin & SCA */}
                <div className="flex justify-between items-start mb-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
                      {language === 'hy' ? bean.originHy : bean.originEn}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5 group-hover:text-primary transition-colors">
                      {bean.name}
                    </h3>
                  </div>
                  <span className="font-label-md text-label-md text-primary bg-primary-container/20 px-space-xs py-0.5 border border-primary/30 tabular-nums">
                    {bean.scaScore.toFixed(1)} SCA
                  </span>
                </div>

                {/* Sensory Note Tags */}
                <div className="flex flex-wrap gap-1.5 mb-space-md">
                  {(language === 'hy' ? bean.notesHy : bean.notesEn).map((note, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-surface-container-high text-tertiary-fixed font-label-sm text-label-sm"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Specs Grid */}
                <div className="space-y-space-xs text-body-sm font-label-md py-space-sm border-t border-b border-outline-variant/20">
                  <div className="flex justify-between text-tertiary">
                    <span>{language === 'hy' ? 'Մշակում՝' : 'Process:'}</span>
                    <span className="text-on-surface font-medium">
                      {language === 'hy' ? bean.processHy : bean.processEn}
                    </span>
                  </div>
                  <div className="flex justify-between text-tertiary">
                    <span>{language === 'hy' ? 'Բարձրություն՝' : 'Elevation:'}</span>
                    <span className="text-on-surface font-medium">
                      {language === 'hy' ? bean.altitudeHy : bean.altitudeEn}
                    </span>
                  </div>
                  <div className="flex justify-between text-tertiary">
                    <span>{language === 'hy' ? 'Բովման Աստիճան՝' : 'Roast Profile:'}</span>
                    <span className="text-secondary font-medium">
                      {language === 'hy' ? bean.roastHy : bean.roastEn}
                    </span>
                  </div>
                </div>

                {/* Sensory Bars (5 Segment Meters) */}
                <div className="pt-space-md space-y-2">
                  <div>
                    <div className="flex justify-between text-label-sm font-label-sm text-tertiary mb-1">
                      <span>{language === 'hy' ? 'Թթվայնություն (Acidity)' : 'Acidity'}</span>
                      <span className="text-on-surface tabular-nums">{bean.acidity.toFixed(1)} / 5</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 h-1.5">
                      {[1, 2, 3, 4, 5].map((seg) => {
                        const filled = bean.acidity >= seg;
                        const partial = !filled && bean.acidity >= seg - 0.5;
                        return (
                          <div
                            key={seg}
                            className={
                              filled
                                ? 'bg-primary'
                                : partial
                                ? 'bg-primary/50'
                                : 'bg-outline-variant/30'
                            }
                          />
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-label-sm font-label-sm text-tertiary mb-1">
                      <span>{language === 'hy' ? 'Քաղցրություն & Մարմին (Body)' : 'Sweetness & Body'}</span>
                      <span className="text-on-surface tabular-nums">{bean.body.toFixed(1)} / 5</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 h-1.5">
                      {[1, 2, 3, 4, 5].map((seg) => {
                        const filled = bean.body >= seg;
                        const partial = !filled && bean.body >= seg - 0.5;
                        return (
                          <div
                            key={seg}
                            className={
                              filled
                                ? 'bg-secondary'
                                : partial
                                ? 'bg-secondary/50'
                                : 'bg-outline-variant/30'
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Ordering Strip */}
              <div 
                className="mt-space-lg pt-space-sm flex justify-between items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold tabular-nums">
                  {bean.price.toLocaleString()} ֏{' '}
                  <span className="text-body-sm text-outline font-normal">/ 250մլ</span>
                </span>

                <button
                  onClick={() => {
                    const method = bean.brewMethods[0] || 'V60';
                    onAddToCart({
                      id: bean.id,
                      nameHy: `${bean.name} (${method})`,
                      nameEn: `${bean.name} (${method})`,
                      price: bean.price,
                      type: 'coffee',
                      brewMethod: method
                    });
                  }}
                  className="font-label-sm text-label-sm uppercase tracking-wider text-primary hover:text-on-surface flex items-center gap-1 transition-colors cursor-pointer group"
                >
                  <span>
                    {language === 'hy'
                      ? `Պատվիրել ${bean.brewMethods[0] || 'V60'}`
                      : `Order ${bean.brewMethods[0] || 'V60'}`}
                  </span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
