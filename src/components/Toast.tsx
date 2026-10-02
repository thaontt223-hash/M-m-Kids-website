import React from 'react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { activeToast, closeToast } = useCart();

  if (!activeToast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-[#1c1c17] text-[#fdf9f1] shadow-2xl transition-all transform animate-in fade-in slide-in-from-bottom-5 duration-200 max-w-[calc(100vw-2rem)] sm:max-w-md border border-[#31302c]"
    >
      <div className="w-8 h-8 rounded-full bg-[#2c6653] text-[#ffffff] flex items-center justify-center shrink-0">
        {activeToast.type === 'gift' ? (
          <span className="material-symbols-outlined text-[18px]">card_giftcard</span>
        ) : activeToast.type === 'info' ? (
          <span className="material-symbols-outlined text-[18px]">info</span>
        ) : (
          <span className="material-symbols-outlined text-[18px]">check</span>
        )}
      </div>

      <div className="flex flex-col min-w-0 flex-1">
        <span className="font-heading text-sm font-bold text-white truncate">
          {activeToast.title}
        </span>
        <span className="text-xs text-[#ece8e0]/90 line-clamp-2">
          {activeToast.message}
        </span>
      </div>

      <button
        onClick={closeToast}
        aria-label="Đóng thông báo"
        className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors shrink-0"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
