import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '100');

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val) + 'đ';
  };

  const isFavorite = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedColor, selectedSize, 1);
  };

  return (
    <div
      onClick={() => onSelect(product)}
      className="group flex flex-col bg-white rounded-3xl p-3 sm:p-3.5 shadow-[0_2px_12px_-2px_rgba(110,105,95,0.06)] hover:shadow-[0_8px_24px_-4px_rgba(44,102,83,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-[#e3ded5]/70"
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#f1ede6] mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
          {product.isBestSeller && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbd2] text-[#904b39] font-heading text-xs font-bold shadow-xs">
              Bán chạy
            </span>
          )}
          {product.isNewArrival && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#ffdf90] text-[#755b01] font-heading text-xs font-bold shadow-xs">
              Mới về
            </span>
          )}
          <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#2c6653] text-[11px] font-medium">
            {product.ageRange === '3-6' ? '3–6 tuổi' : '7–12 tuổi'}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Yêu thích"
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-xs ${
            isFavorite
              ? 'bg-[#ffdbd2] text-[#904b39]'
              : 'bg-white/80 hover:bg-white text-[#5e6762] hover:text-[#904b39]'
          }`}
        >
          <span className={`material-symbols-outlined text-[18px] ${isFavorite ? 'material-symbols-fill' : ''}`}>
            favorite
          </span>
        </button>

        {product.isPersonalizable && (
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[#2c6653] text-[10px] font-bold flex items-center gap-1 shadow-xs">
            <span className="material-symbols-outlined text-[12px]">draw</span>
            <span>Thêu tên 0đ</span>
          </div>
        )}
      </div>

      {/* Content info */}
      <div className="flex flex-col flex-1 justify-between gap-2.5 px-0.5">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-[#c9a84e] mb-1 text-xs">
            <span className="material-symbols-outlined text-[14px] material-symbols-fill">star</span>
            <span className="font-bold text-[#1c1c17]">{product.rating.toFixed(1)}</span>
            <span className="text-[#888e89]">({product.reviewCount})</span>
          </div>

          {/* Product Name */}
          <h3 className="font-heading text-sm sm:text-base font-bold text-[#1c1c17] group-hover:text-[#2c6653] transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[#5e6762] line-clamp-1 mt-0.5">
            {product.description}
          </p>
        </div>

        {/* Price & Variant preview */}
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-heading text-base sm:text-lg text-[#2c6653] font-bold">
              {formatVND(product.price)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-[#888e89] line-through">
                {formatVND(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Colors & Sizes Quick Selectors */}
          <div className="flex items-center justify-between gap-1 pb-2 border-t border-[#f1ede6] pt-1.5">
            {/* Color preview dots */}
            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              {product.colors.slice(0, 3).map((col) => (
                <button
                  key={col.name}
                  onClick={() => setSelectedColor(col.name)}
                  title={col.name}
                  className={`w-4 h-4 rounded-full transition-transform ${
                    selectedColor === col.name ? 'ring-2 ring-[#2c6653] scale-110' : ''
                  }`}
                  style={{ backgroundColor: col.hex }}
                />
              ))}
            </div>

            {/* Size badges */}
            <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
              {product.sizes.slice(0, 3).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-1.5 py-0.2 rounded text-[11px] font-bold transition-colors ${
                    selectedSize === sz
                      ? 'bg-[#2c6653] text-white'
                      : 'bg-[#f1ede6] text-[#5e6762] hover:bg-[#ece8e0]'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            <button
              onClick={handleQuickAdd}
              className="h-9 px-2 rounded-full bg-[#b3efd7]/50 hover:bg-[#b3efd7] text-[#12503f] text-xs font-bold flex items-center justify-center gap-1 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
              <span>Thêm giỏ</span>
            </button>

            <button
              onClick={() => onSelect(product)}
              className="h-9 px-2 rounded-full bg-[#f1ede6] hover:bg-[#ece8e0] text-[#1c1c17] text-xs font-medium flex items-center justify-center transition-all"
            >
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
