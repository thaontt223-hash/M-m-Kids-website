import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      showToast('Đăng ký thành công!', 'Mã giảm giá 10% đã được gửi đến email của bạn.', 'gift');
      setEmailInput('');
    }
  };

  return (
    <footer className="w-full bg-[#f1ede6] mt-16 pt-12 sm:pt-16 pb-8 border-t border-[#e3ded5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Brand Block (2 cols on lg) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-[#2c6653]">
              Mầm Kids
            </span>
          </div>
          <p className="font-heading text-base font-semibold text-[#904b39]">
            “Growing with Love – Lớn lên trong yêu thương”
          </p>
          <p className="text-sm text-[#5e6762] max-w-md leading-relaxed">
            Thương hiệu thời trang hữu cơ trẻ em 3-12 tuổi. Chúng tôi mang đến cảm giác thoải mái, an lành cùng chất liệu cotton organic mềm dịu cho từng nhịp lớn khôn của bé yêu.
          </p>

          <div className="flex items-center gap-2.5 pt-2">
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#2c6653] shadow-xs cursor-pointer hover:bg-[#2c6653] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </span>
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#2c6653] shadow-xs cursor-pointer hover:bg-[#2c6653] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </span>
            <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#2c6653] shadow-xs cursor-pointer hover:bg-[#2c6653] hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">smart_display</span>
            </span>
          </div>
        </div>

        {/* Column 2: Liên kết nhanh */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-heading text-base font-bold text-[#1c1c17]">
            Khám phá
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-[#5e6762]">
            <li>
              <button
                onClick={() => onNavigate('boys')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Thời trang bé trai (3-12T)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('girls')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Thời trang bé gái (3-12T)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('mixmatch')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Phối đồ thông minh (Mix & Match)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('personalize')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Thêu tên độc bản cho bé
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('sizeguide')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Bảng chọn size thông minh
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Chính sách mua sắm */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-heading text-base font-bold text-[#1c1c17]">
            Chính sách & An tâm
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-[#5e6762]">
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Đổi trả 7 ngày tận nhà miễn phí
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('promotions')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Miễn phí vận chuyển từ 299k
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('tracking')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Tra cứu lộ trình đơn hàng
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Đồng kiểm hàng trước khi trả tiền
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#2c6653] transition-colors text-left"
              >
                Cam kết 100% Organic Cotton GOTS
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Voucher */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-heading text-base font-bold text-[#1c1c17]">
            Nhận ưu đãi 10%
          </h3>
          <p className="text-sm text-[#5e6762]">
            Đăng ký email để nhận mã giảm giá 10% cho đơn hàng đầu tiên của bé.
          </p>

          {subscribed ? (
            <div className="p-3 bg-[#b3efd7]/40 rounded-xl text-[#12503f] text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Đã đăng ký! Kiểm tra email nhận mã.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Nhập email của mẹ/ba..."
                className="h-10 px-4 rounded-full bg-white text-[#1c1c17] text-sm outline-none border border-[#e3ded5] focus:border-[#2c6653]"
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-full bg-[#2c6653] text-white text-sm font-semibold hover:bg-[#12503f] transition-all active:scale-95 shadow-xs"
              >
                Đăng ký ngay
              </button>
            </form>
          )}

          <div className="flex items-center gap-2 text-xs text-[#5e6762] pt-1">
            <span className="material-symbols-outlined text-[16px] text-[#2c6653]">card_giftcard</span>
            <span>Tặng kèm Túi Tote Canvas cho mọi đơn hàng</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-6 border-t border-[#e3ded5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5e6762]">
        <span>© 2025 Mầm Kids. All rights reserved. Tự hào thời trang cho bé Việt Nam.</span>
        <div className="flex items-center gap-4">
          <span>Hotline hỗ trợ: <strong className="text-[#2c6653]">1900 6868</strong> (8:00 - 21:30)</span>
        </div>
      </div>
    </footer>
  );
};
