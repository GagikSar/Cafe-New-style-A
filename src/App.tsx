/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DonutsCatalog } from './components/DonutsCatalog';
import { SpecialtyCoffeeSection } from './components/SpecialtyCoffeeSection';
import { PairingsSection } from './components/PairingsSection';
import { CraftStorySection } from './components/CraftStorySection';
import { LocationSection } from './components/LocationSection';
import { MenuView } from './components/MenuView';
import { SpecialtyDeepDive } from './components/SpecialtyDeepDive';
import { StoryView } from './components/StoryView';
import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CartItem, CoffeeItem, DonutItem, Language, ReservationData, ScreenType } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [language, setLanguage] = useState<Language>('hy');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDonut, setSelectedDonut] = useState<DonutItem | null>(null);
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeItem | null>(null);

  // Toast notification state
  const [toastState, setToastState] = useState<{
    show: boolean;
    title: string;
    subtitle: string;
  }>({
    show: false,
    title: '',
    subtitle: '',
  });

  const triggerToast = (title: string, subtitle: string) => {
    setToastState({ show: true, title, subtitle });
    setTimeout(() => {
      setToastState((prev) => ({ ...prev, show: false }));
    }, 3200);
  };

  const handleAddToCart = (item: {
    id: string;
    nameHy: string;
    nameEn: string;
    price: number;
    type: 'donut' | 'coffee' | 'pairing';
    image?: string;
    quantity?: number;
    brewMethod?: string;
  }) => {
    const qty = item.quantity || 1;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          nameHy: item.nameHy,
          nameEn: item.nameEn,
          price: item.price,
          quantity: qty,
          type: item.type,
          image: item.image,
        },
      ];
    });

    const displayName = language === 'hy' ? item.nameHy : item.nameEn;
    triggerToast(
      language === 'hy' ? `${displayName} ավելացված է` : `${displayName} added to bag`,
      language === 'hy' ? 'Թարմ պատվերը պատրաստվում է' : 'Fresh order batch prepared'
    );
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleReservationSuccess = (resData: ReservationData) => {
    triggerToast(
      language === 'hy' ? 'Սեղանի ամրագրումը հաստատված է' : 'Table reservation confirmed',
      language === 'hy' ? `${resData.date} | ${resData.time} (${resData.fullName})` : `${resData.date} | ${resData.time} (${resData.fullName})`
    );
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        language={language}
        onToggleLanguage={() => setLanguage((l) => (l === 'hy' ? 'en' : 'hy'))}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'home' && (
          <>
            <HeroSection
              language={language}
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
            />
            <DonutsCatalog
              language={language}
              onAddToCart={handleAddToCart}
              onSelectDonut={(donut) => setSelectedDonut(donut)}
            />
            <SpecialtyCoffeeSection
              language={language}
              onAddToCart={handleAddToCart}
              onSelectCoffee={(coffee) => setSelectedCoffee(coffee)}
            />
            <PairingsSection
              language={language}
              onAddToCart={handleAddToCart}
            />
            <CraftStorySection language={language} />
            <LocationSection
              language={language}
              onOpenReservation={() => setIsReservationOpen(true)}
            />
          </>
        )}

        {currentScreen === 'menu' && (
          <MenuView
            language={language}
            onAddToCart={handleAddToCart}
            onSelectDonut={(donut) => setSelectedDonut(donut)}
            onSelectCoffee={(coffee) => setSelectedCoffee(coffee)}
          />
        )}

        {currentScreen === 'specialty' && (
          <SpecialtyDeepDive
            language={language}
            onAddToCart={handleAddToCart}
            onSelectCoffee={(coffee) => setSelectedCoffee(coffee)}
          />
        )}

        {currentScreen === 'story' && (
          <StoryView
            language={language}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}

        {currentScreen === 'location' && (
          <div className="py-space-xl">
            <LocationSection
              language={language}
              onOpenReservation={() => setIsReservationOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Interactive Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        language={language}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        language={language}
        onReserveSuccess={handleReservationSuccess}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        donut={selectedDonut}
        coffee={selectedCoffee}
        onClose={() => {
          setSelectedDonut(null);
          setSelectedCoffee(null);
        }}
        language={language}
        onAddToCart={handleAddToCart}
      />

      {/* Global Toast Notification */}
      <Toast
        show={toastState.show}
        title={toastState.title}
        subtitle={toastState.subtitle}
      />
    </div>
  );
}
