import React, { useState } from 'react';
import { CartItem, Language } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  language: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  language,
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'delivery'>('takeaway');
  const [bakingBatch, setBakingBatch] = useState<'morning' | 'afternoon'>('morning');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('+374 ');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 800 : 0;
  const total = Math.max(0, subtotal - discountAmount + deliveryFee);

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (code === 'SPECIALTY' || code === 'YEREVAN' || code === 'BRIOCHE') {
      setDiscountPercent(15);
    } else {
      setDiscountPercent(0);
      alert(language === 'hy' ? 'Անվավեր պրոմո կոդ: Փորձեք SPECIALTY' : 'Invalid promo code. Try SPECIALTY');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    const generatedId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderId(generatedId);
    setIsSuccess(true);
  };

  const resetOrder = () => {
    onClearCart();
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-surface-container-lowest/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface-container border-l border-primary/50 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-space-lg border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">shopping_bag</span>
              <h2 className="font-headline-sm text-on-surface uppercase">
                {language === 'hy' ? 'Ձեր Զամբյուղը' : 'Your Order Bag'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-tertiary hover:text-on-surface transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-space-lg space-y-space-md">
            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <span className="material-symbols-outlined text-primary text-6xl inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>
                  task_alt
                </span>
                <h3 className="font-headline-sm text-on-surface">
                  {language === 'hy' ? 'Պատվերը Ընդունված է!' : 'Order Placed Successfully!'}
                </h3>
                <p className="font-mono text-sm text-secondary font-bold">
                  {orderId}
                </p>
                <div className="bg-surface-container-low p-space-md border border-outline-variant/30 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-tertiary">{language === 'hy' ? 'Թխման խմբաքանակ՝' : 'Baking Batch:'}</span>
                    <span className="text-on-surface font-bold">
                      {bakingBatch === 'morning' ? '09:00 (Առավոտյան)' : '15:00 (Ցերեկային)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-tertiary">{language === 'hy' ? 'Տեսակ՝' : 'Type:'}</span>
                    <span className="text-on-surface font-bold">
                      {orderType === 'takeaway' ? (language === 'hy' ? 'Ինքնուրույն վերցնել' : 'Takeaway') : (language === 'hy' ? 'Առաքում' : 'Delivery')}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-outline-variant/20 pt-2 font-bold text-sm">
                    <span>{language === 'hy' ? 'Վճարման ենթակա՝' : 'Total Due:'}</span>
                    <span className="text-primary tabular-nums">{total.toLocaleString()} ֏</span>
                  </div>
                </div>
                <p className="text-xs text-tertiary leading-relaxed">
                  {language === 'hy'
                    ? 'Մենք սկսել ենք Ձեր թարմ պատվերի պատրաստումը: Սպասում ենք Ձեզ Պուշկինի 24 հասցեում:'
                    : 'We are preparing your fresh artisan items. See you at Pushkin 24!'}
                </p>
                <button
                  onClick={resetOrder}
                  className="w-full py-2.5 bg-primary-container text-on-surface font-label-md uppercase tracking-wider hover:bg-inverse-primary"
                >
                  {language === 'hy' ? 'Ավարտել' : 'Done'}
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <span className="material-symbols-outlined text-outline text-5xl">
                  shopping_basket
                </span>
                <p className="font-headline-sm text-base text-tertiary">
                  {language === 'hy' ? 'Զամբյուղը դատարկ է' : 'Your bag is empty'}
                </p>
                <p className="text-xs text-outline max-w-xs mx-auto">
                  {language === 'hy'
                    ? 'Ընտրեք մեր թարմ բրիոշ փքաբլիթներից կամ սպեցիալթի սուրճերից:'
                    : 'Browse our artisanal donuts and single origin coffees to add.'}
                </p>
              </div>
            ) : (
              <>
                {/* Itemized List */}
                <div className="space-y-space-sm">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-surface-container-low border border-outline-variant/30 p-space-sm flex items-center justify-between gap-space-sm"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-md text-on-surface font-bold truncate">
                          {language === 'hy' ? item.nameHy : item.nameEn}
                        </h4>
                        <span className="text-xs text-secondary tabular-nums">
                          {item.price.toLocaleString()} ֏
                        </span>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 bg-surface-container border border-outline-variant flex items-center justify-center text-xs hover:border-primary"
                        >
                          -
                        </button>
                        <span className="font-mono text-xs font-bold text-on-surface px-1.5 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 bg-surface-container border border-outline-variant flex items-center justify-center text-xs hover:border-primary"
                        >
                          +
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="ml-2 text-outline hover:text-error text-xs"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Baking Batch Selector */}
                <div className="pt-space-sm border-t border-outline-variant/30">
                  <label className="text-xs font-label-sm uppercase tracking-wider text-secondary block mb-2">
                    {language === 'hy' ? 'Թխման Խմբաքանակ (Առավելագույն Թարմություն)' : 'Baking Release Batch'}
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setBakingBatch('morning')}
                      className={`p-2 border text-left transition-colors ${
                        bakingBatch === 'morning'
                          ? 'bg-primary-container text-on-surface border-primary font-bold'
                          : 'bg-surface-container text-tertiary border-outline-variant/30'
                      }`}
                    >
                      <span className="block font-bold">09:00 {language === 'hy' ? 'Առավոտ' : 'Morning'}</span>
                      <span className="text-[10px] opacity-80">{language === 'hy' ? 'Առաջին տաք թողարկում' : 'First hot release'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBakingBatch('afternoon')}
                      className={`p-2 border text-left transition-colors ${
                        bakingBatch === 'afternoon'
                          ? 'bg-primary-container text-on-surface border-primary font-bold'
                          : 'bg-surface-container text-tertiary border-outline-variant/30'
                      }`}
                    >
                      <span className="block font-bold">15:00 {language === 'hy' ? 'Ցերեկ' : 'Afternoon'}</span>
                      <span className="text-[10px] opacity-80">{language === 'hy' ? 'Երկրորդ տաք թողարկում' : 'Second fresh batch'}</span>
                    </button>
                  </div>
                </div>

                {/* Takeaway / Delivery Switch */}
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`p-2 border text-center transition-colors uppercase font-label-sm ${
                        orderType === 'takeaway'
                          ? 'bg-secondary-container text-secondary border-secondary font-bold'
                          : 'bg-surface-container text-tertiary border-outline-variant/30'
                      }`}
                    >
                      {language === 'hy' ? 'Վերցնել Սրճարանից' : 'Takeaway (Pushkin 24)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2 border text-center transition-colors uppercase font-label-sm ${
                        orderType === 'delivery'
                          ? 'bg-secondary-container text-secondary border-secondary font-bold'
                          : 'bg-surface-container text-tertiary border-outline-variant/30'
                      }`}
                    >
                      {language === 'hy' ? 'Առաքում Երևանում' : 'Delivery in Yerevan'}
                    </button>
                  </div>

                  {orderType === 'delivery' && (
                    <input
                      type="text"
                      placeholder={language === 'hy' ? 'Հասցե (Փողոց, շենք, բնակարան)' : 'Delivery Address'}
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      className="w-full bg-surface-container-low border border-outline-variant/40 px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary"
                    />
                  )}
                </div>

                {/* Promo Code Box */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="SPECIALTY (15% off)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-surface-container-low border border-outline-variant/40 px-3 py-1.5 text-xs text-on-surface uppercase focus:outline-none focus:border-secondary"
                  />
                  <button
                    type="button"
                    onClick={applyPromo}
                    className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant text-xs uppercase"
                  >
                    {language === 'hy' ? 'Կիրառել' : 'Apply'}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Footer Order Summary & Primary CTA */}
          {!isSuccess && items.length > 0 && (
            <div className="p-space-lg bg-surface-container-high border-t border-outline-variant/30 space-y-space-sm">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-tertiary">
                  <span>{language === 'hy' ? 'Ենթագումար՝' : 'Subtotal:'}</span>
                  <span className="text-on-surface tabular-nums">{subtotal.toLocaleString()} ֏</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-secondary">
                    <span>{language === 'hy' ? `Զեղչ (${discountPercent}%)՝` : `Discount (${discountPercent}%):`}</span>
                    <span className="tabular-nums">-{discountAmount.toLocaleString()} ֏</span>
                  </div>
                )}
                {orderType === 'delivery' && (
                  <div className="flex justify-between text-tertiary">
                    <span>{language === 'hy' ? 'Առաքման վճար՝' : 'Delivery:'}</span>
                    <span className="text-on-surface tabular-nums">{deliveryFee.toLocaleString()} ֏</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-on-surface pt-2 border-t border-outline-variant/30">
                  <span>{language === 'hy' ? 'Ընդհանուր՝' : 'Total:'}</span>
                  <span className="text-primary tabular-nums">{total.toLocaleString()} ֏</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-space-sm bg-primary-container hover:bg-inverse-primary text-on-surface font-label-lg uppercase tracking-wider transition-colors cursor-pointer border border-primary font-bold"
              >
                {language === 'hy' ? 'Հաստատել Պատվերը' : 'Confirm Order'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
