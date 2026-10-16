import React, { useState } from 'react';
import { Language, ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onReserveSuccess: (data: ReservationData) => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  language,
  onReserveSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+374 ');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('11:00');
  const [guests, setGuests] = useState('1-2');
  const [seatingPreference, setSeatingPreference] = useState('window');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReservation: ReservationData = {
      id: `RES-${Date.now().toString().slice(-4)}`,
      fullName,
      phone,
      date,
      time,
      guests,
      notes,
      timestamp: Date.now()
    };
    setIsSubmitted(true);
    setTimeout(() => {
      onReserveSuccess(newReservation);
      setIsSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-gutter animate-fadeIn">
      <div 
        className="bg-surface-container border border-primary max-w-lg w-full p-space-xl relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">
              {language === 'hy' ? 'Արագ Ամրագրում' : 'Instant Reservation'}
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
              {language === 'hy' ? 'Ամրագրեք Ձեր Այցը' : 'Book Your Table'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-tertiary hover:text-on-surface p-1 transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-3">
            <span className="material-symbols-outlined text-primary text-5xl inline-block" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
            <h4 className="font-headline-sm text-on-surface">
              {language === 'hy' ? 'Ամրագրումը Հաստատված է!' : 'Reservation Confirmed!'}
            </h4>
            <p className="text-sm text-tertiary">
              {language === 'hy' 
                ? `Սպասում ենք Ձեզ ${date}-ին, ժամը ${time}-ին:`
                : `We look forward to hosting you on ${date} at ${time}.`}
            </p>
          </div>
        ) : (
          <form className="space-y-space-md" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="font-label-sm text-label-sm text-tertiary block mb-1 uppercase">
                {language === 'hy' ? 'Անուն Ազգանուն' : 'Full Name'}
              </label>
              <input
                type="text"
                required
                placeholder={language === 'hy' ? 'Օրինակ՝ Արամ Սարգսյան' : 'e.g. John Doe'}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant/40 px-space-md py-space-xs text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-space-sm">
              <div>
                <label className="font-label-sm text-label-sm text-tertiary block mb-1 uppercase">
                  {language === 'hy' ? 'Ամսաթիվ' : 'Date'}
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/40 px-space-md py-space-xs text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="font-label-sm text-label-sm text-tertiary block mb-1 uppercase">
                  {language === 'hy' ? 'Ժամ' : 'Time'}
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/40 px-space-md py-space-xs text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Guests & Seating Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <div>
                <label className="font-label-sm text-label-sm text-tertiary block mb-1 uppercase">
                  {language === 'hy' ? 'Հյուրերի քանակ' : 'Guests'}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/40 px-space-md py-space-xs text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary"
                >
                  <option value="1-2">{language === 'hy' ? '1-2 Անձ (Սրճարանային Սեղան)' : '1-2 Guests (Bistro Table)'}</option>
                  <option value="3-4">{language === 'hy' ? '3-4 Անձ (Հարմարավետ Բազմոց)' : '3-4 Guests (Lounge Sofa)'}</option>
                  <option value="5+">{language === 'hy' ? '5+ Անձ (Մեծ Համայնքային Սեղան)' : '5+ Guests (Community Table)'}</option>
                </select>
              </div>

              <div>
                <label className="font-label-sm text-label-sm text-tertiary block mb-1 uppercase">
                  {language === 'hy' ? 'Նախընտրած Տեղ' : 'Seating Area'}
                </label>
                <select
                  value={seatingPreference}
                  onChange={(e) => setSeatingPreference(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/40 px-space-md py-space-xs text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary"
                >
                  <option value="window">{language === 'hy' ? 'Պատուհանի Մոտ (Լուսավոր)' : 'Window Table'}</option>
                  <option value="bar">{language === 'hy' ? 'Սուրճի Բար (Բարիստայի Դիմաց)' : 'Espresso Bar'}</option>
                  <option value="quiet">{language === 'hy' ? 'Հանգիստ Անկյուն' : 'Quiet Corner'}</option>
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="font-label-sm text-label-sm text-tertiary block mb-1 uppercase">
                {language === 'hy' ? 'Հեռախոսահամար' : 'Phone Number'}
              </label>
              <input
                type="tel"
                required
                placeholder="+374 99 00-00-00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant/40 px-space-md py-space-xs text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-space-sm bg-primary-container hover:bg-inverse-primary text-on-surface font-label-lg text-label-lg uppercase tracking-wider transition-colors mt-space-sm cursor-pointer border border-primary font-bold"
            >
              {language === 'hy' ? 'Հաստատել Ամրագրումը' : 'Confirm Reservation'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
