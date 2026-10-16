import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Language } from '../types';

interface LocationSectionProps {
  language: Language;
  onOpenReservation: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  language,
  onOpenReservation,
}) => {
  return (
    <section className="w-full bg-surface py-space-2xl border-t border-outline-variant/20" id="location-section">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="bg-surface-container-high border border-outline-variant/30 p-space-lg lg:p-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-space-xs">
                  {language === 'hy' ? 'Երևանի Սրտում' : 'In the Heart of Yerevan'}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  {language === 'hy' ? 'Այցելեք Մեր Սրճարան' : 'Visit Our Café & Roastery'}
                </h2>
                <p className="font-body-md text-body-md text-tertiary mt-space-xs">
                  {language === 'hy'
                    ? 'Վայելեք թարմ թխված փքաբլիթների առաջին խմբաքանակը առավոտյան 09:00-ին կամ երկրորդ տաք թողարկումը ցերեկը՝ 15:00-ին:'
                    : 'Catch the first warm morning batch straight from the bakery at 09:00 AM, or the afternoon release at 03:00 PM.'}
                </p>
              </div>

              {/* Grid with Address & Working Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="bg-surface-container p-space-md border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary mb-1 text-[20px]">location_on</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface block text-base font-bold">
                    {language === 'hy' ? 'Հասցե' : 'Address'}
                  </span>
                  <p className="font-body-sm text-body-sm text-tertiary mt-0.5">
                    {language === 'hy' ? CAFE_INFO.addressHy : CAFE_INFO.addressEn}
                    <br />
                    <span className="text-outline text-xs">
                      ({language === 'hy' ? CAFE_INFO.landmarksHy : CAFE_INFO.landmarksEn})
                    </span>
                  </p>
                </div>

                <div className="bg-surface-container p-space-md border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary mb-1 text-[20px]">schedule</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface block text-base font-bold">
                    {language === 'hy' ? 'Աշխատանքային Ժամեր' : 'Opening Hours'}
                  </span>
                  <p className="font-body-sm text-body-sm text-tertiary mt-0.5">
                    {language === 'hy' ? 'Երկուշաբթի – Կիրակի' : 'Monday – Sunday'}
                    <br />
                    08:30 – 22:00
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-space-xs flex flex-wrap gap-space-md">
                <button
                  onClick={onOpenReservation}
                  className="px-space-xl py-space-sm bg-primary-container hover:bg-inverse-primary text-on-surface font-label-lg text-label-lg uppercase tracking-wider transition-colors cursor-pointer border border-primary"
                >
                  {language === 'hy' ? 'Ամրագրել Սեղան' : 'Reserve a Table'}
                </button>

                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="px-space-lg py-space-sm bg-transparent hover:bg-surface-container text-tertiary hover:text-on-surface font-label-lg text-label-lg uppercase tracking-wider border border-outline-variant/30 transition-colors inline-flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>{CAFE_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Map Canvas Column */}
            <div className="lg:col-span-6">
              <div className="w-full h-80 bg-surface-container border border-outline-variant/30 relative flex items-center justify-center overflow-hidden group">
                {/* Styled Architectural Map Background */}
                <div className="absolute inset-0 bg-surface-container-lowest opacity-90" />
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#8e9289_1px,transparent_1px),linear-gradient(to_bottom,#8e9289_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* City street road mock lines for Yerevan grid */}
                <div className="absolute w-[200%] h-0.5 bg-outline-variant/40 -rotate-12 top-1/2 left-[-50%]" />
                <div className="absolute w-[200%] h-0.5 bg-outline-variant/30 rotate-45 top-1/3 left-[-50%]" />
                <div className="absolute h-[200%] w-0.5 bg-outline-variant/40 rotate-12 left-1/2 top-[-50%]" />

                {/* Location Marker Card */}
                <div className="relative z-10 text-center p-space-lg bg-surface-container/95 backdrop-blur border border-outline-variant/40 max-w-sm shadow-xl">
                  <span
                    className="material-symbols-outlined text-primary text-[32px] mb-space-xs inline-block animate-bounce"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    pin_drop
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    {language === 'hy' ? 'Սրճարան Փքաբլիթներ և Սուրճ' : 'Donuts & Coffee Roastery'}
                  </h4>
                  <p className="font-body-sm text-body-sm text-tertiary mt-1">
                    {language === 'hy' ? CAFE_INFO.addressHy : CAFE_INFO.addressEn}
                  </p>
                  <div className="mt-space-md inline-block px-space-md py-1 bg-surface-container-high text-secondary font-label-sm text-label-sm border border-secondary/30 uppercase tracking-widest">
                    {language === 'hy' ? 'Բաց է Հիմա • Մինչև 22:00' : 'Open Now • Until 22:00'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
