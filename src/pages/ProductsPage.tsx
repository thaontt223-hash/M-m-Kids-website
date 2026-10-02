import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, GenderCategory, AgeRange } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface ProductsPageProps {
  onSelectProduct: (product: Product) => void;
  onNavigate: (tab: string) => void;
  initialGender?: GenderCategory;
  initialAge?: AgeRange;
  searchQuery?: string;
  onClearSearch?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectProduct,
  onNavigate,
  initialGender = 'all',
  initialAge = 'all',
  searchQuery = '',
  onClearSearch
}) => {
  const [selectedGender, setSelectedGender] = useState<GenderCategory>(initialGender);
  const [selectedAge, setSelectedAge] = useState<AgeRange>(initialAge);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedPrice, setSelectedPrice] = useState<'all' | 'under150' | '150-250' | 'over250'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'bestseller' | 'price-asc' | 'price-desc'>('default');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'Tất cả loại' },
    { id: 'tshirt', label: 'Áo thun & Sơ mi' },
    { id: 'dress', label: 'Váy / Đầm' },
    { id: 'shorts', label: 'Quần short / Jean / Jogger' },
    { id: 'set', label: 'Đồ bộ' },
    { id: 'jacket', label: 'Áo khoác & Hoodie' },
    { id: 'sport', label: 'Đồ thể thao' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q) || p.vietnameseName.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        if (!matchName && !matchDesc) return false;
      }

      // Gender filter
      if (selectedGender !== 'all') {
        if (p.gender !== selectedGender && p.gender !== 'both') return false;
      }

      // Age filter
      if (selectedAge !== 'all') {
        if (p.ageRange !== selectedAge) return false;
      }

      // Category filter
      if (selectedCategory !== 'all') {
        if (p.category !== selectedCategory) return false;
      }

      // Price filter
      if (selectedPrice === 'under150' && p.price >= 150000) return false;
      if (selectedPrice === '150-250' && (p.price < 150000 || p.price > 250000)) return false;
      if (selectedPrice === 'over250' && p.price <= 250000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'bestseller') {
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      }
      if (sortBy === 'price-asc') {
        return a.price - b.price;
      }
      if (sortBy === 'price-desc') {
        return b.price - a.price;
      }
      return 0;
    });
  }, [searchQuery, selectedGender, selectedAge, selectedCategory, selectedPrice, sortBy]);

  const hasActiveFilters =
    selectedGender !== 'all' ||
    selectedAge !== 'all' ||
    selectedCategory !== 'all' ||
    selectedPrice !== 'all' ||
    searchQuery !== '';

  const resetAllFilters = () => {
    setSelectedGender('all');
    setSelectedAge('all');
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSortBy('default');
    if (onClearSearch) onClearSearch();
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Banner Header */}
      <section className="w-full bg-[#f7f3ec] py-6 sm:py-8 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <nav className="flex items-center gap-2 text-xs text-[#5e6762]">
              <button onClick={() => onNavigate('home')} className="hover:text-[#2c6653] transition-colors">
                Trang chủ
              </button>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#2c6653] font-bold">Cửa hàng Mầm Kids</span>
            </nav>

            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="font-heading text-2xl sm:text-3xl text-[#2c6653] font-bold tracking-tight">
                {searchQuery ? `Kết quả tìm kiếm cho "${searchQuery}"` : 'Tất Cả Trang Phục Bé Yêu'}
              </h1>
              <span className="px-3 py-0.5 rounded-full bg-[#b3efd7]/50 text-[#12503f] font-heading text-xs font-bold">
                {filteredProducts.length} sản phẩm
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5e6762] max-w-xl leading-relaxed">
              Chất liệu Organic Cotton đạt chuẩn an toàn quốc tế Oeko-Tex, nâng niu làn da nhạy cảm và cho bé thoải mái vận động suốt ngày dài.
            </p>
          </div>

          {/* Quick Trust Badges */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xs border border-[#e3ded5]">
              <div className="w-9 h-9 rounded-full bg-[#b3efd7]/40 flex items-center justify-center text-[#2c6653] shrink-0">
                <span className="material-symbols-outlined text-[20px]">spa</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-heading font-bold text-[#1c1c17]">100% Organic</span>
                <span className="text-[11px] text-[#5e6762]">Chứng nhận GOTS</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xs border border-[#e3ded5]">
              <div className="w-9 h-9 rounded-full bg-[#ffdbd2]/50 flex items-center justify-center text-[#904b39] shrink-0">
                <span className="material-symbols-outlined text-[20px]">sync_alt</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-heading font-bold text-[#1c1c17]">Đổi trả 7 ngày</span>
                <span className="text-[11px] text-[#5e6762]">Tận nơi miễn phí</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Interactive Filter Bar */}
      <section className="sticky top-24 md:top-28 z-30 bg-[#fdf9f1]/95 backdrop-blur-md py-3 px-4 sm:px-6 shadow-xs border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-3">
          {/* Row 1: Gender Tabs, Age Chips, Sort */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Gender Pills */}
            <div className="flex items-center gap-1 p-1 bg-[#ece8e0] rounded-full shrink-0">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'boy', label: 'Bé Trai' },
                { id: 'girl', label: 'Bé Gái' }
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGender(g.id as any)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all ${
                    selectedGender === g.id
                      ? 'bg-[#2c6653] text-white shadow-xs'
                      : 'text-[#404944] hover:text-[#2c6653]'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>

            {/* Age Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-[#5e6762] uppercase tracking-wider font-bold hidden sm:inline">
                Độ tuổi:
              </span>
              {[
                { id: 'all', label: 'Mọi lứa tuổi' },
                { id: '3-6', label: '3–6 tuổi' },
                { id: '7-12', label: '7–12 tuổi' }
              ].map((a) => (
                <button
                  key={a.id}
                  onClick={() => setSelectedAge(a.id as any)}
                  className={`px-3 py-1 rounded-full text-xs font-heading font-bold transition-all ${
                    selectedAge === a.id
                      ? 'bg-[#2c6653] text-white shadow-xs'
                      : 'bg-[#f1ede6] text-[#404944] hover:bg-[#ece8e0]'
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>

            {/* Sort & Reset */}
            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border border-[#e3ded5] shadow-xs">
                <span className="material-symbols-outlined text-[16px] text-[#5e6762]">sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs sm:text-sm text-[#1c1c17] font-semibold outline-none cursor-pointer"
                >
                  <option value="default">Mới nhất</option>
                  <option value="bestseller">Bán chạy nhất</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-[#904b39] hover:underline font-bold flex items-center gap-0.5"
                >
                  <span className="material-symbols-outlined text-[15px]">restart_alt</span>
                  <span>Xóa lọc</span>
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Category Pills & Price Brackets */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#e3ded5]/60">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-heading font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#2c6653] text-white shadow-xs'
                      : 'bg-white text-[#5e6762] hover:bg-[#f1ede6] border border-[#e3ded5]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Price Brackets */}
            <div className="flex items-center gap-1 bg-[#ece8e0]/60 p-1 rounded-full shrink-0 text-xs">
              <span className="text-[#5e6762] px-2 hidden sm:inline">Mức giá:</span>
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'under150', label: '< 150k' },
                { id: '150-250', label: '150k - 250k' },
                { id: 'over250', label: '> 250k' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPrice(p.id as any)}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    selectedPrice === p.id
                      ? 'bg-[#2c6653] text-white font-bold'
                      : 'text-[#5e6762] hover:text-[#2c6653]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-8">
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#f1ede6] flex items-center justify-center text-[#2c6653] mb-4">
              <span className="material-symbols-outlined text-[36px]">filter_alt_off</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-[#1c1c17] mb-2">
              Không tìm thấy sản phẩm phù hợp
            </h3>
            <p className="text-sm text-[#5e6762] mb-6">
              Mẹ hãy thử bỏ bớt bộ lọc hoặc chọn mức giá / độ tuổi rộng hơn nhé!
            </p>
            <button
              onClick={resetAllFilters}
              className="px-6 py-2.5 rounded-full bg-[#2c6653] text-white font-heading font-bold text-sm hover:bg-[#12503f] transition-all shadow-xs"
            >
              Xem tất cả {PRODUCTS.length} sản phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
              />
            ))}
          </div>
        )}
      </section>

      {/* Size Assistant Bottom Banner */}
      <section className="w-full bg-[#f7f3ec] py-10 px-4 sm:px-6 border-t border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b3efd7]/50 text-[#12503f] text-xs font-bold w-fit">
              <span className="material-symbols-outlined text-[16px]">straighten</span>
              Trợ thủ chọn size Mầm Kids
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1c1c17]">
              Bé mặc vừa vặn, không lo đổi trả
            </h2>
            <p className="text-sm text-[#5e6762] leading-relaxed">
              Form dáng Mầm Kids được thiết kế dựa trên số đo nhân trắc học chuẩn của trẻ em Việt Nam, thêm 3cm độ dư vận động để bé thoải mái chạy nhảy và lớn dần tự nhiên.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('sizeguide')}
                className="px-5 py-2.5 rounded-full bg-white border border-[#2c6653] text-[#2c6653] font-heading font-bold text-sm hover:bg-[#2c6653] hover:text-white transition-all shadow-xs flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">table_chart</span>
                <span>Xem Bảng hướng dẫn chọn size chi tiết</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-xs border border-[#e3ded5] flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#f1ede6] pb-3">
              <h3 className="font-heading font-bold text-base text-[#1c1c17] flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2c6653]">tune</span>
                Gợi ý size nhanh theo chiều cao
              </h3>
              <span className="text-xs font-bold text-[#2c6653] bg-[#b3efd7]/40 px-2.5 py-0.5 rounded-full">
                Chuẩn 98%
              </span>
            </div>

            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-[#5e6762]">
                <span>Chiều cao của bé:</span>
                <strong className="text-base text-[#2c6653] font-bold">110 cm</strong>
              </div>
              <div className="w-full h-2 rounded-full bg-[#f1ede6] relative">
                <div className="w-1/2 h-full rounded-full bg-[#2c6653]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2c6653] ring-4 ring-white shadow-xs" />
              </div>
              <div className="flex justify-between text-xs text-[#888e89]">
                <span>90 cm (3 tuổi)</span>
                <span>120 cm (6-7 tuổi)</span>
                <span>155 cm (12 tuổi)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#fdf9f1] border border-[#ffdf90] flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-[#5e6762]">Size khuyên chọn:</span>
                <strong className="font-heading text-lg text-[#2c6653] font-bold">
                  Size 110 (16-19 kg)
                </strong>
              </div>
              <span className="text-xs bg-[#ffdf90] text-[#755b01] font-bold px-3 py-1 rounded-full">
                Bé mặc thoải mái đến hè
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
