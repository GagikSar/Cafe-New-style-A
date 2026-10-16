import React, { useState } from 'react';
import { ScreenType, Language } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  cartCount: number;
  onOpenCart: () => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  language,
  onToggleLanguage,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navItems: { id: ScreenType; labelHy: string; labelEn: string }[] = [
    { id: 'home', labelHy: 'Գլխավոր', labelEn: 'Home' },
    { id: 'menu', labelHy: 'Մենյու', labelEn: 'Menu' },
    { id: 'specialty', labelHy: 'Մասնագիտացված Սուրճ', labelEn: 'Specialty Coffee' },
    { id: 'story', labelHy: 'Մեր Պատմությունը', labelEn: 'Our Story' },
    { id: 'location', labelHy: 'Հասցե և Ժամեր', labelEn: 'Location & Hours' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand Zone */}
        <div 
          className="flex items-center gap-space-md cursor-pointer select-none shrink-0"
          onClick={() => onNavigate('home')}
        >
          <span className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface whitespace-nowrap">
            {language === 'hy' ? 'Փքաբլիթներ և սուրճ' : 'Donuts & Coffee'}
          </span>
          <span className="hidden lg:inline-block font-label-sm text-label-sm uppercase px-space-xs py-0.5 bg-surface-container-high text-secondary border border-outline-variant/40 tracking-widest">
            {language === 'hy' ? 'Երևան' : 'Yerevan'}
          </span>
        </div>

        {/* Navigation Zone */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-label-lg text-label-lg transition-colors tracking-wide whitespace-nowrap ${
                  isActive
                    ? 'text-primary font-bold border-b border-primary pb-0.5'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {language === 'hy' ? item.labelHy : item.labelEn}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-space-md shrink-0">
          {/* Language Switcher */}
          <button
            onClick={onToggleLanguage}
            title={language === 'hy' ? 'Switch to English' : 'Փոխել հայերենի'}
            className="px-2.5 py-1 bg-surface-container border border-outline-variant/40 text-on-surface font-label-sm uppercase hover:border-primary transition-colors"
          >
            {language === 'hy' ? 'EN' : 'ՀԱՅ'}
          </button>

          {/* Table reservation quick button */}
          <button
            onClick={onOpenReservation}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-tertiary-fixed hover:text-on-surface font-label-sm uppercase transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>{language === 'hy' ? 'Ամրագրում' : 'Reserve'}</span>
          </button>

          {/* Primary CTA - Order Online & Cart */}
          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center justify-center gap-2 px-space-lg py-space-sm bg-primary-container text-on-surface font-label-lg text-label-lg uppercase tracking-wider hover:bg-inverse-primary hover:text-on-surface transition-colors border border-primary-container"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            <span className="hidden sm:inline">
              {language === 'hy' ? 'Պատվիրել Առցանց' : 'Order Online'}
            </span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1 bg-secondary text-on-secondary font-bold text-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Button with dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-9 h-9 rounded-none border border-outline-variant/40 overflow-hidden flex items-center justify-center bg-surface-container focus:outline-none focus:border-primary transition-colors"
              aria-label="User profile"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6MYIvIRIJ-3JDCsP72xf1fPd16C6dyr14kZ4yu7v3RiaozFOrC6NoWUXsAJQLv1X8jzUUstRNgy9vbnGhlk52t-8rB8ebwWOHxXSX0XRqiprbx0FtHz0Pu6tO8U1FM2f0weTbtYbgvS7d7OD_EOJAe4g_akoy-9Qme2Zq0x9V1JNkGp5iZkDrfigTN706DtX-GLBNrGZAA9-4N61QTNIa3KVUCbhyrPbrIbCN15GdEb6eecMquCclhQ"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-surface-container-high border border-outline-variant/50 p-space-md shadow-2xl z-50">
                <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/20">
                  <div className="w-10 h-10 bg-surface-container border border-outline-variant/40 flex items-center justify-center font-bold text-primary">
                    ԳՍ
                  </div>
                  <div>
                    <p className="font-label-md text-on-surface font-bold">Գագիկ Սարգսյան</p>
                    <p className="font-body-sm text-tertiary text-xs">Մշտական հյուր • VIP</p>
                  </div>
                </div>
                <div className="py-2 space-y-1 text-sm font-label-md">
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      onOpenReservation();
                    }}
                    className="w-full text-left px-2 py-1.5 hover:bg-surface-container text-on-surface-variant hover:text-on-surface flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-primary">event_available</span>
                    <span>{language === 'hy' ? 'Իմ Ամրագրումները' : 'My Reservations'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      onOpenCart();
                    }}
                    className="w-full text-left px-2 py-1.5 hover:bg-surface-container text-on-surface-variant hover:text-on-surface flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px] text-secondary">receipt_long</span>
                    <span>{language === 'hy' ? 'Պատվերի Զամբյուղ' : 'Order Cart'}</span>
                  </button>
                </div>
                <div className="pt-2 border-t border-outline-variant/20">
                  <p className="text-xs text-outline">
                    {language === 'hy' ? 'Բոնուսային միավորներ՝ 450 ֏' : 'Club Points: 450 AMD'}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 bg-surface-container border border-outline-variant/40 text-on-surface hover:text-primary"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-high border-b border-outline-variant/40 px-gutter py-space-md">
          <nav className="flex flex-col gap-space-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 font-label-lg border-b border-outline-variant/20 ${
                  currentScreen === item.id ? 'text-primary font-bold' : 'text-on-surface-variant'
                }`}
              >
                {language === 'hy' ? item.labelHy : item.labelEn}
              </button>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  onOpenReservation();
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-primary font-label-md uppercase tracking-wider flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                <span>{language === 'hy' ? 'Ամրագրել Սեղան' : 'Book a Table'}</span>
              </button>
              <button
                onClick={onToggleLanguage}
                className="px-3 py-1 bg-surface border border-outline-variant text-xs uppercase"
              >
                {language === 'hy' ? 'English' : 'Հայերեն'}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
