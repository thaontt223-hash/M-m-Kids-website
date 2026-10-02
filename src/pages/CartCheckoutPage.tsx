import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FREE_GIFT_ITEM, PROMOTIONS } from '../data/promotions';

interface CartCheckoutPageProps {
  onNavigate: (tab: string) => void;
}

export const CartCheckoutPage: React.FC<CartCheckoutPageProps> = ({ onNavigate }) => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    shippingFee,
    grandTotal,
    totalItemsCount,
    freeShippingProgress,
    freeShippingThreshold,
    appliedPromo,
    applyCoupon,
    removeCoupon,
    placeOrder,
    latestOrder
  } = useCart();

  // Checkout Form State
  const [checkoutType, setCheckoutType] = useState<'guest' | 'member'>('guest');
  const [custName, setCustName] = useState('Nguyễn Thu Hà');
  const [custPhone, setCustPhone] = useState('0912 345 678');
  const [custEmail, setCustEmail] = useState('ha.nguyen@gmail.com');
  const [province, setProvince] = useState('Hà Nội');
  const [district, setDistrict] = useState('Quận Cầu Giấy');
  const [ward, setWard] = useState('Phường Dịch Vọng Hậu');
  const [address, setAddress] = useState('Số 45 Ngõ 12 Đường Trần Thái Tông');
  const [note, setNote] = useState('Giao giờ hành chính, bọc gói hộp quà xinh giúp mẹ nhé!');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'vietqr'>('cod');
  const [confirmedReview, setConfirmedReview] = useState(true);

  // Voucher Input State
  const [couponCode, setCouponCode] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ text: string; isError: boolean } | null>(null);

  // View state: 'cart_checkout' or 'order_confirmation'
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val) + 'đ';
  };

  const handleApplyCoupon = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!couponCode.trim()) return;

    const res = applyCoupon(couponCode);
    setCouponFeedback({
      text: res.message,
      isError: !res.success
    });
  };

  const handleQuickApplyPromo = (code: string) => {
    setCouponCode(code);
    const res = applyCoupon(code);
    setCouponFeedback({
      text: res.message,
      isError: !res.success
    });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!confirmedReview) {
      alert('Vui lòng tích xác nhận đã kiểm tra thông tin giao hàng & chi tiết thêu tên bé.');
      return;
    }

    if (items.length === 0) {
      alert('Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi thanh toán.');
      return;
    }

    const orderResult = placeOrder({
      customerName: custName,
      phone: custPhone,
      email: custEmail,
      province,
      district,
      ward,
      address,
      note,
      paymentMethod,
      checkoutType,
      items: [...items],
      subtotal,
      discount: discountAmount,
      shippingFee,
      grandTotal,
      appliedPromo: appliedPromo ? appliedPromo.code : undefined
    });

    setCompletedOrder(orderResult);
    setIsOrderSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. ORDER CONFIRMATION VIEW
  if (isOrderSubmitted && completedOrder) {
    return (
      <div className="w-full py-12 px-4 sm:px-6 bg-[#fdf9f1]">
        <div className="max-w-[920px] mx-auto flex flex-col items-center">
          {/* Animated Celebration Icon */}
          <div className="w-20 h-20 rounded-full bg-[#b3efd7] flex items-center justify-center text-[#12503f] mb-4 shadow-sm">
            <span className="material-symbols-outlined text-[44px]">check_circle</span>
          </div>

          <span className="text-xs font-bold text-[#12503f] bg-[#b3efd7]/50 px-4 py-1 rounded-full uppercase tracking-wider mb-2">
            Đặt hàng thành công!
          </span>

          <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#1c1c17] text-center tracking-tight">
            Cảm ơn ba mẹ đã tin chọn Mầm Kids!
          </h1>

          <p className="text-sm sm:text-base text-[#5e6762] mt-2 max-w-xl text-center leading-relaxed">
            Kiện hàng của bé với mã đơn <strong className="text-[#2c6653] font-mono text-lg">#{completedOrder.orderId}</strong> đã được tiếp nhận. Đội ngũ xưởng may hữu cơ đang chuẩn bị và đóng gói chu đáo cho bé.
          </p>

          {/* Complete Order Recap Card */}
          <div className="w-full mt-8 rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-[#e3ded5] flex flex-col gap-6">
            {/* Meta bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#f7f3ec] border border-[#e3ded5]">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[26px] text-[#2c6653]">receipt_long</span>
                <div>
                  <span className="text-[11px] text-[#5e6762] block">Mã đơn hàng</span>
                  <strong className="font-mono text-base text-[#2c6653] font-bold">#{completedOrder.orderId}</strong>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div>
                  <span className="text-[#5e6762] block">Dự kiến giao hàng</span>
                  <strong className="text-[#1c1c17]">2 - 3 Ngày tới</strong>
                </div>
                <div>
                  <span className="text-[#5e6762] block">Trạng thái</span>
                  <span className="bg-[#2c6653] text-white px-2 py-0.5 rounded-full font-bold">Đang xử lý</span>
                </div>
              </div>
            </div>

            {/* Two column recap */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              {/* Recipient */}
              <div className="p-4 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5] flex flex-col gap-2.5">
                <h3 className="font-heading font-bold text-sm text-[#1c1c17] flex items-center gap-1.5 pb-2 border-b border-[#e3ded5]">
                  <span className="material-symbols-outlined text-[18px] text-[#2c6653]">person_pin</span>
                  <span>Thông tin nhận hàng</span>
                </h3>
                <div className="flex justify-between">
                  <span className="text-[#5e6762]">Người nhận:</span>
                  <strong className="text-[#1c1c17]">{completedOrder.customerName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5e6762]">Số điện thoại:</span>
                  <strong className="text-[#1c1c17]">{completedOrder.phone}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5e6762]">Email:</span>
                  <span className="text-[#1c1c17]">{completedOrder.email}</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[#5e6762] shrink-0">Địa chỉ:</span>
                  <span className="text-right text-[#1c1c17]">
                    {completedOrder.address}, {completedOrder.ward}, {completedOrder.district}, {completedOrder.province}
                  </span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#e3ded5]">
                  <span className="text-[#5e6762]">Hình thức:</span>
                  <strong className="text-[#2c6653]">
                    {completedOrder.paymentMethod === 'cod' ? 'Thanh toán COD khi nhận hàng' : 'Chuyển khoản VietQR 24/7'}
                  </strong>
                </div>
              </div>

              {/* Package list */}
              <div className="p-4 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5] flex flex-col gap-2.5">
                <h3 className="font-heading font-bold text-sm text-[#1c1c17] flex items-center gap-1.5 pb-2 border-b border-[#e3ded5]">
                  <span className="material-symbols-outlined text-[18px] text-[#2c6653]">checkroom</span>
                  <span>Kiện hàng của bé ({completedOrder.items.length} sản phẩm)</span>
                </h3>

                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
                  {completedOrder.items.map((it: any) => (
                    <div key={it.id} className="flex justify-between items-center text-xs pb-1 border-b border-[#f1ede6]">
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-bold text-[#1c1c17] truncate">{it.quantity}x {it.product.name}</span>
                        <span className="text-[11px] text-[#5e6762]">
                          {it.selectedSize} · {it.selectedColor}
                          {it.personalization?.enabled && ` · Thêu: ${it.personalization.childName} ${it.personalization.icon}`}
                        </span>
                      </div>
                      <span className="font-bold text-[#2c6653] ml-2 shrink-0">
                        {formatVND(it.product.price * it.quantity)}
                      </span>
                    </div>
                  ))}

                  {/* Free Gift */}
                  <div className="flex justify-between items-center text-xs p-1.5 bg-[#ffdbd2]/40 rounded-lg">
                    <span className="font-bold text-[#904b39] flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">card_giftcard</span>
                      Túi Tote Canvas Mầm Kids (0đ)
                    </span>
                    <span className="font-bold text-[#904b39]">0đ</span>
                  </div>
                </div>

                <div className="mt-auto pt-2 border-t border-[#e3ded5] flex justify-between items-center">
                  <span className="font-heading font-bold text-[#1c1c17]">Tổng tiền thanh toán:</span>
                  <span className="font-heading text-xl font-bold text-[#2c6653]">
                    {formatVND(completedOrder.grandTotal)}
                  </span>
                </div>
              </div>
            </div>

            {/* Notice advice */}
            <div className="p-4 rounded-2xl bg-[#ffdf90]/30 border border-[#ffdf90] flex items-start gap-3 text-xs sm:text-sm text-[#755b01]">
              <span className="material-symbols-outlined text-[22px] shrink-0 mt-0.5">support_agent</span>
              <div>
                <strong>Mầm Kids sẽ gọi xác nhận trong 15-30 phút!</strong>
                <p className="mt-0.5 text-xs text-[#5e6762]">
                  Chuyên viên sẽ liên hệ với ba mẹ để kiểm tra lại số đo chiều cao, cân nặng và vị trí thêu tên để đảm bảo trang phục vừa vặn 100% trước khi xuất xưởng.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('tracking')}
                className="w-full sm:w-auto h-12 px-7 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                <span>Theo dõi đơn hàng (Track Order)</span>
              </button>

              <button
                onClick={() => onNavigate('products')}
                className="w-full sm:w-auto h-12 px-7 rounded-full bg-white border border-[#2c6653] text-[#2c6653] hover:bg-[#f1ede6] font-heading font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>Tiếp tục mua sắm</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. EMPTY CART VIEW
  if (items.length === 0) {
    return (
      <div className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-md mx-auto text-center flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-[#f1ede6] flex items-center justify-center text-[#5e6762]">
            <span className="material-symbols-outlined text-[48px]">shopping_basket</span>
          </div>
          <h2 className="font-heading text-2xl font-bold text-[#1c1c17]">Giỏ hàng của bé đang trống</h2>
          <p className="text-sm text-[#5e6762]">
            Mẹ hãy khám phá bộ sưu tập hè hữu cơ mềm mại và chọn những bộ cánh xinh xắn nhất cho bé nhé!
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="h-12 px-8 rounded-full bg-[#2c6653] text-white font-heading font-bold text-sm hover:bg-[#12503f] transition-all shadow-md active:scale-95 cursor-pointer mt-2"
          >
            Khám phá sản phẩm ngay
          </button>
        </div>
      </div>
    );
  }

  // 3. FULL CART & CHECKOUT PAGE
  return (
    <div className="w-full flex flex-col">
      {/* Breadcrumb Strip */}
      <section className="w-full bg-[#f7f3ec] py-3 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-[#5e6762]">
          <nav className="flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-[#2c6653]">
              Trang chủ
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#2c6653] font-bold">Giỏ hàng & Thanh toán</span>
          </nav>
          <div className="flex items-center gap-1.5 text-[#2c6653] font-bold">
            <span className="material-symbols-outlined text-[16px]">eco</span>
            <span>Bé diện an toàn: 100% Vải Organic Cotton đạt chứng nhận GOTS</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 w-full flex flex-col gap-6">
        {/* Free Shipping Progress Tracker */}
        <div className="p-4 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-1">
            <span className="flex items-center gap-1.5 text-[#2c6653] font-bold">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              {freeShippingProgress >= 100 ? (
                <span>Chúc mừng! Đơn hàng của bạn đã được <strong>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC (0đ)</strong></span>
              ) : (
                <span>
                  Mua thêm <strong>{formatVND(freeShippingThreshold - subtotal)}</strong> để được <strong>FREESHIP toàn quốc</strong>
                </span>
              )}
            </span>
            <span className="text-[#5e6762] text-xs font-semibold">
              Tiến độ: {freeShippingProgress}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#f1ede6] overflow-hidden">
            <div
              className="h-full bg-[#2c6653] rounded-full transition-all duration-500"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* 2-Column Split: Cart List + Checkout Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Cart Items & Financial Breakdown (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Free Gift Highlight Banner */}
            <div className="rounded-3xl bg-[#ffdbd2]/40 border border-[#fea58e]/60 p-4 flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#904b39] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">card_giftcard</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-xs sm:text-sm font-bold text-[#1c1c17]">
                      TẶNG MIỄN PHÍ: Túi Tote Canvas Mầm Kids
                    </span>
                    <span className="bg-[#904b39] text-white text-[10px] px-2 py-0.2 rounded-full font-bold">
                      0đ
                    </span>
                  </div>
                  <span className="text-xs text-[#5e6762]">
                    Áp dụng cho mọi đơn hàng · Tự động đính kèm kiện hàng của bé
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold text-[#2c6653] bg-white px-3 py-1 rounded-full border border-[#2c6653]/20 shrink-0 hidden sm:inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">check</span>
                Đã thêm
              </span>
            </div>

            {/* Cart Header */}
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl font-bold text-[#1c1c17]">
                Giỏ hàng của bé ({totalItemsCount} món)
              </h2>
              <span className="text-xs text-[#904b39] font-bold bg-[#ffdbd2] px-3 py-1 rounded-full">
                Đổi size 7 ngày tận nhà
              </span>
            </div>

            {/* Items List */}
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white p-4 shadow-xs border border-[#e3ded5] flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl object-cover bg-[#f1ede6] shrink-0"
                  />

                  <div className="flex-1 min-w-0 flex flex-col gap-1.5 w-full">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-sm sm:text-base font-bold text-[#1c1c17] truncate">
                          {item.product.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 flex-wrap text-xs text-[#5e6762]">
                          <span className="px-2 py-0.5 rounded-md bg-[#f1ede6] font-semibold text-[#1c1c17]">
                            {item.selectedSize}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-[#f1ede6] font-semibold text-[#1c1c17]">
                            {item.selectedColor}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#888e89] hover:text-[#ba1a1a] flex items-center gap-0.5 p-1 transition-colors"
                        title="Xóa sản phẩm"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                        <span className="hidden sm:inline">Xóa</span>
                      </button>
                    </div>

                    {/* Personalization Tag if enabled */}
                    {item.personalization?.enabled && (
                      <div className="mt-1 p-2 rounded-xl bg-[#b3efd7]/30 border border-[#2c6653]/30 text-xs text-[#12503f] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px]">draw</span>
                        <span>
                          Thêu tên: <strong>{item.personalization.childName}</strong> {item.personalization.icon} · {item.personalization.position} (0đ)
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-[#f1ede6] mt-1">
                      {/* Quantity Stepper */}
                      <div className="flex items-center bg-[#f1ede6] rounded-full p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1c1c17] hover:bg-[#ece8e0] active:scale-95 transition-all"
                        >
                          <span className="material-symbols-outlined text-[14px]">remove</span>
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-[#1c1c17]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#1c1c17] hover:bg-[#ece8e0] active:scale-95 transition-all"
                        >
                          <span className="material-symbols-outlined text-[14px]">add</span>
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-[#888e89] block">
                          {formatVND(item.product.price)}/cái
                        </span>
                        <span className="font-heading text-base font-bold text-[#2c6653]">
                          {formatVND(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Voucher Code Box */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-bold text-[#1c1c17] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#755b01]">loyalty</span>
                  <span>Mã khuyến mãi & Voucher</span>
                </span>
                {appliedPromo && (
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-[#ba1a1a] hover:underline font-bold"
                  >
                    Gỡ mã
                  </button>
                )}
              </div>

              {/* Quick Suggestion Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {PROMOTIONS.map((p) => (
                  <button
                    key={p.code}
                    onClick={() => handleQuickApplyPromo(p.code)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 ${
                      appliedPromo?.code === p.code
                        ? 'bg-[#2c6653] text-white'
                        : 'bg-[#f1ede6] text-[#404944] hover:bg-[#ece8e0]'
                    }`}
                  >
                    {p.code} ({p.tag})
                  </button>
                ))}
              </div>

              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  placeholder="Nhập WELCOME50, SET100, MAMM20..."
                  className="flex-1 h-11 px-4 rounded-full bg-[#f1ede6] text-xs sm:text-sm font-mono uppercase font-bold text-[#1c1c17] outline-none border border-transparent focus:border-[#2c6653]"
                />
                <button
                  type="submit"
                  className="px-5 h-11 rounded-full bg-[#2c6653] text-white font-heading font-bold text-xs sm:text-sm hover:bg-[#12503f] transition-all active:scale-95 shadow-xs cursor-pointer"
                >
                  Áp dụng
                </button>
              </form>

              {couponFeedback && (
                <p className={`text-xs flex items-center gap-1 ${couponFeedback.isError ? 'text-[#ba1a1a]' : 'text-[#2c6653]'}`}>
                  <span className="material-symbols-outlined text-[15px]">
                    {couponFeedback.isError ? 'error' : 'check_circle'}
                  </span>
                  <span>{couponFeedback.text}</span>
                </p>
              )}
            </div>

            {/* Financial Breakdown */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-2.5 text-xs sm:text-sm">
              <div className="flex justify-between text-[#5e6762]">
                <span>Tạm tính tiền hàng:</span>
                <span className="font-bold text-[#1c1c17]">{formatVND(subtotal)}</span>
              </div>

              <div className="flex justify-between text-[#5e6762]">
                <span>Phí vận chuyển toàn quốc:</span>
                <div>
                  {shippingFee === 0 ? (
                    <span className="text-[#2c6653] font-bold">Miễn phí (0đ)</span>
                  ) : (
                    <span className="font-bold text-[#1c1c17]">{formatVND(shippingFee)}</span>
                  )}
                </div>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-[#904b39] font-bold">
                  <span>Giảm giá ({appliedPromo?.code}):</span>
                  <span>-{formatVND(discountAmount)}</span>
                </div>
              )}

              <div className="h-px bg-[#f1ede6] my-1" />

              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <span className="font-heading text-base font-bold text-[#1c1c17] block">
                    Tổng tiền thanh toán:
                  </span>
                  <span className="text-[11px] text-[#5e6762]">Đã bao gồm VAT & cam kết đổi trả</span>
                </div>
                <div className="text-right">
                  <span className="font-heading text-2xl font-bold text-[#2c6653]">
                    {formatVND(grandTotal)}
                  </span>
                  <span className="text-[11px] text-[#904b39] block mt-0.5">
                    + Tích lũy {Math.round(grandTotal / 10000)} điểm Mầm Care
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-1">
              <button
                onClick={() => onNavigate('products')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#2c6653] font-bold hover:underline"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span>Tiếp tục mua sắm cho bé</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Checkout Information & Payment (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#e3ded5] shadow-sm flex flex-col gap-4">
              {/* Checkout Type Selector */}
              <div className="flex flex-col gap-2 pb-3 border-b border-[#f1ede6]">
                <label className="text-xs font-bold text-[#1c1c17] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#2c6653] text-[18px]">how_to_reg</span>
                  <span>Hình thức đặt hàng</span>
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#f1ede6] rounded-2xl text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setCheckoutType('guest')}
                    className={`py-2 rounded-xl transition-all ${
                      checkoutType === 'guest'
                        ? 'bg-white text-[#2c6653] shadow-xs'
                        : 'text-[#5e6762] hover:text-[#1c1c17]'
                    }`}
                  >
                    Khách vãng lai (Nhanh)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCheckoutType('member')}
                    className={`py-2 rounded-xl transition-all ${
                      checkoutType === 'member'
                        ? 'bg-white text-[#2c6653] shadow-xs'
                        : 'text-[#5e6762] hover:text-[#1c1c17]'
                    }`}
                  >
                    Đăng nhập Mầm Care
                  </button>
                </div>
                <span className="text-[11px] text-[#5e6762]">
                  * Đặt hàng nhanh không cần tạo tài khoản, mẹ vẫn nhận đầy đủ thông báo đơn qua SMS/Zalo.
                </span>
              </div>

              {/* Delivery Details Form */}
              <form onSubmit={handlePlaceOrder} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 pb-1">
                  <span className="material-symbols-outlined text-[#2c6653] text-[20px]">local_shipping</span>
                  <h3 className="font-heading font-bold text-sm text-[#1c1c17]">
                    Thông tin giao hàng
                  </h3>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#1c1c17]">
                    Họ và tên người nhận <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={custName}
                    onChange={(e) => setCustName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Thu Hà"
                    className="h-10 px-3.5 rounded-xl bg-[#f1ede6] text-xs sm:text-sm text-[#1c1c17] outline-none border border-transparent focus:border-[#2c6653]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#1c1c17]">
                      Số điện thoại <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={custPhone}
                      onChange={(e) => setCustPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="h-10 px-3.5 rounded-xl bg-[#f1ede6] text-xs sm:text-sm text-[#1c1c17] outline-none border border-transparent focus:border-[#2c6653]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#1c1c17]">Email (nhận hóa đơn)</label>
                    <input
                      type="email"
                      value={custEmail}
                      onChange={(e) => setCustEmail(e.target.value)}
                      placeholder="ha.nguyen@gmail.com"
                      className="h-10 px-3.5 rounded-xl bg-[#f1ede6] text-xs sm:text-sm text-[#1c1c17] outline-none border border-transparent focus:border-[#2c6653]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#1c1c17]">Tỉnh / TP</label>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="h-10 px-2 rounded-xl bg-[#f1ede6] text-xs text-[#1c1c17] outline-none cursor-pointer"
                    >
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#1c1c17]">Quận / Huyện</label>
                    <input
                      type="text"
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      placeholder="Quận Cầu Giấy"
                      className="h-10 px-2.5 rounded-xl bg-[#f1ede6] text-xs text-[#1c1c17] outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#1c1c17]">Phường / Xã</label>
                    <input
                      type="text"
                      required
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                      placeholder="P. Dịch Vọng Hậu"
                      className="h-10 px-2.5 rounded-xl bg-[#f1ede6] text-xs text-[#1c1c17] outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#1c1c17]">
                    Số nhà, tên đường <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Số 45 Ngõ 12 Đường Trần Thái Tông..."
                    className="h-10 px-3.5 rounded-xl bg-[#f1ede6] text-xs sm:text-sm text-[#1c1c17] outline-none border border-transparent focus:border-[#2c6653]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#1c1c17]">Ghi chú cho Mầm Kids</label>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Giao giờ hành chính, bọc gói hộp quà xinh giúp mẹ..."
                    className="p-3 rounded-xl bg-[#f1ede6] text-xs text-[#1c1c17] outline-none resize-none"
                  />
                </div>

                {/* Payment Methods */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#f1ede6]">
                  <label className="text-xs font-bold text-[#1c1c17] flex justify-between items-center">
                    <span>Phương thức thanh toán</span>
                    <span className="text-[#2c6653] font-normal">An toàn 100%</span>
                  </label>

                  <label className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    paymentMethod === 'cod' ? 'bg-[#b3efd7]/20 border-[#2c6653]' : 'bg-[#f1ede6] border-transparent'
                  }`}>
                    <input
                      type="radio"
                      name="payment_opt"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="mt-1 accent-[#2c6653]"
                    />
                    <div className="flex flex-col text-xs">
                      <strong className="text-[#1c1c17] font-heading font-bold text-sm">
                        Thanh toán khi nhận hàng (COD)
                      </strong>
                      <span className="text-[#5e6762] mt-0.5">
                        Kiểm tra chất vải và đường thêu tỉ mỉ trước khi thanh toán tiền mặt cho shipper.
                      </span>
                    </div>
                  </label>

                  <label className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    paymentMethod === 'vietqr' ? 'bg-[#b3efd7]/20 border-[#2c6653]' : 'bg-[#f1ede6] border-transparent'
                  }`}>
                    <input
                      type="radio"
                      name="payment_opt"
                      checked={paymentMethod === 'vietqr'}
                      onChange={() => setPaymentMethod('vietqr')}
                      className="mt-1 accent-[#2c6653]"
                    />
                    <div className="flex flex-col text-xs">
                      <strong className="text-[#1c1c17] font-heading font-bold text-sm">
                        Chuyển khoản VietQR 24/7 (Quét mã)
                      </strong>
                      <span className="text-[#5e6762] mt-0.5">
                        Quét mã QR tiện lợi qua mọi app ngân hàng, hệ thống xác nhận tự động 30 giây.
                      </span>
                    </div>
                  </label>

                  {paymentMethod === 'vietqr' && (
                    <div className="p-3 bg-[#fdf9f1] rounded-2xl border border-[#2c6653]/30 flex items-center gap-3 text-xs">
                      <div className="w-16 h-16 bg-white p-1 rounded-xl shrink-0 border border-[#e3ded5] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[32px] text-[#2c6653]">qr_code_2</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span>Vietcombank: <strong>1028 9988 6688</strong></span>
                        <span>CTK: <strong>CTY CP THOI TRANG MAM KIDS</strong></span>
                        <span>Nội dung: <strong className="text-[#904b39]">MK89210</strong></span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Final Confirmation Checkbox */}
                <label className="flex items-start gap-2 pt-2 cursor-pointer text-xs text-[#1c1c17]">
                  <input
                    type="checkbox"
                    checked={confirmedReview}
                    onChange={(e) => setConfirmedReview(e.target.checked)}
                    className="mt-0.5 accent-[#2c6653] rounded"
                  />
                  <span>
                    Tôi đã kiểm tra kỹ thông tin người nhận và kích cỡ trang phục của bé.
                  </span>
                </label>

                {/* Submit Place Order Button */}
                <button
                  type="submit"
                  className="w-full mt-2 h-14 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                  <span>Tiến hành thanh toán ngay • Place Order</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
