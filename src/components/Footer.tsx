import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-gutter pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl pb-space-2xl">
          {/* Column 1: Brand & Manifesto */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <span className="font-headline-md text-headline-md text-on-surface uppercase">
              {language === 'hy' ? 'Փքաբլիթներ և սուրճ' : 'Donuts & Coffee'}
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              {language === 'hy'
                ? 'Մասնագիտացված սրճարան և միկրո-հացաբուլկեղենի արհեստանոց Երևանի սրտում: Մենք համադրում ենք բնական խմորիչով դանդաղ խմորումը և բարձրորակ հատիկավոր սուրճի մշակույթը:'
                : 'Specialty café and micro-bakery roastery in the cultural heart of Yerevan. Uniting 48-hour cold fermented brioche dough with third-wave single-origin roasting.'}
            </p>
            <div className="pt-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block mb-space-xs">
                {language === 'hy' ? 'Արհեստի մանիֆեստ' : 'Craft Manifesto'}
              </span>
              <p className="font-body-sm text-body-sm text-tertiary italic">
                {language === 'hy'
                  ? '«Անզիջում որակ, մաքուր բաղադրիչներ և ժամանակ՝ յուրաքանչյուր հատիկի ու փքաբլիթի կատարելության համար:»'
                  : '“Uncompromising quality, pure natural ingredients, and deliberate time dedicated to every single bean and pastry.”'}
              </p>
            </div>
          </div>

          {/* Column 2: Hours & Contact */}
          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary">
              {language === 'hy' ? 'Աշխատանքային Ժամեր' : 'Opening Hours'}
            </span>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-on-surface">
                  {language === 'hy' ? 'Երկուշաբթի - Ուրբաթ' : 'Monday - Friday'}
                </span>
                <span>08:30 – 21:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-outline-variant/10">
                <span className="text-on-surface">
                  {language === 'hy' ? 'Շաբաթ - Կիրակի' : 'Saturday - Sunday'}
                </span>
                <span>09:00 – 22:00</span>
              </div>
              <div className="mt-space-sm text-secondary font-label-sm text-label-sm">
                {language === 'hy' ? CAFE_INFO.bakingBatchesHy : CAFE_INFO.bakingBatchesEn}
              </div>
            </div>

            <div className="mt-space-md">
              <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary block mb-space-xs">
                {language === 'hy' ? 'Հասցե & Կապ' : 'Address & Contact'}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {language === 'hy' ? CAFE_INFO.addressHy : CAFE_INFO.addressEn}
                <br />
                {language === 'hy' ? 'Հայաստան' : 'Armenia'}
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                {CAFE_INFO.phone}
                <br />
                {CAFE_INFO.email}
              </p>
            </div>
          </div>

          {/* Column 3: Newsletter & Social */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary">
              {language === 'hy' ? 'Թարմ Բովված Նորություններ' : 'Freshly Roasted Dispatch'}
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {language === 'hy'
                ? 'Բաժանորդագրվեք մեր շաբաթական տեղեկագրին՝ ծանոթանալու սեզոնային բաղադրատոմսերին, միկրո-խմբաքանակի հատիկներին և սրճարանի իրադարձություններին:'
                : 'Join our weekly gazette for early access to limited micro-lot beans, secret holiday batches, and barista workshops.'}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-space-xs mt-space-xs">
              <input
                type="email"
                required
                placeholder={language === 'hy' ? 'Ձեր էլ. հասցեն' : 'Your email address'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-surface-container-low px-space-md py-space-sm font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container border border-outline-variant/30 focus:border-primary"
              />
              <button
                type="submit"
                className="px-space-lg py-space-sm bg-primary-container text-on-surface font-label-lg text-label-lg uppercase tracking-wider hover:bg-inverse-primary hover:text-on-surface transition-colors whitespace-nowrap cursor-pointer border border-primary font-bold"
              >
                {isSubscribed
                  ? (language === 'hy' ? 'Միացված է ✓' : 'Joined ✓')
                  : (language === 'hy' ? 'Միանալ' : 'Subscribe')}
              </button>
            </form>

            {isSubscribed && (
              <p className="text-xs text-primary font-label-md">
                {language === 'hy' ? 'Շնորհակալություն: Դուք բաժանորդագրվեցիք մեր նորություններին:' : 'Thank you! You are now subscribed to our craft notes.'}
              </p>
            )}

            <div className="mt-space-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant block mb-space-xs">
                {language === 'hy' ? 'Սոցիալական Հարթակներ' : 'Channels & Playlists'}
              </span>
              <div className="flex items-center gap-space-md font-label-md text-label-md text-tertiary">
                <a href="#instagram" className="hover:text-primary transition-colors uppercase tracking-wider">
                  Instagram
                </a>
                <span className="text-outline-variant">/</span>
                <a href="#telegram" className="hover:text-primary transition-colors uppercase tracking-wider">
                  Telegram
                </a>
                <span className="text-outline-variant">/</span>
                <a href="#spotify" className="hover:text-primary transition-colors uppercase tracking-wider">
                  Spotify Beats
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-space-lg border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant/70">
          <p>© 2024 Փքաբլիթներ և սուրճ: Բոլոր իրավունքները պաշտպանված են:</p>
          <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
            <a href="#privacy" className="hover:text-on-surface transition-colors">
              {language === 'hy' ? 'Գաղտնիության Քաղաքականություն' : 'Privacy Policy'}
            </a>
            <a href="#terms" className="hover:text-on-surface transition-colors">
              {language === 'hy' ? 'Օգտագործման Պայմաններ' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
