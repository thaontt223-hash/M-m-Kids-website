import React from 'react';
import { PROMOTIONS, FREE_GIFT_ITEM } from '../data/promotions';
import { useCart } from '../context/CartContext';

interface PromotionsPageProps {
  onNavigate: (tab: string) => void;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({ onNavigate }) => {
  const { applyCoupon, appliedPromo, showToast } = useCart();

  const handleCopyAndApply = (code: string) => {
    navigator.clipboard?.writeText(code);
    const res = applyCoupon(code);
    if (!res.success) {
      showToast('Đã sao chép mã!', `Mã ${code} đã lưu vào bộ nhớ tạm. Hãy thêm sản phẩm vào giỏ để kích hoạt.`, 'info');
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Top Banner */}
      <section className="w-full bg-[#f7f3ec] py-8 sm:py-12 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffdf90] text-[#755b01] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">redeem</span>
            Ưu Đãi Đặc Quyền Mầm Kids
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#1c1c17] tracking-tight">
            Voucher & Quà Tặng Mùa Hè
          </h1>
          <p className="text-sm sm:text-base text-[#5e6762] max-w-2xl leading-relaxed">
            Mầm Kids dành tặng ba mẹ những món quà ngọt ngào nhất để hành trình chăm sóc và làm đẹp cho bé yêu thêm trọn vẹn niềm vui.
          </p>
        </div>
      </section>

      {/* Main Promotions Content */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 w-full flex flex-col gap-10">
        {/* FREE GIFT BANNER */}
        <div className="rounded-3xl bg-gradient-to-r from-[#ffdbd2]/70 via-[#f7f3ec] to-[#b3efd7]/50 p-6 sm:p-8 border border-[#fea58e] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[#fea58e] p-2 flex items-center justify-center shrink-0 shadow-xs">
              <span className="material-symbols-outlined text-[42px] text-[#904b39]">card_giftcard</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="bg-[#904b39] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Quà tặng 0đ
                </span>
                <span className="text-xs font-bold text-[#904b39]">Tự động thêm vào mọi đơn hàng</span>
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1c1c17]">
                {FREE_GIFT_ITEM.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#5e6762] max-w-xl">
                {FREE_GIFT_ITEM.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 shrink-0 w-full md:w-auto">
            <span className="text-xs text-[#888e89] line-through">Trị giá 89.000đ</span>
            <span className="font-heading text-2xl font-bold text-[#2c6653]">Miễn Phí 0đ</span>
            <button
              onClick={() => onNavigate('cart')}
              className="mt-1 w-full md:w-auto px-5 py-2.5 rounded-full bg-[#2c6653] text-white font-heading font-bold text-xs hover:bg-[#12503f] transition-all shadow-xs"
            >
              Xem trong giỏ hàng
            </button>
          </div>
        </div>

        {/* 4 PROMOTION CARDS GRID */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-[#1c1c17] mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#2c6653]">loyalty</span>
            <span>Danh Sách Mã Giảm Giá Đang Áp Dụng</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROMOTIONS.map((promo) => {
              const isApplied = appliedPromo?.code === promo.code;

              return (
                <div
                  key={promo.code}
                  className={`rounded-3xl p-6 bg-white border transition-all flex flex-col justify-between gap-5 relative overflow-hidden shadow-xs ${
                    isApplied
                      ? 'border-[#2c6653] ring-2 ring-[#2c6653]'
                      : 'border-[#e3ded5] hover:border-[#2c6653]'
                  }`}
                >
                  {/* Decorative Ticket Notch */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#fdf9f1] border border-[#e3ded5]" />
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#fdf9f1] border border-[#e3ded5]" />

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-[#f1ede6] text-[#2c6653] text-xs font-bold uppercase tracking-wider">
                        {promo.tag}
                      </span>
                      {isApplied && (
                        <span className="px-3 py-0.5 rounded-full bg-[#b3efd7] text-[#12503f] text-xs font-bold flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">check</span>
                          Đang kích hoạt
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#1c1c17] mt-1">
                      {promo.title}
                    </h3>

                    <p className="text-sm text-[#5e6762] leading-relaxed">
                      {promo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-[#e3ded5]">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#888e89]">Mã khuyến mãi:</span>
                      <strong className="font-mono text-xl font-bold text-[#2c6653] tracking-wider">
                        {promo.code}
                      </strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyAndApply(promo.code)}
                        className={`h-11 px-5 rounded-full font-heading font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all active:scale-95 shadow-xs cursor-pointer ${
                          isApplied
                            ? 'bg-[#2c6653] text-white'
                            : 'bg-[#f1ede6] hover:bg-[#2c6653] text-[#1c1c17] hover:text-white'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                        <span>{isApplied ? 'Đã kích hoạt' : 'Áp dụng mã'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HOW TO USE GUIDE */}
        <div className="rounded-3xl bg-[#f7f3ec] p-6 sm:p-8 border border-[#e3ded5]">
          <h3 className="font-heading text-lg font-bold text-[#1c1c17] mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#2c6653]">help</span>
            <span>Hướng Dẫn Sử Dụng Mã Khuyến Mãi</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#5e6762]">
            <div className="p-4 bg-white rounded-2xl border border-[#e3ded5] flex flex-col gap-1.5">
              <strong className="text-[#1c1c17] font-bold">1. Chọn sản phẩm ưng ý</strong>
              <p>Thêm quần áo, váy hoặc set mix & match bé yêu thích vào giỏ hàng.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#e3ded5] flex flex-col gap-1.5">
              <strong className="text-[#1c1c17] font-bold">2. Nhập mã tại Giỏ hàng</strong>
              <p>Nhập một trong các mã WELCOME50, SET100, MAMM20 hoặc bấm "Áp dụng mã" tại trang này.</p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#e3ded5] flex flex-col gap-1.5">
              <strong className="text-[#1c1c17] font-bold">3. Nhận chiết khấu & Túi Tote</strong>
              <p>Hệ thống tự động trừ tiền chiết khấu và đính kèm miễn phí Túi Tote Canvas vào đơn hàng.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
