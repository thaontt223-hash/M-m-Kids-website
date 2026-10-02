import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface ContactPageProps {
  onNavigate: (tab: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { showToast } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Tư vấn chọn size');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Đã gửi tin nhắn!', 'Chuyên viên Mầm Kids sẽ liên hệ lại với ba mẹ trong vòng 15 phút.', 'success');
  };

  const faqs = [
    {
      q: 'Vải cotton hữu cơ Mầm Kids có bị co rút hoặc xù lông khi giặt máy không?',
      a: 'Hoàn toàn không. Vải dệt từ 100% sợi bông hữu cơ chải kỹ tự nhiên với mật độ sợi cao, đã qua quy trình xử lý chống co rút sinh học. Ba mẹ có thể giặt máy ở chế độ thường mà vải vẫn giữ độ mềm mịn tự nhiên.'
    },
    {
      q: 'Chính sách đổi size 7 ngày tại nhà hoạt động như thế nào?',
      a: 'Nếu bé mặc chưa vừa vặn, ba mẹ chỉ cần gọi Hotline 1900 6868 hoặc nhắn tin trên website. Shipper Mầm Kids sẽ mang sản phẩm size mới đến tận cửa nhà và thu hồi sản phẩm cũ về hoàn toàn miễn phí.'
    },
    {
      q: 'Dịch vụ thêu tên cá nhân hóa có tính thêm phí không?',
      a: 'Dịch vụ thêu tên bé và icon độc bản được Mầm Kids phục vụ MIỄN PHÍ 100% cho mọi khách hàng. Thời gian thêu và đóng gói chỉ mất từ 2-4 tiếng trước khi xuất xưởng.'
    },
    {
      q: 'Mầm Kids có chương trình tặng Túi Tote Canvas không?',
      a: 'Có ạ! Mỗi đơn hàng đặt tại website đều được tặng kèm miễn phí 01 Túi Tote Canvas Mầm Kids dày dặn, thân thiện môi trường (trị giá 89.000đ) không yêu cầu giá trị đơn hàng tối thiểu.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Header */}
      <section className="w-full bg-[#f7f3ec] py-8 sm:py-12 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b3efd7] text-[#12503f] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">support_agent</span>
            Đồng Hành Cùng Ba Mẹ 24/7
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#1c1c17] tracking-tight">
            Liên Hệ Với Mầm Kids
          </h1>
          <p className="text-xs sm:text-sm text-[#5e6762] max-w-xl leading-relaxed">
            Chúng tôi luôn lắng nghe mọi chia sẻ và sẵn sàng hỗ trợ ba mẹ chọn trang phục êm ái, an toàn nhất cho con yêu.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 w-full flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Contact Info & Showrooms (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-4">
              <h2 className="font-heading text-lg font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2c6653]">call</span>
                <span>Thông tin kết nối</span>
              </h2>

              <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#5e6762]">
                <div className="flex items-start gap-3 p-3 bg-[#f7f3ec] rounded-2xl">
                  <span className="material-symbols-outlined text-[#2c6653] text-[22px] shrink-0 mt-0.5">phone_in_talk</span>
                  <div>
                    <strong className="text-[#1c1c17] block">Hotline Chăm Sóc Khách Hàng:</strong>
                    <a href="tel:19006868" className="text-base font-heading font-bold text-[#2c6653] hover:underline">
                      1900 6868
                    </a>
                    <span className="text-[11px] text-[#5e6762] block">(Từ 8:00 - 21:30 hàng ngày kể cả Chủ Nhật)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f7f3ec] rounded-2xl">
                  <span className="material-symbols-outlined text-[#2c6653] text-[22px] shrink-0 mt-0.5">mail</span>
                  <div>
                    <strong className="text-[#1c1c17] block">Email hỗ trợ:</strong>
                    <a href="mailto:care@mamkids.vn" className="text-[#2c6653] font-bold hover:underline">
                      care@mamkids.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#f7f3ec] rounded-2xl">
                  <span className="material-symbols-outlined text-[#2c6653] text-[22px] shrink-0 mt-0.5">chat</span>
                  <div>
                    <strong className="text-[#1c1c17] block">Zalo Official / Fanpage:</strong>
                    <span className="text-[#1c1c17]">Mầm Kids – Thời Trang Trẻ Em Hữu Cơ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Showrooms */}
            <div className="p-6 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-4">
              <h2 className="font-heading text-lg font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2c6653]">store</span>
                <span>Hệ thống Showroom Mầm Kids</span>
              </h2>

              <div className="flex flex-col gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5] flex flex-col gap-1">
                  <strong className="text-[#2c6653] font-heading font-bold">Boutique Hà Nội</strong>
                  <p className="text-[#5e6762]">Số 45 Ngõ 12 Đường Trần Thái Tông, P. Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội</p>
                  <span className="text-[11px] text-[#888e89]">Giờ mở cửa: 08:30 - 21:30</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5] flex flex-col gap-1">
                  <strong className="text-[#2c6653] font-heading font-bold">Boutique TP. Hồ Chí Minh</strong>
                  <p className="text-[#5e6762]">188 Đường Nguyễn Trãi, Phường 3, Quận 5, TP. Hồ Chí Minh</p>
                  <span className="text-[11px] text-[#888e89]">Giờ mở cửa: 08:30 - 21:30</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Inquiry Form & FAQ (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-4">
              <h2 className="font-heading text-xl font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2c6653]">send</span>
                <span>Gửi Tin Nhắn Yêu Cầu Hỗ Trợ</span>
              </h2>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#b3efd7]/30 text-center flex flex-col items-center gap-2 text-[#12503f]">
                  <span className="material-symbols-outlined text-[36px]">verified</span>
                  <h3 className="font-heading font-bold text-lg">Cảm ơn ba mẹ đã gửi yêu cầu!</h3>
                  <p className="text-xs sm:text-sm text-[#5e6762]">
                    Chuyên viên tư vấn của Mầm Kids sẽ liên hệ lại với ba mẹ qua số điện thoại <strong>{phone}</strong> trong vòng 15-30 phút.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-[#1c1c17]">Họ và tên ba/mẹ *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ví dụ: Nguyễn Thu Hà"
                        className="h-10 px-3.5 rounded-xl bg-[#f1ede6] text-[#1c1c17] outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-[#1c1c17]">Số điện thoại liên hệ *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0912 345 678"
                        className="h-10 px-3.5 rounded-xl bg-[#f1ede6] text-[#1c1c17] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#1c1c17]">Chủ đề cần hỗ trợ</label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="h-10 px-3 rounded-xl bg-[#f1ede6] text-[#1c1c17] outline-none cursor-pointer"
                    >
                      <option value="Tư vấn chọn size">Tư vấn chọn size chuẩn cho bé</option>
                      <option value="Đổi trả 7 ngày">Hỗ trợ đổi size 7 ngày tận nhà</option>
                      <option value="Đặt may thêu theo yêu cầu">Yêu cầu thêu tên cá nhân hóa đặc biệt</option>
                      <option value="Đơn hàng doanh nghiệp / Quà tặng">Đơn hàng quà tặng sinh nhật / sự kiện</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="font-bold text-[#1c1c17]">Nội dung tin nhắn *</label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mô tả chiều cao, cân nặng của bé hoặc thắc mắc của ba mẹ..."
                      className="p-3 rounded-xl bg-[#f1ede6] text-[#1c1c17] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-11 px-6 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xs cursor-pointer mt-1"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Gửi tin nhắn cho Mầm Kids</span>
                  </button>
                </form>
              )}
            </div>

            {/* FAQs Accordion */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-4">
              <h2 className="font-heading text-xl font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#755b01]">quiz</span>
                <span>Câu Hỏi Thường Gặp (FAQs)</span>
              </h2>

              <div className="flex flex-col gap-3">
                {faqs.map((f, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5]">
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#1c1c17] mb-1">
                      {f.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5e6762] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
