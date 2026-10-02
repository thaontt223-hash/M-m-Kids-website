import React, { useState } from 'react';
import { SIZE_CHART, calculateRecommendedSize } from '../data/sizeGuide';

interface SizeGuidePageProps {
  onNavigate: (tab: string) => void;
}

export const SizeGuidePage: React.FC<SizeGuidePageProps> = ({ onNavigate }) => {
  const [age, setAge] = useState<number>(4);
  const [height, setHeight] = useState<number>(105);
  const [weight, setWeight] = useState<number>(16);

  const recommendation = calculateRecommendedSize(height, weight);

  const handleAgeChange = (newAge: number) => {
    setAge(newAge);
    // Adjust height and weight to typical averages
    if (newAge === 2) { setHeight(88); setWeight(12); }
    else if (newAge === 3) { setHeight(95); setWeight(14); }
    else if (newAge === 4) { setHeight(102); setWeight(16); }
    else if (newAge === 5) { setHeight(110); setWeight(18); }
    else if (newAge === 6) { setHeight(118); setWeight(21); }
    else if (newAge === 7) { setHeight(125); setWeight(25); }
    else if (newAge === 8) { setHeight(132); setWeight(28); }
    else if (newAge === 9) { setHeight(138); setWeight(32); }
    else if (newAge === 10) { setHeight(144); setWeight(36); }
    else if (newAge === 11) { setHeight(150); setWeight(40); }
    else { setHeight(155); setWeight(44); }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="w-full bg-[#f7f3ec] py-8 sm:py-12 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b3efd7] text-[#12503f] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">straighten</span>
            Chuẩn Nhân Trắc Học Trẻ Em Việt Nam
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#1c1c17] tracking-tight">
            Bảng Hướng Dẫn Chọn Size Chuẩn Xác
          </h1>
          <p className="text-sm sm:text-base text-[#5e6762] max-w-2xl leading-relaxed">
            Form dáng thời trang Mầm Kids được may cộng thêm 3cm độ dư vận động, giúp bé tự do chạy nhảy, học tập và vui chơi mà không lo chật cấn.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 w-full flex flex-col gap-12">
        {/* INTERACTIVE SIZE ESTIMATOR CALCULATOR */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#e3ded5] shadow-sm flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#f1ede6] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#b3efd7] text-[#12503f] flex items-center justify-center font-bold text-xl shrink-0">
                <span className="material-symbols-outlined text-[26px]">accessibility_new</span>
              </div>
              <div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1c1c17]">
                  Trợ Thủ Đo & Tính Size Thông Minh
                </h2>
                <p className="text-xs sm:text-sm text-[#5e6762]">
                  Kéo chọn thông số thực tế của bé để nhận kích cỡ khuyến nghị chính xác 99%
                </p>
              </div>
            </div>
            <span className="text-xs bg-[#b3efd7]/50 text-[#12503f] font-bold px-3 py-1 rounded-full self-start sm:self-auto">
              Độ chính xác 99%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Age selector */}
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5]">
              <label className="text-xs font-bold text-[#1c1c17] flex justify-between">
                <span>1. Độ tuổi của bé:</span>
                <strong className="text-[#2c6653] font-bold">{age} tuổi</strong>
              </label>
              <select
                value={age}
                onChange={(e) => handleAgeChange(Number(e.target.value))}
                className="w-full h-11 px-3 rounded-xl bg-white border border-[#e3ded5] text-sm text-[#1c1c17] font-semibold outline-none cursor-pointer"
              >
                <option value={2}>2 tuổi</option>
                <option value={3}>3 tuổi</option>
                <option value={4}>4 tuổi (Mẫu giáo nhỡ)</option>
                <option value={5}>5 tuổi</option>
                <option value={6}>6 tuổi (Lớp 1)</option>
                <option value={7}>7 tuổi</option>
                <option value={8}>8 tuổi</option>
                <option value={9}>9 tuổi</option>
                <option value={10}>10 tuổi</option>
                <option value={11}>11 tuổi</option>
                <option value={12}>12 tuổi</option>
              </select>
              <span className="text-[11px] text-[#5e6762]">Dải tuổi khảo sát: 2 - 12 tuổi</span>
            </div>

            {/* Height slider */}
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5]">
              <div className="flex justify-between items-center text-xs font-bold text-[#1c1c17]">
                <span>2. Chiều cao của bé:</span>
                <span className="text-[#2c6653] text-sm font-bold">{height} cm</span>
              </div>
              <input
                type="range"
                min="80"
                max="160"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-[#2c6653] h-2 bg-[#ece8e0] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#888e89]">
                <span>80 cm</span>
                <span>120 cm</span>
                <span>160 cm</span>
              </div>
            </div>

            {/* Weight slider */}
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-[#fdf9f1] border border-[#e3ded5]">
              <div className="flex justify-between items-center text-xs font-bold text-[#1c1c17]">
                <span>3. Cân nặng của bé:</span>
                <span className="text-[#2c6653] text-sm font-bold">{weight} kg</span>
              </div>
              <input
                type="range"
                min="9"
                max="48"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-[#2c6653] h-2 bg-[#ece8e0] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#888e89]">
                <span>9 kg</span>
                <span>28 kg</span>
                <span>48 kg</span>
              </div>
            </div>
          </div>

          {/* Calculator Output Result Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#b3efd7]/40 via-[#fdf9f1] to-[#ffdbd2]/40 border border-[#2c6653]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#2c6653] text-white flex items-center justify-center font-heading text-2xl font-bold shadow-md shrink-0">
                {recommendation.badge}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#904b39] uppercase tracking-wider">
                  Kích cỡ khuyến nghị chuẩn nhất
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#2c6653]">
                  {recommendation.size} ({recommendation.rangeText})
                </h3>
                <p className="text-xs sm:text-sm text-[#5e6762] mt-0.5">
                  {recommendation.advice}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('products')}
              className="h-11 px-6 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-sm whitespace-nowrap shrink-0"
            >
              Chọn sản phẩm theo Size {recommendation.badge}
            </button>
          </div>

          <div className="p-3 bg-[#ffdf90]/30 rounded-xl text-xs text-[#755b01] flex items-start gap-2">
            <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">info</span>
            <span>
              <strong>Lưu ý:</strong> Độ tuổi chỉ mang tính tham khảo. Nếu bé có vòng bụng tròn hoặc nằm ở mức cận trên của cân nặng, mẹ hãy tự tin chọn tăng thêm 1 size để bé mặc thoải mái nhất nhé!
            </span>
          </div>
        </div>

        {/* COMPREHENSIVE SIZE CHART TABLE */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-[#1c1c17]">
                Bảng Thông Số Kích Thước Toàn Diện
              </h2>
              <p className="text-xs sm:text-sm text-[#5e6762]">
                Áp dụng cho toàn bộ các dòng sản phẩm Áo, Váy, Quần và Đồ bộ Mầm Kids
              </p>
            </div>
            <span className="text-xs text-[#5e6762]">Đơn vị tính: cm / kg</span>
          </div>

          <div className="overflow-x-auto rounded-3xl bg-white border border-[#e3ded5] shadow-xs">
            <table className="w-full text-left min-w-[700px]">
              <thead className="bg-[#f1ede6] text-[#1c1c17] text-xs sm:text-sm font-heading font-bold">
                <tr>
                  <th className="py-3.5 px-4">Size Mầm Kids</th>
                  <th className="py-3.5 px-4">Độ tuổi</th>
                  <th className="py-3.5 px-4">Chiều cao</th>
                  <th className="py-3.5 px-4">Cân nặng</th>
                  <th className="py-3.5 px-4">Vòng ngực</th>
                  <th className="py-3.5 px-4">Vòng eo</th>
                  <th className="py-3.5 px-4">Gợi ý vóc dáng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1ede6] text-xs sm:text-sm text-[#404944]">
                {SIZE_CHART.map((row) => (
                  <tr key={row.size} className="hover:bg-[#f7f3ec] transition-colors">
                    <td className="py-3.5 px-4 font-heading font-bold text-[#2c6653]">
                      {row.size}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-[#1c1c17]">{row.age}</td>
                    <td className="py-3.5 px-4">{row.height}</td>
                    <td className="py-3.5 px-4 font-bold text-[#1c1c17]">{row.weight}</td>
                    <td className="py-3.5 px-4">{row.chest}</td>
                    <td className="py-3.5 px-4">{row.waist}</td>
                    <td className="py-3.5 px-4 text-xs text-[#5e6762] italic">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* HOW TO MEASURE AT HOME */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#f7f3ec] border border-[#e3ded5] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2c6653] font-bold text-lg shadow-xs">
              1
            </span>
            <h3 className="font-heading text-base font-bold text-[#1c1c17]">Đo chiều cao đứng</h3>
            <p className="text-xs sm:text-sm text-[#5e6762] leading-relaxed">
              Cho bé đứng thẳng lưng sát tường, gót chân và mông chạm nhẹ tường, không mang giày dép. Dùng thước đặt ngang đỉnh đầu vuông góc với tường để lấy số đo chính xác.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2c6653] font-bold text-lg shadow-xs">
              2
            </span>
            <h3 className="font-heading text-base font-bold text-[#1c1c17]">Đo vòng ngực & eo</h3>
            <p className="text-xs sm:text-sm text-[#5e6762] leading-relaxed">
              Dùng thước dây mềm quấn quanh điểm nở nhất của ngực và eo bé. Nhớ cộng thêm 2cm để khi bé ăn no hoặc chạy nhảy vẫn không bị tức bụng.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2c6653] font-bold text-lg shadow-xs">
              3
            </span>
            <h3 className="font-heading text-base font-bold text-[#1c1c17]">Đổi size tận nơi 7 ngày</h3>
            <p className="text-xs sm:text-sm text-[#5e6762] leading-relaxed">
              Nếu nhận hàng mà bé mặc chưa vừa, ba mẹ chỉ cần nhắn cho Mầm Kids. Shipper sẽ mang size mới đến tận nhà đổi cho bé, ba mẹ không cần đi gửi bưu cục.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
