import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, filterParam?: string) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onSearch,
  searchQuery
}) => {
  const { totalItemsCount, wishlist } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localSearch);
    if (currentTab !== 'products') {
      onNavigate('products');
    }
  };

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'products', label: 'Sản phẩm' },
    { id: 'boys', label: 'Bé Trai' },
    { id: 'girls', label: 'Bé Gái' },
    { id: 'mixmatch', label: 'Mix & Match', badge: 'Hot' },
    { id: 'personalize', label: 'Thêu tên bé' },
    { id: 'promotions', label: 'Ưu đãi' },
    { id: 'sizeguide', label: 'Bảng size' },
    { id: 'tracking', label: 'Tra cứu đơn' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf9f1]/90 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(110,105,95,0.08)] transition-all">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#ece8e0] py-1.5 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between text-xs sm:text-sm text-[#404944]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[15px] text-[#2c6653]">local_shipping</span>
            <span>Miễn phí vận chuyển cho đơn từ 299k · Đổi trả 7 ngày tận nhà</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1 text-[#2c6653] font-medium">
              <span className="material-symbols-outlined text-[15px]">eco</span>
              100% Organic Cotton
            </span>
            <a
              href="tel:19006868"
              className="flex items-center gap-1 text-[#404944] hover:text-[#2c6653] transition-colors font-medium"
            >
              <span className="material-symbols-outlined text-[15px] text-[#2c6653]">support_agent</span>
              <span>Hotline: 1900 6868</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Header Bar: Brand, Search, User actions */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Zone */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 cursor-pointer shrink-0 group select-none"
        >
          {/* Logo icon with sprout and sun */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f1ede6] flex items-center justify-center p-1.5 border border-[#e3ded5] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              {/* Sun rays */}
              <circle cx="50" cy="58" r="24" fill="#fea58e" opacity="0.85" />
              {/* Sprout stem & leaves */}
              <path
                d="M50 70 C50 48, 50 36, 50 34"
                stroke="#2c6653"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M50 44 C42 34, 28 36, 26 44 C26 52, 40 50, 50 44 Z"
                fill="#467f6b"
              />
              <path
                d="M50 38 C58 26, 74 28, 76 36 C76 44, 60 44, 50 38 Z"
                fill="#2c6653"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl font-bold text-[#2c6653] tracking-tight leading-none">
              Mầm Kids
            </span>
            <span className="text-[11px] sm:text-xs text-[#5e6762] font-medium leading-tight">
              Growing with Love
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-lg relative items-center"
        >
          <input
            type="search"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Tìm áo thun, váy, đồ bộ cho bé trai, bé gái..."
            className="w-full h-10 pl-4 pr-11 rounded-full bg-[#f1ede6] text-[#1c1c17] placeholder:text-[#888e89] text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#2c6653]/20 transition-all border border-transparent focus:border-[#2c6653]/30"
          />
          <button
            type="submit"
            aria-label="Tìm kiếm"
            className="absolute right-1 w-8 h-8 rounded-full bg-[#2c6653] text-white flex items-center justify-center hover:bg-[#12503f] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">search</span>
          </button>
        </form>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Wishlist Button */}
          <button
            onClick={() => onNavigate('products')}
            title="Danh sách yêu thích"
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f1ede6] text-[#404944] hover:text-[#904b39] hover:bg-[#ece8e0] flex items-center justify-center transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#904b39] text-white text-[10px] font-bold flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => onNavigate('cart')}
            className="h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-[#2c6653] text-white hover:bg-[#12503f] flex items-center gap-2 transition-all shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="text-xs sm:text-sm font-bold font-heading">
              {totalItemsCount}
            </span>
          </button>

          {/* Mobile Search Toggle */}
          <button
            onClick={() => {
              if (currentTab !== 'products') onNavigate('products');
            }}
            className="md:hidden w-9 h-9 rounded-full bg-[#f1ede6] text-[#404944] flex items-center justify-center"
            title="Tìm kiếm"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-[#f1ede6] text-[#404944] flex items-center justify-center hover:bg-[#ece8e0] transition-colors"
            aria-label="Mở menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* 3. Navigation Bar (Desktop) */}
      <nav className="hidden lg:flex items-center justify-center gap-1 py-1.5 px-4 max-w-[1280px] mx-auto border-t border-[#e3ded5]/60 overflow-x-auto text-sm font-medium">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative px-3.5 py-1.5 rounded-full transition-all text-sm flex items-center gap-1.5 whitespace-nowrap ${
                isActive
                  ? 'bg-[#2c6653] text-white font-bold shadow-xs'
                  : 'text-[#404944] hover:text-[#2c6653] hover:bg-[#f1ede6]'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#fea58e] text-[#904b39] font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* 4. Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e3ded5] bg-[#fdf9f1] px-4 py-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <form onSubmit={handleSearchSubmit} className="flex relative items-center mb-2">
            <input
              type="search"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Tìm đồ bé trai, bé gái..."
              className="w-full h-10 pl-4 pr-10 rounded-full bg-[#f1ede6] text-[#1c1c17] text-sm outline-none border border-[#e3ded5]"
            />
            <button
              type="submit"
              className="absolute right-1 w-8 h-8 rounded-full bg-[#2c6653] text-white flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[16px]">search</span>
            </button>
          </form>

          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  currentTab === item.id
                    ? 'bg-[#2c6653] text-white font-bold'
                    : 'bg-[#f1ede6] text-[#404944] hover:bg-[#ece8e0]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#fea58e] text-[#904b39] font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#e3ded5] flex items-center justify-between text-xs text-[#5e6762]">
            <span>Hotline tư vấn: <strong>1900 6868</strong></span>
            <span>Đổi size tại nhà 7 ngày</span>
          </div>
        </div>
      )}
    </header>
  );
};
