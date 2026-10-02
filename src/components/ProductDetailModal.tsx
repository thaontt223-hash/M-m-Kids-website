import React, { useState } from 'react';
import { Product, PersonalizationData } from '../types';
import { useCart } from '../context/CartContext';
import { calculateRecommendedSize } from '../data/sizeGuide';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigate: (tab: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onNavigate
}) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '100');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'design' | 'fabric' | 'care' | 'reviews'>('design');

  // Personalization State
  const [enablePersonalization, setEnablePersonalization] = useState(product.isPersonalizable || false);
  const [childName, setChildName] = useState('Anna');
  const [selectedIcon, setSelectedIcon] = useState('🌸');
  const [selectedIconName, setSelectedIconName] = useState('Bông hoa');
  const [threadColor, setThreadColor] = useState('#2c6653');
  const [threadColorName, setThreadColorName] = useState('Xanh sage');
  const [position, setPosition] = useState('Ngực áo (Trái)');

  // Quick Size Assistant inside PDP
  const [showSizeAssistant, setShowSizeAssistant] = useState(false);
  const [assistantHeight, setAssistantHeight] = useState(105);
  const [assistantWeight, setAssistantWeight] = useState(16);

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val) + 'đ';
  };

  const handleAddToCart = () => {
    const personalizationData: PersonalizationData | undefined = enablePersonalization
      ? {
          enabled: true,
          childName: childName.trim() || 'Bé Yêu',
          icon: selectedIcon,
          iconName: selectedIconName,
          fontStyle: 'Nét thêu tay mềm mại',
          threadColor,
          threadColorName,
          position
        }
      : undefined;

    addToCart(product, selectedColor, selectedSize, quantity, personalizationData);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    onClose();
    onNavigate('checkout');
  };

  const recommended = calculateRecommendedSize(assistantHeight, assistantWeight);

  const crossSellItems = [
    {
      name: 'Áo khoác len mỏng Sage Cardigan',
      price: 185000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNYQpgp_ly_EGm6VZ8AMHdNfmYzhkJe-1k8FLq4JaMJeoWXLGug583PaVTtKXiwGoIYdYT6DUWcTjZgWrRQXqp2dXs1nCnD0YtVptWFh8nP8caKD5atTNe9m_dmWoCKrYm04bY6yryYIrFTbYXodSXyjhzEP119XV24pw147kevBu8R7W9bwiqHBJYHg7TcPo7Pc1RKyLjnWYwt2p3bFLZXynfOakFrk__fArSYKw0CQtgLXuurTmTKA'
    },
    {
      name: 'Set 2 Nơ kẹp tóc hoa nhí Handmade',
      price: 45000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAi54mNQ1lGI0uYu67-XsLqc8pHTk0NqC8lf4o71Q94TiV_R-WbMEaPGbNk5i2sYZIUUlyhK7VloC1AchYdoU6OP3V__XiHxamuqt_H_dBrkjHOf3xmLosBBpJTokO5UxAfxvgSU7cZ3UZM6c1Oztsqg0CCfytHhWwzgTEE1ebHDDtlo1xBJnhKm3hGBl9o3aAZGzAhipEXqQK0fF0773dRj6GpBurEO_ncaHUbjig9sbKpzc5xv_JhA'
    },
    {
      name: 'Sandal quai da mềm Meadow Steps',
      price: 199000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-2-9nlmlFb9tB5VoeanBbGrHJ04r6LuABaPPRHWQOaodKe5o7cYoaCgja-QDr9QMMq4PrhFkTptC5rWjNB5xqCTD3WmPSzwRKQdmmYkKNr_czbY11Wtm6tB3OhgzY-jUCiCEnIgd578OyMsE1yYwdXch9zo7DEnmYQ9DSGyx_YqikOZ1bcDtGJKF99oGvVvDeL1BYomrJ6j9q4nqbjbjGVkLpC-PBBGnt_pk2Pi9GBM2boDNzOcZPXQ'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-[#e3ded5]">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#404944] hover:text-[#904b39] hover:bg-white shadow-md transition-all cursor-pointer"
          aria-label="Đóng"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-8 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Gallery Column (5 cols) */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#f1ede6] shadow-sm">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#2c6653] font-heading text-xs font-bold shadow-xs">
                    100% Organic
                  </span>
                  {product.isBestSeller && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffdbd2] text-[#904b39] font-heading text-xs font-bold shadow-xs">
                      Bán chạy
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              {product.galleryImages.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  <button
                    onClick={() => setActiveImage(product.image)}
                    className={`w-16 h-20 rounded-xl overflow-hidden bg-[#f1ede6] shrink-0 border-2 transition-all ${
                      activeImage === product.image ? 'border-[#2c6653] scale-105' : 'border-transparent opacity-80'
                    }`}
                  >
                    <img src={product.image} alt="Thumb 1" className="w-full h-full object-cover" />
                  </button>
                  {product.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-20 rounded-xl overflow-hidden bg-[#f1ede6] shrink-0 border-2 transition-all ${
                        activeImage === img ? 'border-[#2c6653] scale-105' : 'border-transparent opacity-80'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx + 2}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Configuration Column (7 cols) */}
            <div className="md:col-span-7 flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#5e6762] mb-1">
                  <span>MÃ SP: {product.sku}</span>
                  <span>·</span>
                  <span className="text-[#2c6653] font-bold">
                    {product.gender === 'boy' ? 'Bé Trai' : product.gender === 'girl' ? 'Bé Gái' : 'Unisex'} ({product.ageRange} tuổi)
                  </span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1c1c17] leading-tight">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 mt-2">
                  <span className="font-heading text-2xl font-bold text-[#2c6653]">
                    {formatVND(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-[#888e89] line-through">
                      {formatVND(product.originalPrice)}
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded-full bg-[#ffdbd2] text-[#904b39] text-xs font-bold">
                    Tiết kiệm {formatVND(product.originalPrice - product.price)}
                  </span>
                </div>
              </div>

              {/* Color Selection */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#1c1c17]">
                  Màu sắc: <strong className="text-[#2c6653]">{selectedColor}</strong>
                </span>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedColor === c.name
                          ? 'bg-[#2c6653] text-white shadow-xs'
                          : 'bg-[#f1ede6] text-[#1c1c17] hover:bg-[#ece8e0]'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1c1c17]">
                    Kích thước: <strong className="text-[#2c6653]">Size {selectedSize}</strong>
                  </span>
                  <button
                    onClick={() => setShowSizeAssistant(!showSizeAssistant)}
                    className="text-xs text-[#2c6653] hover:underline font-bold flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[15px]">straighten</span>
                    <span>{showSizeAssistant ? 'Đóng trợ thủ' : 'Trợ thủ gợi ý size'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-12 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                        selectedSize === sz
                          ? 'bg-[#2c6653] text-white shadow-xs'
                          : 'bg-[#f1ede6] text-[#404944] hover:bg-[#ece8e0]'
                      }`}
                    >
                      Size {sz}
                    </button>
                  ))}
                </div>

                {/* Inline Assistant Widget */}
                {showSizeAssistant && (
                  <div className="mt-2 p-3.5 rounded-2xl bg-[#fdf9f1] border border-[#2c6653]/30 flex flex-col gap-2.5 text-xs">
                    <span className="font-heading font-bold text-[#2c6653] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">accessibility_new</span>
                      Kéo trượt số đo của bé:
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="flex justify-between text-[#5e6762] mb-1">
                          <span>Chiều cao:</span>
                          <strong className="text-[#2c6653]">{assistantHeight} cm</strong>
                        </div>
                        <input
                          type="range"
                          min="85"
                          max="155"
                          value={assistantHeight}
                          onChange={(e) => setAssistantHeight(Number(e.target.value))}
                          className="w-full accent-[#2c6653] h-1.5 bg-[#ece8e0] rounded-lg"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-[#5e6762] mb-1">
                          <span>Cân nặng:</span>
                          <strong className="text-[#2c6653]">{assistantWeight} kg</strong>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="45"
                          value={assistantWeight}
                          onChange={(e) => setAssistantWeight(Number(e.target.value))}
                          className="w-full accent-[#2c6653] h-1.5 bg-[#ece8e0] rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-[#e3ded5]">
                      <span>Khuyên dùng: <strong className="text-[#904b39] font-bold">{recommended.size}</strong> ({recommended.rangeText})</span>
                      <button
                        onClick={() => setSelectedSize(recommended.badge)}
                        className="px-2.5 py-1 rounded-full bg-[#2c6653] text-white font-bold text-[11px]"
                      >
                        Chọn Size {recommended.badge}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Personalization Section */}
              <div className="p-3.5 rounded-2xl bg-[#f7f3ec] border border-[#2c6653]/20 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={enablePersonalization}
                      onChange={(e) => setEnablePersonalization(e.target.checked)}
                      className="w-4 h-4 accent-[#2c6653] rounded"
                    />
                    <span className="font-heading text-xs sm:text-sm font-bold text-[#1c1c17]">
                      Thêu tên & icon cá nhân hóa cho bé
                    </span>
                  </label>
                  <span className="text-[11px] font-bold text-[#2c6653] bg-[#b3efd7]/60 px-2 py-0.5 rounded-full">
                    Miễn phí 0đ
                  </span>
                </div>

                {enablePersonalization && (
                  <div className="flex flex-col gap-2 pt-1 border-t border-[#e3ded5]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="text-[#5e6762] block mb-1 font-semibold">Tên/biệt danh bé:</label>
                        <input
                          type="text"
                          maxLength={12}
                          value={childName}
                          onChange={(e) => setChildName(e.target.value)}
                          placeholder="Ví dụ: Anna, Bống..."
                          className="w-full h-8 px-3 rounded-lg bg-white border border-[#e3ded5] text-sm text-[#1c1c17] outline-none focus:border-[#2c6653]"
                        />
                      </div>

                      <div>
                        <label className="text-[#5e6762] block mb-1 font-semibold">Vị trí thêu:</label>
                        <select
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                          className="w-full h-8 px-2 rounded-lg bg-white border border-[#e3ded5] text-xs outline-none text-[#1c1c17]"
                        >
                          <option value="Ngực áo (Trái)">Ngực áo (Trái)</option>
                          <option value="Tà áo dưới">Tà áo dưới</option>
                          <option value="Sau gáy cổ áo">Sau gáy cổ áo</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[#5e6762] block mb-1 text-xs font-semibold">Chọn icon:</label>
                      <div className="flex items-center gap-1.5">
                        {[
                          { icon: '🌸', name: 'Bông hoa' },
                          { icon: '🌱', name: 'Mầm cây' },
                          { icon: '🐻', name: 'Chú gấu' },
                          { icon: '⭐', name: 'Ngôi sao' },
                          { icon: '💖', name: 'Trái tim' },
                          { icon: '🌈', name: 'Cầu vồng' }
                        ].map((it) => (
                          <button
                            key={it.name}
                            type="button"
                            onClick={() => {
                              setSelectedIcon(it.icon);
                              setSelectedIconName(it.name);
                            }}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-base transition-all ${
                              selectedIcon === it.icon
                                ? 'bg-[#2c6653] text-white scale-110 shadow-xs'
                                : 'bg-white hover:bg-[#ece8e0]'
                            }`}
                            title={it.name}
                          >
                            {it.icon}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Preview banner */}
                    <div className="p-2 rounded-xl bg-white border border-dashed border-[#2c6653]/40 flex items-center justify-between text-xs text-[#2c6653]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">visibility</span>
                        <span>Mô phỏng thêu:</span>
                        <strong className="font-heading text-sm text-[#904b39] ml-1">
                          {selectedIcon} {childName || 'Tên bé'}
                        </strong>
                      </span>
                      <span className="text-[11px] text-[#5e6762]">Vị trí: {position}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity & Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                <div className="flex items-center justify-between bg-[#f1ede6] h-11 rounded-full px-2 w-full sm:w-32 shrink-0">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1c1c17] active:scale-95 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="font-heading font-bold text-sm text-[#1c1c17]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1c1c17] active:scale-95 shadow-xs"
                  >
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 w-full h-11 rounded-full bg-[#b3efd7]/60 hover:bg-[#b3efd7] text-[#12503f] font-heading font-bold text-sm flex items-center justify-center gap-1.5 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  <span>Thêm vào giỏ</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 w-full h-11 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-sm flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>Mua ngay</span>
                </button>
              </div>
            </div>
          </div>

          {/* Complete the Look Section */}
          <div className="pt-4 border-t border-[#e3ded5]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#904b39]">styler</span>
                <span>Gợi ý phối đồ hoàn hảo (Complete the Look)</span>
              </h3>
              <button
                onClick={() => {
                  onClose();
                  onNavigate('mixmatch');
                }}
                className="text-xs text-[#2c6653] font-bold hover:underline flex items-center gap-0.5"
              >
                <span>Mở phòng Mix & Match</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {crossSellItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5] flex items-center gap-3"
                >
                  <img src={item.image} alt={item.name} className="w-14 h-16 rounded-xl object-cover" />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="font-heading text-xs font-bold text-[#1c1c17] truncate">{item.name}</span>
                    <span className="text-xs font-bold text-[#2c6653]">{formatVND(item.price)}</span>
                    <button
                      onClick={() => {
                        addToCart(
                          {
                            ...product,
                            id: `cross-${idx}`,
                            name: item.name,
                            price: item.price
                          },
                          'Mặc định',
                          'Free size',
                          1
                        );
                      }}
                      className="mt-1 text-[11px] font-bold text-[#904b39] hover:underline text-left flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[13px]">add_circle</span>
                      <span>Thêm phối đồ</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Tabs: Description, Fabric, Washing, Reviews */}
          <div className="pt-2 border-t border-[#e3ded5]">
            <div className="flex items-center gap-2 border-b border-[#e3ded5] pb-2 overflow-x-auto text-xs sm:text-sm font-semibold">
              <button
                onClick={() => setActiveTab('design')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'design'
                    ? 'bg-[#2c6653] text-white font-bold'
                    : 'text-[#5e6762] hover:text-[#2c6653] hover:bg-[#f1ede6]'
                }`}
              >
                Thiết kế & Cảm hứng
              </button>
              <button
                onClick={() => setActiveTab('fabric')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'fabric'
                    ? 'bg-[#2c6653] text-white font-bold'
                    : 'text-[#5e6762] hover:text-[#2c6653] hover:bg-[#f1ede6]'
                }`}
              >
                Chất liệu hữu cơ
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'care'
                    ? 'bg-[#2c6653] text-white font-bold'
                    : 'text-[#5e6762] hover:text-[#2c6653] hover:bg-[#f1ede6]'
                }`}
              >
                Hướng dẫn giặt ủi
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                  activeTab === 'reviews'
                    ? 'bg-[#2c6653] text-white font-bold'
                    : 'text-[#5e6762] hover:text-[#2c6653] hover:bg-[#f1ede6]'
                }`}
              >
                Đánh giá ba mẹ ({product.reviewCount})
              </button>
            </div>

            <div className="py-4 text-xs sm:text-sm text-[#404944] leading-relaxed">
              {activeTab === 'design' && (
                <div className="flex flex-col gap-2">
                  <p>{product.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-[#5e6762] mt-1">
                    {product.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'fabric' && (
                <div className="flex flex-col gap-2">
                  <p>{product.fabricDetails}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-full bg-[#b3efd7]/50 text-[#12503f] font-bold text-xs">
                      Chứng nhận GOTS
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ffdf90]/50 text-[#755b01] font-bold text-xs">
                      Oeko-Tex Standard 100
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#f1ede6] text-[#404944] font-bold text-xs">
                      Không formaldehyde & thuốc nhuộm azo
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'care' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#f1ede6] rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2c6653]">local_laundry_service</span>
                    <span>Giặt máy nhẹ ở nhiệt độ dưới 30°C, ưu tiên dùng túi giặt</span>
                  </div>
                  <div className="p-3 bg-[#f1ede6] rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2c6653]">wb_sunny</span>
                    <span>Phơi trong bóng râm thoáng gió, tránh ánh nắng trưa gắt</span>
                  </div>
                  <div className="p-3 bg-[#f1ede6] rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2c6653]">iron</span>
                    <span>Ủi ở nhiệt độ thấp hoặc ủi hơi nước chuyên dụng</span>
                  </div>
                  <div className="p-3 bg-[#f1ede6] rounded-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#904b39]">block</span>
                    <span>Không dùng thuốc tẩy clo hay nước xả nồng độ cao</span>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="flex flex-col gap-3">
                  {(product.reviews || []).map((rev) => (
                    <div key={rev.id} className="p-3.5 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-heading font-bold text-sm text-[#1c1c17]">
                          {rev.author} ({rev.city}) · <span className="text-[#2c6653]">{rev.sizePurchased}</span>
                        </span>
                        <div className="flex text-[#c9a84e]">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-[16px] material-symbols-fill">
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5e6762] italic">"{rev.comment}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
