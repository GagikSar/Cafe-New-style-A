import React from 'react';

interface ToastProps {
  show: boolean;
  title: string;
  subtitle: string;
}

export const Toast: React.FC<ToastProps> = ({ show, title, subtitle }) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transform transition-all duration-300 pointer-events-none bg-surface-container-highest border border-primary text-on-surface px-space-lg py-space-md shadow-2xl flex items-center gap-space-md ${
        show
          ? 'translate-y-0 opacity-100 scale-100'
          : 'translate-y-12 opacity-0 scale-95'
      }`}
    >
      <span
        className="material-symbols-outlined text-primary text-[24px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        check_circle
      </span>
      <div>
        <p className="font-label-lg text-label-lg text-on-surface font-bold">
          {title}
        </p>
        <p className="font-body-sm text-body-sm text-tertiary">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
