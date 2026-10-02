import React, { useState } from 'react';
import { MIX_MATCH_ITEMS } from '../data/products';
import { MixMatchItem, Product } from '../types';
import { useCart } from '../context/CartContext';

interface MixAndMatchPageProps {
  onNavigate: (tab: string) => void;
}

export const MixAndMatchPage: React.FC<MixAndMatchPageProps> = ({ onNavigate }) => {
  const { addToCart, showToast } = useCart();

  const tops = MIX_MATCH_ITEMS.filter((i) => i.category === 'top');
  const bottoms = MIX_MATCH_ITEMS.filter((i) => i.category === 'bottom');
  const accessories = MIX_MATCH_ITEMS.filter((i) => i.category === 'accessory');
  const footwears = MIX_MATCH_ITEMS.filter((i) => i.category === 'footwear');

  const [selectedTop, setSelectedTop] = useState<MixMatchItem>(tops[0]);
  const [selectedBottom, setSelectedBottom] = useState<MixMatchItem>(bottoms[0]);
  const [selectedAccessory, setSelectedAccessory] = useState<MixMatchItem | null>(accessories[0]);
  const [selectedFootwear, setSelectedFootwear] = useState<MixMatchItem | null>(footwears[0]);

  const [selectedSize, setSelectedSize] = useState('Size 100 (3-4 tuổi)');

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val) + 'đ';
  };

  // Pricing calculations
  const topPrice = selectedTop.price;
  const bottomPrice = selectedBottom.price;
  const accPrice = selectedAccessory ? selectedAccessory.price : 0;
  const footPrice = selectedFootwear ? selectedFootwear.price : 0;

  const originalTotal =
    selectedTop.originalPrice +
    selectedBottom.originalPrice +
    (selectedAccessory ? selectedAccessory.originalPrice : 0) +
    (selectedFootwear ? selectedFootwear.originalPrice : 0);

  const comboTotal = topPrice + bottomPrice + accPrice + footPrice;
  const setDiscount = 100000; // SET100 combo discount
  const finalComboPrice = Math.max(0, comboTotal - setDiscount);

  // Try Another Combination randomizer
  const randomizeOutfit = () => {
    const randomTop = tops[Math.floor(Math.random() * tops.length)];
    const randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    const randomAcc = accessories[Math.floor(Math.random() * accessories.length)];
    const randomFoot = footwears[Math.floor(Math.random() * footwears.length)];

    setSelectedTop(randomTop);
    setSelectedBottom(randomBottom);
    setSelectedAccessory(randomAcc);
    setSelectedFootwear(randomFoot);

    showToast('Phối set đồ ngẫu nhiên!', 'Stylist Mầm Kids vừa gợi ý một set trang phục mới cho bé.', 'info');
  };

  // Add all items in combo to cart
  const handleAddCompleteSet = () => {
    const itemsToAdd = [selectedTop, selectedBottom];
    if (selectedAccessory) itemsToAdd.push(selectedAccessory);
    if (selectedFootwear) itemsToAdd.push(selectedFootwear);

    itemsToAdd.forEach((item) => {
      const mockProduct: Product = {
        id: item.id,
        sku: `MK-MM-${item.id}`,
        name: item.name,
        vietnameseName: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        category: item.category === 'top' ? 'tshirt' : item.category === 'bottom' ? 'shorts' : 'accessory',
        gender: item.gender,
        ageRange: '3-6',
        rating: 5.0,
        reviewCount: 42,
        image: item.image,
        galleryImages: [],
        colors: [{ name: item.colorName, hex: item.colorHex }],
        sizes: ['90', '100', '110', '120'],
        description: item.description,
        fabricDetails: '100% Organic Cotton',
        highlights: ['Set Mix & Match']
      };

      addToCart(mockProduct, item.colorName, selectedSize.split(' ')[1] || '100', 1);
    });

    showToast(
      'Đã thêm trọn bộ set đồ vào giỏ!',
      `Bao gồm ${itemsToAdd.length} món. Nhập mã SET100 để giảm 100.000đ khi thanh toán.`,
      'gift'
    );
  };

  return (
    <div className="w-full flex flex-col">
      {/* Top Banner Header */}
      <section className="w-full bg-[#f7f3ec] py-6 sm:py-8 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdbd2] text-[#904b39] text-xs font-bold w-fit">
              <span className="material-symbols-outlined text-[16px]">styler</span>
              <span>Phòng Phối Đồ Thông Minh • Mix & Match Studio</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#1c1c17] tracking-tight">
              Tự Tay Phối Trang Phục Cho Bé Yêu
            </h1>
            <p className="text-xs sm:text-sm text-[#5e6762] max-w-xl">
              Chọn áo, quần và phụ kiện hài hòa phong cách. Xem trước bộ trang phục hoàn chỉnh trên ma-nơ-canh và nhận ngay ưu đãi <strong>SET100</strong> giảm 100.000đ khi thêm trọn bộ vào giỏ hàng.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={randomizeOutfit}
              className="h-11 px-5 rounded-full bg-white border border-[#2c6653] text-[#2c6653] hover:bg-[#f1ede6] font-heading font-bold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">shuffle</span>
              <span>Thử phối ngẫu nhiên (Try Another)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Studio Canvas */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Interactive Mannequin / Outfit Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sticky top-36">
            <div className="relative w-full rounded-3xl bg-gradient-to-b from-[#f7f3ec] to-[#f1ede6] p-6 shadow-sm border border-[#e3ded5] flex flex-col items-center">
              {/* Boutique Tag */}
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#2c6653] shadow-xs flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px]">checkroom</span>
                <span>Bộ trang phục đang phối</span>
              </div>

              <div className="absolute top-4 right-4 bg-[#ffdbd2] text-[#904b39] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                Ưu đãi -100k
              </div>

              {/* Mannequin / Outfit Collage Display */}
              <div className="w-full max-w-[340px] flex flex-col items-center gap-3 pt-8 pb-4">
                {/* Accessory Header Preview */}
                {selectedAccessory && (
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-xs text-xs font-bold text-[#1c1c17]">
                    <span className="material-symbols-outlined text-[16px] text-[#2c6653]">wb_sunny</span>
                    <span>{selectedAccessory.name}</span>
                  </div>
                )}

                {/* Top Garment Card */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e3ded5] relative group">
                  <img
                    src={selectedTop.image}
                    alt={selectedTop.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/95 px-2 py-0.5 rounded text-[11px] font-bold text-[#2c6653]">
                    Áo: {selectedTop.name}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#2c6653] text-white px-2 py-0.5 rounded text-[11px] font-bold">
                    {formatVND(selectedTop.price)}
                  </div>
                </div>

                {/* Bottom Garment Card */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e3ded5] relative group">
                  <img
                    src={selectedBottom.image}
                    alt={selectedBottom.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/95 px-2 py-0.5 rounded text-[11px] font-bold text-[#2c6653]">
                    Quần/Váy: {selectedBottom.name}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#2c6653] text-white px-2 py-0.5 rounded text-[11px] font-bold">
                    {formatVND(selectedBottom.price)}
                  </div>
                </div>

                {/* Footwear Footer Preview */}
                {selectedFootwear && (
                  <div className="w-full flex items-center justify-between p-2.5 rounded-2xl bg-white shadow-xs border border-[#e3ded5]">
                    <div className="flex items-center gap-2">
                      <img src={selectedFootwear.image} alt={selectedFootwear.name} className="w-10 h-10 rounded-xl object-cover" />
                      <span className="text-xs font-bold text-[#1c1c17]">{selectedFootwear.name}</span>
                    </div>
                    <span className="text-xs font-bold text-[#2c6653]">{formatVND(selectedFootwear.price)}</span>
                  </div>
                )}
              </div>

              {/* Total Price & Add to Cart Block */}
              <div className="w-full pt-4 border-t border-[#e3ded5] flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-[#5e6762]">Giá gốc cả set:</span>
                    <span className="text-sm line-through text-[#888e89]">{formatVND(originalTotal)}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-[#904b39] font-bold">Giảm 100k khi mua combo:</span>
                    <span className="font-heading text-2xl font-bold text-[#2c6653]">{formatVND(finalComboPrice)}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1c1c17]">Chọn kích cỡ cho cả set:</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-white border border-[#e3ded5] text-xs font-bold text-[#1c1c17] outline-none"
                  >
                    <option value="Size 90 (2-3 tuổi)">Size 90 (10-13kg • 2-3 tuổi)</option>
                    <option value="Size 100 (3-4 tuổi)">Size 100 (13-16kg • 3-4 tuổi)</option>
                    <option value="Size 110 (4-5 tuổi)">Size 110 (16-19kg • 4-5 tuổi)</option>
                    <option value="Size 120 (5-6 tuổi)">Size 120 (19-23kg • 5-6 tuổi)</option>
                    <option value="Size 130 (7-8 tuổi)">Size 130 (24-28kg • 7-8 tuổi)</option>
                  </select>
                </div>

                <button
                  onClick={handleAddCompleteSet}
                  className="w-full h-12 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                  <span>Thêm trọn bộ vào giỏ hàng (Add Complete Set)</span>
                </button>

                <p className="text-center text-[11px] text-[#5e6762]">
                  * Tự động áp dụng voucher <strong>SET100</strong> và tặng kèm 01 Túi Tote Canvas Mầm Kids 0đ.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Wardrobe Selectors (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Choose Top (Chọn Áo) */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#b3efd7] text-[#12503f] text-xs flex items-center justify-center font-bold">1</span>
                  <span>Chọn Áo (Top)</span>
                </span>
                <span className="text-xs font-bold text-[#2c6653]">{selectedTop.name}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {tops.map((top) => {
                  const isSelected = selectedTop.id === top.id;
                  return (
                    <button
                      key={top.id}
                      onClick={() => setSelectedTop(top)}
                      className={`p-2.5 rounded-2xl flex flex-col text-left transition-all border ${
                        isSelected
                          ? 'bg-[#f7f3ec] border-[#2c6653] ring-2 ring-[#2c6653] shadow-xs'
                          : 'bg-white border-[#e3ded5] hover:border-[#2c6653]'
                      }`}
                    >
                      <img src={top.image} alt={top.name} className="w-full aspect-[4/3] rounded-xl object-cover mb-2" />
                      <span className="font-heading text-xs font-bold text-[#1c1c17] line-clamp-1">{top.name}</span>
                      <span className="text-xs font-bold text-[#2c6653] mt-1">{formatVND(top.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Choose Bottom (Chọn Quần / Váy) */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#ffdbd2] text-[#904b39] text-xs flex items-center justify-center font-bold">2</span>
                  <span>Chọn Quần / Váy (Bottoms)</span>
                </span>
                <span className="text-xs font-bold text-[#904b39]">{selectedBottom.name}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {bottoms.map((bt) => {
                  const isSelected = selectedBottom.id === bt.id;
                  return (
                    <button
                      key={bt.id}
                      onClick={() => setSelectedBottom(bt)}
                      className={`p-2.5 rounded-2xl flex flex-col text-left transition-all border ${
                        isSelected
                          ? 'bg-[#f7f3ec] border-[#904b39] ring-2 ring-[#904b39] shadow-xs'
                          : 'bg-white border-[#e3ded5] hover:border-[#904b39]'
                      }`}
                    >
                      <img src={bt.image} alt={bt.name} className="w-full aspect-[4/3] rounded-xl object-cover mb-2" />
                      <span className="font-heading text-xs font-bold text-[#1c1c17] line-clamp-1">{bt.name}</span>
                      <span className="text-xs font-bold text-[#2c6653] mt-1">{formatVND(bt.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Choose Accessories (Chọn Phụ kiện) */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#ffdf90] text-[#755b01] text-xs flex items-center justify-center font-bold">3</span>
                  <span>Phụ kiện mùa hè (Accessories)</span>
                </span>
                <span className="text-xs text-[#5e6762]">
                  {selectedAccessory ? selectedAccessory.name : 'Không chọn'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <button
                  onClick={() => setSelectedAccessory(null)}
                  className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all border ${
                    selectedAccessory === null
                      ? 'bg-[#f7f3ec] border-[#2c6653] ring-2 ring-[#2c6653]'
                      : 'bg-white border-[#e3ded5] text-[#5e6762]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px] text-[#888e89] mb-1">block</span>
                  <span className="text-xs font-bold">Không phụ kiện</span>
                </button>

                {accessories.map((acc) => {
                  const isSelected = selectedAccessory?.id === acc.id;
                  return (
                    <button
                      key={acc.id}
                      onClick={() => setSelectedAccessory(acc)}
                      className={`p-2.5 rounded-2xl flex flex-col text-left transition-all border ${
                        isSelected
                          ? 'bg-[#f7f3ec] border-[#2c6653] ring-2 ring-[#2c6653] shadow-xs'
                          : 'bg-white border-[#e3ded5] hover:border-[#2c6653]'
                      }`}
                    >
                      <img src={acc.image} alt={acc.name} className="w-full aspect-[4/3] rounded-xl object-cover mb-2" />
                      <span className="font-heading text-xs font-bold text-[#1c1c17] line-clamp-1">{acc.name}</span>
                      <span className="text-xs font-bold text-[#2c6653] mt-1">{formatVND(acc.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Choose Footwear (Chọn Giày dép) */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#f1ede6] text-[#2c6653] text-xs flex items-center justify-center font-bold">4</span>
                  <span>Giày dép êm chân (Footwear)</span>
                </span>
                <span className="text-xs text-[#5e6762]">
                  {selectedFootwear ? selectedFootwear.name : 'Không chọn'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedFootwear(null)}
                  className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all border ${
                    selectedFootwear === null
                      ? 'bg-[#f7f3ec] border-[#2c6653] ring-2 ring-[#2c6653]'
                      : 'bg-white border-[#e3ded5] text-[#5e6762]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px] text-[#888e89] mb-1">block</span>
                  <span className="text-xs font-bold">Không giày</span>
                </button>

                {footwears.map((fw) => {
                  const isSelected = selectedFootwear?.id === fw.id;
                  return (
                    <button
                      key={fw.id}
                      onClick={() => setSelectedFootwear(fw)}
                      className={`p-2.5 rounded-2xl flex flex-col text-left transition-all border ${
                        isSelected
                          ? 'bg-[#f7f3ec] border-[#2c6653] ring-2 ring-[#2c6653] shadow-xs'
                          : 'bg-white border-[#e3ded5] hover:border-[#2c6653]'
                      }`}
                    >
                      <img src={fw.image} alt={fw.name} className="w-full aspect-[4/3] rounded-xl object-cover mb-2" />
                      <span className="font-heading text-xs font-bold text-[#1c1c17] line-clamp-1">{fw.name}</span>
                      <span className="text-xs font-bold text-[#2c6653] mt-1">{formatVND(fw.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
