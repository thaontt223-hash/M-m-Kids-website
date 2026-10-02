import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface OrderTrackingPageProps {
  onNavigate: (tab: string) => void;
}

export const OrderTrackingPage: React.FC<OrderTrackingPageProps> = ({ onNavigate }) => {
  const { latestOrder, showToast } = useCart();
  const [orderIdInput, setOrderIdInput] = useState(latestOrder ? latestOrder.orderId : 'MK-89210');
  const [phoneInput, setPhoneInput] = useState(latestOrder ? latestOrder.phone : '0912 345 678');
  const [searched, setSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    showToast('Đang tra cứu...', `Đã tìm thấy thông tin đơn hàng #${orderIdInput}`, 'success');
  };

  const downloadReceipt = () => {
    showToast('Tải biên lai điện tử', 'Biên lai đơn hàng đã được gửi tới email của mẹ.', 'info');
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="w-full bg-[#f7f3ec] py-8 sm:py-10 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b3efd7] text-[#12503f] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">local_shipping</span>
            Tra Cứu & Theo Dõi Đơn Hàng
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#1c1c17] tracking-tight">
            Lộ Trình Đơn Hàng Của Bé
          </h1>
          <p className="text-xs sm:text-sm text-[#5e6762] max-w-xl leading-relaxed">
            Nhập mã đơn hàng và số điện thoại để kiểm tra trạng thái sản xuất, tiến độ thêu tên cá nhân hóa và thời gian shipper giao hàng tận nhà.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 w-full flex flex-col gap-8">
        {/* Search Input Box */}
        <div className="p-6 rounded-3xl bg-white border border-[#e3ded5] shadow-xs">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            <div className="md:col-span-5 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1c1c17] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#2c6653]">tag</span>
                <span>Mã đơn hàng (Order Number)</span>
              </label>
              <input
                type="text"
                required
                value={orderIdInput}
                onChange={(e) => setOrderIdInput(e.target.value.toUpperCase())}
                placeholder="Ví dụ: MK-89210"
                className="h-11 px-4 rounded-xl bg-[#f1ede6] font-mono text-sm font-bold text-[#1c1c17] outline-none border border-transparent focus:border-[#2c6653]"
              />
            </div>

            <div className="md:col-span-4 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1c1c17] flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#2c6653]">phone</span>
                <span>Số điện thoại đặt hàng</span>
              </label>
              <input
                type="tel"
                required
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="0912 345 678"
                className="h-11 px-4 rounded-xl bg-[#f1ede6] text-sm text-[#1c1c17] outline-none border border-transparent focus:border-[#2c6653]"
              />
            </div>

            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full h-11 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">search</span>
                <span>Tra cứu đơn hàng</span>
              </button>
            </div>
          </form>
        </div>

        {/* Tracking Details View */}
        {searched && (
          <div className="flex flex-col gap-6">
            {/* Order Overview Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#b3efd7]/50 text-[#2c6653] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px]">local_shipping</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl font-bold text-[#1c1c17]">#{orderIdInput}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#2c6653] text-white text-[11px] font-bold animate-pulse">
                      Đang giao hàng
                    </span>
                  </div>
                  <span className="text-xs text-[#5e6762] mt-0.5">
                    Đặt hàng: 24/10/2025 · Người nhận: <strong>Nguyễn Thu Hà ({phoneInput})</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#fdf9f1] rounded-2xl border border-[#ffdf90] flex flex-col text-xs">
                  <span className="text-[#5e6762]">Dự kiến phát hàng:</span>
                  <strong className="text-sm font-bold text-[#2c6653]">Ngày mai (Trong giờ hành chính)</strong>
                </div>
              </div>
            </div>

            {/* 5-Step Visual Stepper */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-6">
              <h2 className="font-heading text-lg font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2c6653]">timeline</span>
                <span>Tiến độ xử lý đơn hàng</span>
              </h2>

              {/* Responsive Stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
                {[
                  { step: '1', title: 'Đặt hàng thành công', time: '24/10 · 14:32', done: true, icon: 'check' },
                  { step: '2', title: 'Xác nhận kích cỡ', time: '24/10 · 15:10', done: true, icon: 'check' },
                  { step: '3', title: 'Thêu tên & Khử khuẩn', time: '24/10 · 18:45', done: true, icon: 'check' },
                  { step: '4', title: 'Đang vận chuyển', time: 'Hôm nay · 08:30', active: true, icon: 'local_shipping' },
                  { step: '5', title: 'Giao hàng thành công', time: 'Dự kiến 26/10', future: true, icon: 'inventory_2' }
                ].map((s) => (
                  <div
                    key={s.step}
                    className={`flex flex-col items-center text-center p-3 rounded-2xl ${
                      s.active
                        ? 'bg-[#b3efd7]/30 border border-[#2c6653]'
                        : s.done
                        ? 'bg-[#f7f3ec]'
                        : 'bg-[#f1ede6]/60 opacity-60'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 shadow-xs ${
                        s.done
                          ? 'bg-[#2c6653] text-white'
                          : s.active
                          ? 'bg-[#2c6653] text-white ring-4 ring-[#b3efd7] animate-bounce'
                          : 'bg-[#e3ded5] text-[#5e6762]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">{s.icon}</span>
                    </div>
                    <span className="font-heading text-xs font-bold text-[#1c1c17]">{s.title}</span>
                    <span className="text-[11px] text-[#5e6762] mt-0.5">{s.time}</span>
                  </div>
                ))}
              </div>

              {/* Shipper Contact Card */}
              <div className="p-4 rounded-2xl bg-[#fdf9f1] border border-[#2c6653]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2c6653] text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">motorcycle</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-[#5e6762]">Shipper đang giao:</span>
                    <strong className="text-sm font-bold text-[#1c1c17]">Bùi Văn Toàn (GHTK Express)</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:0988123456"
                    className="px-4 py-2 rounded-full bg-[#2c6653] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#12503f]"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    <span>Gọi shipper: 0988 123 456</span>
                  </a>

                  <button
                    onClick={downloadReceipt}
                    className="px-4 py-2 rounded-full bg-white border border-[#e3ded5] text-[#1c1c17] font-bold text-xs hover:bg-[#f1ede6]"
                  >
                    Tải biên lai PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
