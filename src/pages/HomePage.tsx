import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { calculateRecommendedSize } from '../data/sizeGuide';

interface HomePageProps {
  onSelectProduct: (product: Product) => void;
  onNavigate: (tab: string, filterParam?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProduct, onNavigate }) => {
  // Hero Growth Estimator State
  const [heroHeight, setHeroHeight] = useState(105);
  const [heroWeight, setHeroWeight] = useState(16);
  const heroRecommendation = calculateRecommendedSize(heroHeight, heroWeight);

  // Product Filter State
  const [productFilter, setProductFilter] = useState<'all' | 'best-seller' | 'new' | 'age-3-6' | 'age-7-12'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (productFilter === 'best-seller') return p.isBestSeller;
    if (productFilter === 'new') return p.isNewArrival;
    if (productFilter === 'age-3-6') return p.ageRange === '3-6';
    if (productFilter === 'age-7-12') return p.ageRange === '7-12';
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. TOP PROMOTION PILL */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 pt-4">
        <div className="bg-[#b3efd7]/40 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between text-[#12503f] shadow-xs backdrop-blur-md">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold truncate">
            <span className="w-6 h-6 rounded-full bg-[#2c6653] text-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[15px]">celebration</span>
            </span>
            <span className="truncate">
              Ưu đãi chào Hè 2025: Giảm thêm 15% khi mua từ 3 sản phẩm cotton hữu cơ · Tặng kèm Túi Tote Canvas
            </span>
          </div>
          <button
            onClick={() => onNavigate('promotions')}
            className="hidden sm:inline-flex items-center gap-1.5 font-bold text-xs bg-white px-3 py-1 rounded-full text-[#2c6653] shadow-xs hover:bg-[#b3efd7] transition-colors shrink-0"
          >
            <span>MÃ: HEVUIVE</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* 2. HERO BANNER */}
      <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f7f3ec] via-[#f1ede6] to-[#ffdbd2]/30 p-5 sm:p-10 lg:p-12 shadow-[0_8px_30px_-6px_rgba(110,105,95,0.08)] border border-[#e3ded5]">
          {/* Ambient Decorative Blurs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b3efd7]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#fea58e]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdbd2] text-[#904b39] text-xs font-bold shadow-xs">
                <span className="material-symbols-outlined text-[16px] text-[#904b39]">local_florist</span>
                <span>Bộ sưu tập Hè Rực Rỡ • Giảm 20% hôm nay</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] text-[#1c1c17] font-bold tracking-tight leading-[1.15]">
                Mầm Kids – <br />
                <span className="text-[#2c6653]">Lớn lên trong yêu thương</span>
              </h1>

              <p className="text-sm sm:text-base text-[#5e6762] max-w-xl leading-relaxed">
                Thời trang hữu cơ cao cấp, đáng yêu, thoáng khí và mềm mại tuyệt đối dành cho các thiên thần nhỏ từ 3–12 tuổi. Cùng bé vô tư chạy nhảy dưới nắng hè.
              </p>

              {/* Interactive Growth Estimator Preview inside Hero */}
              <div className="w-full max-w-lg bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-sm flex flex-col gap-3 border border-[#e3ded5]">
                <div className="flex items-center justify-between pb-2 border-b border-[#f1ede6]">
                  <span className="flex items-center gap-1.5 text-[#2c6653] font-heading font-bold text-sm">
                    <span className="material-symbols-outlined text-[18px]">straighten</span>
                    Trợ thủ chọn size tức thì cho bé
                  </span>
                  <button
                    onClick={() => onNavigate('sizeguide')}
                    className="text-xs text-[#904b39] hover:underline font-bold flex items-center gap-0.5"
                  >
                    <span>Xem bảng chuẩn</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="flex justify-between text-[#5e6762] mb-1">
                      <span>Chiều cao bé:</span>
                      <strong className="text-[#2c6653] font-bold">{heroHeight} cm</strong>
                    </div>
                    <input
                      type="range"
                      min="90"
                      max="155"
                      value={heroHeight}
                      onChange={(e) => setHeroHeight(Number(e.target.value))}
                      className="w-full accent-[#2c6653] h-2 bg-[#f1ede6] rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[#5e6762] mb-1">
                      <span>Cân nặng bé:</span>
                      <strong className="text-[#2c6653] font-bold">{heroWeight} kg</strong>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="45"
                      value={heroWeight}
                      onChange={(e) => setHeroWeight(Number(e.target.value))}
                      className="w-full accent-[#2c6653] h-2 bg-[#f1ede6] rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[#b3efd7]/30 rounded-xl px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#2c6653] text-[18px]">verified</span>
                    <span className="text-xs text-[#1c1c17]">
                      Size phù hợp đề xuất: <strong className="text-[#2c6653] font-heading text-sm">{heroRecommendation.size}</strong> ({heroRecommendation.rangeText})
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2c6653] text-white text-[11px] font-bold">
                    Khuyên dùng
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('products')}
                  className="h-12 px-8 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <span>Mua sắm ngay</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>

                <button
                  onClick={() => onNavigate('mixmatch')}
                  className="h-12 px-6 rounded-full bg-white hover:bg-[#f1ede6] text-[#2c6653] font-heading font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs border border-[#e3ded5] transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#904b39]">styler</span>
                  <span>Phối đồ Mix & Match</span>
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-[#5e6762]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#2c6653] text-[18px]">spa</span>
                  <span>100% Organic Cotton GOTS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#2c6653] text-[18px]">sentiment_satisfied</span>
                  <span>+35.000 Ba Mẹ Tin Dùng</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0eUsEw4-I0M_dG4hlDIWuoP8N1nWXX8aj319ATc45bS0Qin7qtSkDiPB86GYar8S8V0tLbgZ3Eqsxt-7n4yRuvGdwoydCrb_n038L3oA9ZIRGMIhjXcnMMaesFRT9C5BefYKg2J8QL9ddI2SOA1OLrrWFsD1HT2eBJ8FrwJ-bjb0OokfHF2ox14l0_OofnGgfDwRPHnRNyH0xhuy5a3azX2NGnfaaB-VRtx5MSVo1YjN7RdawpMYEzw"
                  alt="Mầm Kids Summer Collection"
                  className="w-full h-full object-cover object-center"
                />

                {/* Summer promo badge */}
                <div className="absolute top-4 left-4 rounded-2xl bg-white/95 backdrop-blur-md p-3 shadow-md flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#fea58e] flex items-center justify-center text-[#904b39]">
                    <span className="material-symbols-outlined text-[22px]">sunny</span>
                  </div>
                  <div>
                    <p className="text-[11px] text-[#5e6762]">Bộ sưu tập Hè</p>
                    <p className="font-heading text-base font-bold text-[#904b39] leading-none">-20% Toàn Bộ</p>
                  </div>
                </div>

                {/* Oeko Tex safety badge */}
                <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-3 shadow-lg flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#b3efd7] flex items-center justify-center text-[#2c6653] font-bold text-xs">
                      A+
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#ffdbd2] flex items-center justify-center text-[#904b39] font-bold text-xs">
                      OEKO
                    </div>
                  </div>
                  <div>
                    <p className="font-heading text-xs font-bold text-[#1c1c17]">Chứng nhận dệt an toàn</p>
                    <p className="text-[11px] text-[#5e6762]">Không hóa chất nhuộm độc hại</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES BY AGE & GENDER (4 PILLARS) */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <div className="inline-flex items-center gap-1 text-[#2c6653] text-xs font-bold uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[16px]">tune</span>
              <span>Phân loại chuyên biệt</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c1c17]">
              Danh Mục Theo Độ Tuổi & Giới Tính
            </h2>
          </div>
          <p className="text-sm text-[#5e6762] max-w-md">
            Thiết kế đo ni đóng giày cho từng giai đoạn tăng trưởng thể chất và sở thích năng động của bé.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Bé Trai 3-6 Tuổi */}
          <div
            onClick={() => onNavigate('boys', '3-6')}
            className="group relative rounded-3xl bg-[#f7f3ec] p-4 flex flex-col overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer border border-[#e3ded5]"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfqaAdtrthPw3XUVLenNFnm6tOQwPl_IbwkDPrV8zeX1QYiGteU5kO2b7VkByDm1PA9PdLocdXtLa2qBuk3gJmUMv173tJjg-Z1frZqOK-3TV7nTW2ESe9SBCUdA-4bB33sC896jodwZcCv4HgOFsxlCVBuG5xunUKo0SroBwcUde4S3nUpsf5gIppUIfIweFv108iGTBxRjvDaem2JBoRnRMXLYFUo5ZYRrBdNeZpLpWXs4xzO3UxHA"
                alt="Bé Trai 3-6 Tuổi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#2c6653] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                3 – 6 Tuổi
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-[#1c1c17] group-hover:text-[#2c6653] transition-colors">
                Bé Trai 3–6 Tuổi
              </h3>
              <span className="material-symbols-outlined text-[#2c6653] group-hover:translate-x-1 transition-transform text-[20px]">
                arrow_forward
              </span>
            </div>
            <p className="text-xs text-[#5e6762] mt-1">
              Năng động, cotton hữu cơ siêu thoáng mát cho bé vô tư lăn xả.
            </p>
          </div>

          {/* Bé Gái 3-6 Tuổi */}
          <div
            onClick={() => onNavigate('girls', '3-6')}
            className="group relative rounded-3xl bg-[#ffdbd2]/20 p-4 flex flex-col overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer border border-[#ffdbd2]"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACZfMvvQ9lg08zFs0YylgSbzlMiyzG_7sAINQ8oMZ-vb7XuWhf3iob0mbJiJBm6SfzjjONWP1XMBpn7IekFyaX8qwwCU0EpVjut8vjrRQMpLRSxJJ_z7tDAvPaaw1h22O1S2fcOi_kcIKYr4DBFlnbCq43hyRPJQ7BTgucnVJ4crL9KT1jtQTTG8GFlmfkK6BnAzt0rGeOp63ucOpZrN3IU86feTMzzVPWjf2jA9AJYVTLoorkdz-6MQ"
                alt="Bé Gái 3-6 Tuổi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#904b39] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                3 – 6 Tuổi
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-[#1c1c17] group-hover:text-[#904b39] transition-colors">
                Bé Gái 3–6 Tuổi
              </h3>
              <span className="material-symbols-outlined text-[#904b39] group-hover:translate-x-1 transition-transform text-[20px]">
                arrow_forward
              </span>
            </div>
            <p className="text-xs text-[#5e6762] mt-1">
              Váy hoa bồng bềnh, chất vải tơ cotton dịu dàng biến bé thành công chúa nhỏ.
            </p>
          </div>

          {/* Bé Trai 7-12 Tuổi */}
          <div
            onClick={() => onNavigate('boys', '7-12')}
            className="group relative rounded-3xl bg-[#f7f3ec] p-4 flex flex-col overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer border border-[#e3ded5]"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIlkbhms6Xsss7IeJwusX45zNQ5tKDWrH9ZCRG33I9AxPF8gF_YBjTncj1ZwpjSNYnHYYxltNJ65LPFDPwpMeg6IiGICe-nYq5QF7I0wXvIfN1cZ5FjlB_0snY2vZv4Qf7fVBxiVaPvAinBltKt_yBmyLo-C0p1trWG_H-iMGsdy_z2iotnsI5QOZu64UcBAEtdw2ayceKvrkFwQ2p9jnMYBV6xj1HpVsot06GGSys88bCJGDvzbjMMQ"
                alt="Bé Trai 7-12 Tuổi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#467f6b] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                7 – 12 Tuổi
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-[#1c1c17] group-hover:text-[#2c6653] transition-colors">
                Bé Trai 7–12 Tuổi
              </h3>
              <span className="material-symbols-outlined text-[#2c6653] group-hover:translate-x-1 transition-transform text-[20px]">
                arrow_forward
              </span>
            </div>
            <p className="text-xs text-[#5e6762] mt-1">
              Cá tính & phong trần, áo sơ mi cộc tay, polo lịch lãm khi đến trường hay dạo phố.
            </p>
          </div>

          {/* Bé Gái 7-12 Tuổi */}
          <div
            onClick={() => onNavigate('girls', '7-12')}
            className="group relative rounded-3xl bg-[#ffdf90]/20 p-4 flex flex-col overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer border border-[#ffdf90]"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA40iYIN5cHCi4MnDoevRUrP2FIm7qopmRnDlqWCjlDnY6rOr42jD9djj4lUYaO2V3yb0TNQxGt8JjuYjfCBeUuBit54TwQVDTKh8dXDSGoc6rjZx9ufuwFLcSBftEj_bDO6WKxRxTesEPmg5gFgcgdzC-4JOEMOOwW3iTCdt8k8hQStYI4PRB1dB7al-dAjgM80fyF4mMiaeRd6BXcylU0R8bywIJgyPzza-vgfaie0xTEew3rWyFv8g"
                alt="Bé Gái 7-12 Tuổi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#c9a84e] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                7 – 12 Tuổi
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-base font-bold text-[#1c1c17] group-hover:text-[#c9a84e] transition-colors">
                Bé Gái 7–12 Tuổi
              </h3>
              <span className="material-symbols-outlined text-[#c9a84e] group-hover:translate-x-1 transition-transform text-[20px]">
                arrow_forward
              </span>
            </div>
            <p className="text-xs text-[#5e6762] mt-1">
              Thời trang dạo phố năng động, kiểu dáng hiện đại thanh lịch cho bé tự tin thể hiện gu riêng.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (NEW & BEST SELLERS) */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8" id="featured-products">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#904b39] text-xs font-bold uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[16px]">favorite</span>
              <span>Lựa chọn mẹ yêu thích</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c1c17]">
              Sản Phẩm Nổi Bật Dành Cho Bé
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#f1ede6] rounded-full overflow-x-auto max-w-full">
            {[
              { id: 'all', label: `Tất cả (${PRODUCTS.length})` },
              { id: 'best-seller', label: 'Bán chạy' },
              { id: 'new', label: 'Mới về' },
              { id: 'age-3-6', label: '3–6 Tuổi' },
              { id: 'age-7-12', label: '7–12 Tuổi' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProductFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-bold transition-all shrink-0 ${
                  productFilter === tab.id
                    ? 'bg-[#2c6653] text-white shadow-xs'
                    : 'text-[#5e6762] hover:text-[#2c6653]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8-12 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => onNavigate('products')}
            className="h-12 px-8 rounded-full bg-white border border-[#2c6653] text-[#2c6653] font-heading font-bold text-sm hover:bg-[#2c6653] hover:text-white transition-all shadow-xs flex items-center gap-2"
          >
            <span>Xem thêm tất cả sản phẩm Mầm Kids</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* 5. PROMO CALLOUT BANNER: Mix & Match & Tote Bag */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#2c6653] to-[#467f6b] p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="flex flex-col gap-2 max-w-xl z-10">
            <span className="px-3 py-1 rounded-full bg-white/20 text-[#b3efd7] text-xs font-bold uppercase tracking-wider w-fit">
              Trải nghiệm độc quyền
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">
              Phòng Phối Đồ Thông Minh Mix & Match
            </h3>
            <p className="text-sm text-[#ece8e0] leading-relaxed">
              Tự do chọn áo, quần và phụ kiện cho bé trên ma-nơ-canh trực quan. Nhận ngay voucher <strong>SET100</strong> giảm 100.000đ khi thêm trọn bộ trang phục vào giỏ hàng!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto">
            <button
              onClick={() => onNavigate('mixmatch')}
              className="w-full sm:w-auto h-12 px-7 rounded-full bg-white text-[#2c6653] font-heading font-bold text-sm hover:bg-[#b3efd7] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">styler</span>
              <span>Thử phối đồ ngay</span>
            </button>

            <button
              onClick={() => onNavigate('personalize')}
              className="w-full sm:w-auto h-12 px-6 rounded-full bg-[#12503f] text-[#b3efd7] font-heading font-bold text-sm hover:bg-[#002117] transition-all border border-white/20 flex items-center justify-center gap-2 shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">draw</span>
              <span>Thêu tên bé</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. 5 CAM KẾT VÀNG TỪ MẦM KIDS */}
      <section className="w-full bg-[#f7f3ec] py-12 sm:py-16 my-8 border-y border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#b3efd7] text-[#12503f] text-xs font-bold mb-2">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              GIÁ TRỊ CỐT LÕI
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c1c17]">
              5 Cam Kết Vàng Từ Mầm Kids
            </h2>
            <p className="text-sm text-[#5e6762] mt-2">
              Mỗi đường kim mũi chỉ là một lời hứa mang lại sự an tâm tuyệt đối cho ba mẹ và nụ cười rạng rỡ cho bé.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* 1 */}
            <div className="bg-white p-5 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center border border-[#e3ded5]">
              <div className="w-14 h-14 rounded-full bg-[#b3efd7]/50 text-[#2c6653] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">spa</span>
              </div>
              <h3 className="font-heading text-base font-bold text-[#1c1c17] mb-1.5">Chất liệu mềm mại</h3>
              <p className="text-xs text-[#5e6762] leading-relaxed">
                100% Organic Cotton đạt chuẩn, êm dịu bảo vệ tuyệt đối làn da nhạy cảm của trẻ nhỏ.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white p-5 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center border border-[#e3ded5]">
              <div className="w-14 h-14 rounded-full bg-[#ffdbd2]/50 text-[#904b39] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">child_care</span>
              </div>
              <h3 className="font-heading text-base font-bold text-[#1c1c17] mb-1.5">Thiết kế thoải mái</h3>
              <p className="text-xs text-[#5e6762] leading-relaxed">
                Form dáng chuẩn thể trạng trẻ Việt, đường may phẳng êm ái, cho bé tự do vận động cả ngày.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white p-5 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center border border-[#e3ded5]">
              <div className="w-14 h-14 rounded-full bg-[#ffdf90]/50 text-[#755b01] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">loyalty</span>
              </div>
              <h3 className="font-heading text-base font-bold text-[#1c1c17] mb-1.5">Giá cả hợp lý</h3>
              <p className="text-xs text-[#5e6762] leading-relaxed">
                Sản xuất trực tiếp tại xưởng may Việt Nam, tối ưu chi phí giúp ba mẹ thảnh thơi mua sắm.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white p-5 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center border border-[#e3ded5]">
              <div className="w-14 h-14 rounded-full bg-[#b3efd7]/50 text-[#2c6653] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">published_with_changes</span>
              </div>
              <h3 className="font-heading text-base font-bold text-[#1c1c17] mb-1.5">Đổi trả dễ dàng</h3>
              <p className="text-xs text-[#5e6762] leading-relaxed">
                Đổi size miễn phí trong 7 ngày tận nhà. Shipper đến nhận hàng đổi mà ba mẹ không cần đi xa.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white p-5 rounded-3xl shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center border border-[#e3ded5] sm:col-span-2 md:col-span-1">
              <div className="w-14 h-14 rounded-full bg-[#ffdbd2]/50 text-[#904b39] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[28px]">local_shipping</span>
              </div>
              <h3 className="font-heading text-base font-bold text-[#1c1c17] mb-1.5">Giao hàng toàn quốc</h3>
              <p className="text-xs text-[#5e6762] leading-relaxed">
                Hỏa tốc, đóng gói chỉn chu trong hộp quà mộc mạc thơm lừng mùi thảo mộc thiên nhiên.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FEEDBACK TỪ BA MẸ THÔNG THÁI */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[#755b01] text-xs font-bold uppercase tracking-wider mb-1">
              <span className="material-symbols-outlined text-[18px]">rate_review</span>
              YÊU THƯƠNG LAN TỎA
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c1c17]">
              Feedback Từ Các Ba Mẹ Thông Thái
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-[#f1ede6] px-4 py-2 rounded-full">
            <div className="flex text-[#c9a84e]">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-symbols-outlined text-[18px] material-symbols-fill">star</span>
              ))}
            </div>
            <span className="font-heading text-sm font-bold text-[#1c1c17]">4.98/5.0</span>
            <span className="text-[#5e6762] text-xs">(Hơn 8.200 đánh giá kiểm duyệt)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-xs border border-[#e3ded5] flex flex-col justify-between gap-4 relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-[#f1ede6] text-[40px] select-none pointer-events-none">
              format_quote
            </span>
            <div>
              <div className="flex text-[#c9a84e] mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-[16px] material-symbols-fill">star</span>
                ))}
              </div>
              <p className="text-sm text-[#1c1c17] italic leading-relaxed">
                “Bé Bơ nhà mình da nhạy cảm cực kỳ, mặc đồ thô ráp là mẩn đỏ ngay. Từ ngày đổi sang đồ cotton hữu cơ của Mầm Kids thì bé thích mê, sờ chất vải mềm như mây, giặt máy mấy lần vẫn không hề bai nhão hay xù lông.”
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-[#f1ede6]">
              <div className="w-11 h-11 rounded-full bg-[#ffdbd2] flex items-center justify-center text-[#904b39] font-bold font-heading">
                TH
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-[#1c1c17]">Mẹ Thu Hằng</h4>
                <p className="text-xs text-[#5e6762]">Bé Bơ (4 tuổi) • Hà Nội</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-xs border border-[#e3ded5] flex flex-col justify-between gap-4 relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-[#f1ede6] text-[40px] select-none pointer-events-none">
              format_quote
            </span>
            <div>
              <div className="flex text-[#c9a84e] mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-[16px] material-symbols-fill">star</span>
                ))}
              </div>
              <p className="text-sm text-[#1c1c17] italic leading-relaxed">
                “Rất thích cách đóng gói của shop, hộp giấy thân thiện môi trường lại thơm mùi quế nhè nhẹ. Mình mua áo sơ mi và áo thun cho cu Bon 8 tuổi đi học hè, form lên dáng vừa in, bạn ấy khen mặc mát không bị bí mồ hôi lưng.”
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-[#f1ede6]">
              <div className="w-11 h-11 rounded-full bg-[#b3efd7] flex items-center justify-center text-[#12503f] font-bold font-heading">
                QD
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-[#1c1c17]">Ba Quang Dũng</h4>
                <p className="text-xs text-[#5e6762]">Bé Bon (8 tuổi) • TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-3xl shadow-xs border border-[#e3ded5] flex flex-col justify-between gap-4 relative">
            <span className="material-symbols-outlined absolute top-6 right-6 text-[#f1ede6] text-[40px] select-none pointer-events-none">
              format_quote
            </span>
            <div>
              <div className="flex text-[#c9a84e] mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-[16px] material-symbols-fill">star</span>
                ))}
              </div>
              <p className="text-sm text-[#1c1c17] italic leading-relaxed">
                “Đặt váy công chúa pastel cho con gái diện sinh nhật 5 tuổi mà ai cũng khen. Dịch vụ đổi size tận nhà siêu nhanh, hôm trước nhờ hỗ trợ tăng lên 1 size thì hôm sau shipper đã mang chiếc mới đến đổi tận tay. Chấm 10/10!”
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-[#f1ede6]">
              <div className="w-11 h-11 rounded-full bg-[#ffdf90] flex items-center justify-center text-[#755b01] font-bold font-heading">
                MA
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-[#1c1c17]">Mẹ Mai Anh</h4>
                <p className="text-xs text-[#5e6762]">Bé Nhím (5 tuổi) • Đà Nẵng</p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. CLUB MẦM NHỎ BANNER */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#2c6653]/10 via-[#b3efd7]/30 to-[#ffdbd2]/30 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#e3ded5]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2c6653] text-white flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[24px]">card_giftcard</span>
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1c1c17]">
                Gia nhập Câu lạc bộ Mầm Nhỏ
              </h3>
              <p className="text-xs sm:text-sm text-[#5e6762]">
                Tặng ngay voucher 50.000đ vào ngày sinh nhật của bé và quyền ưu tiên thử mẫu mới.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto">
            <input
              type="tel"
              placeholder="Số điện thoại của ba mẹ..."
              className="h-11 px-5 rounded-full bg-white text-[#1c1c17] text-xs sm:text-sm outline-none border border-[#e3ded5] focus:border-[#2c6653] w-full sm:w-64"
            />
            <button
              onClick={() => onNavigate('promotions')}
              className="h-11 px-6 rounded-full bg-[#2c6653] text-white font-heading font-bold text-xs sm:text-sm hover:bg-[#12503f] transition-all whitespace-nowrap active:scale-95 shadow-xs w-full sm:w-auto"
            >
              Nhận quà ngay
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
