import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, PersonalizationData } from '../types';
import { useCart } from '../context/CartContext';

interface PersonalizationPageProps {
  onNavigate: (tab: string) => void;
}

export const PersonalizationPage: React.FC<PersonalizationPageProps> = ({ onNavigate }) => {
  const { addToCart, showToast } = useCart();

  const customizableProducts = PRODUCTS.filter((p) => p.isPersonalizable);
  const [selectedProduct, setSelectedProduct] = useState<Product>(customizableProducts[1] || customizableProducts[0]); // default to Váy hoa mùa hè
  const [childName, setChildName] = useState('Anna');
  const [selectedIcon, setSelectedIcon] = useState('🌸');
  const [selectedIconName, setSelectedIconName] = useState('Bông hoa');
  const [fontStyle, setFontStyle] = useState('Nét thêu tay mềm mại');
  const [threadColor, setThreadColor] = useState('#2c6653');
  const [threadColorName, setThreadColorName] = useState('Xanh sage');
  const [position, setPosition] = useState('Ngực áo (Trái)');
  const [selectedSize, setSelectedSize] = useState('110');
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]?.name || '');

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(val) + 'đ';
  };

  const icons = [
    { icon: '🌸', name: 'Bông hoa' },
    { icon: '🌱', name: 'Mầm xanh' },
    { icon: '🐻', name: 'Chú gấu' },
    { icon: '⭐', name: 'Ngôi sao' },
    { icon: '💖', name: 'Trái tim' },
    { icon: '🌈', name: 'Cầu vồng' },
    { icon: '🦁', name: 'Sư tử con' },
    { icon: '☀️', name: 'Mặt trời' }
  ];

  const threadColors = [
    { name: 'Xanh sage', hex: '#2c6653' },
    { name: 'Hồng đào', hex: '#fea58e' },
    { name: 'Vàng cam đất', hex: '#e3ad3b' },
    { name: 'Nâu caramel', hex: '#904b39' },
    { name: 'Trắng kem', hex: '#fbf8ed' }
  ];

  const fontOptions = [
    { id: 'Nét thêu tay mềm mại', label: 'Thêu tay mềm mại', sample: 'cursive' },
    { id: 'Chữ in thanh lịch', label: 'Chữ in thanh lịch', sample: 'sans-serif' },
    { id: 'Nét mộc tự nhiên', label: 'Nét mộc mạc', sample: 'serif' }
  ];

  const positions = [
    'Ngực áo (Trái)',
    'Tà áo dưới',
    'Sau lưng áo',
    'Cổ áo sau'
  ];

  const handleAddToCart = () => {
    const pData: PersonalizationData = {
      enabled: true,
      childName: childName.trim() || 'Bé Yêu',
      icon: selectedIcon,
      iconName: selectedIconName,
      fontStyle,
      threadColor,
      threadColorName,
      position
    };

    addToCart(selectedProduct, selectedColor, selectedSize, 1, pData);
    showToast(
      'Đã lưu mẫu thêu cá nhân hóa!',
      `${selectedProduct.name} (Thêu: ${selectedIcon} ${pData.childName}) đã được thêm vào giỏ. Nhớ áp dụng mã MAMM20 nhé!`,
      'gift'
    );
  };

  return (
    <div className="w-full flex flex-col">
      {/* Header Banner */}
      <section className="w-full bg-[#f7f3ec] py-6 sm:py-8 px-4 sm:px-6 border-b border-[#e3ded5]">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b3efd7] text-[#12503f] text-xs font-bold w-fit">
              <span className="material-symbols-outlined text-[16px]">draw</span>
              <span>Dịch vụ thêu tên thủ công độc bản</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#1c1c17] tracking-tight">
              Cá Nhân Hóa Trang Phục Cho Bé Yêu
            </h1>
            <p className="text-xs sm:text-sm text-[#5e6762] max-w-xl">
              Thêu tên bé, ngày sinh nhật hoặc biệt danh đáng yêu cùng các icon xinh xắn. Mầm Kids miễn phí 100% công thêu và tặng thêm voucher <strong>MAMM20</strong> giảm 20% cho đơn thêu tên.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl shadow-xs border border-[#e3ded5]">
            <span className="material-symbols-outlined text-[24px] text-[#2c6653]">verified</span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#1c1c17]">Chỉ cotton tơ tằm bền màu</span>
              <span className="text-[11px] text-[#5e6762]">Êm dịu 100%, không cộm ngứa da bé</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Customizer Canvas */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Live Interactive Garment Simulation (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sticky top-36">
            <div className="relative w-full rounded-3xl bg-white p-6 shadow-sm border border-[#e3ded5] flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-3 border-b border-[#f1ede6] text-xs">
                <span className="font-heading font-bold text-[#2c6653] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  Mô phỏng thêu thực tế
                </span>
                <span className="bg-[#b3efd7]/50 text-[#12503f] font-bold px-2 py-0.5 rounded-full">
                  Độ chính xác cao
                </span>
              </div>

              {/* Garment Frame with Simulated Embroidery Placement */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#faf6ed] my-4 shadow-inner border border-[#e8dfcf] flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />

                {/* Embroidery Placement Overlay */}
                <div
                  className={`absolute p-3 rounded-2xl bg-white/85 backdrop-blur-sm border border-[#2c6653]/30 shadow-md flex items-center gap-2 transform transition-all duration-300 ${
                    position.includes('Trái')
                      ? 'top-24 left-8'
                      : position.includes('Tà')
                      ? 'bottom-12 right-8'
                      : position.includes('Sau')
                      ? 'top-16 left-1/2 -translate-x-1/2'
                      : 'top-20 left-1/2 -translate-x-1/2'
                  }`}
                >
                  <span className="text-2xl animate-pulse">{selectedIcon}</span>
                  <div className="flex flex-col">
                    <span
                      className="font-heading text-lg font-bold tracking-wide"
                      style={{
                        color: threadColor,
                        fontStyle: fontStyle.includes('mềm mại') ? 'italic' : 'normal'
                      }}
                    >
                      {childName || 'Tên của bé'}
                    </span>
                    <span className="text-[9px] text-[#5e6762]">{position}</span>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">
                  Mũi thêu chữ thủ công chìm êm ái
                </div>
              </div>

              {/* Configuration Summary Strip */}
              <div className="w-full flex flex-col gap-2 pt-2 border-t border-[#f1ede6] text-xs text-[#5e6762]">
                <div className="flex justify-between">
                  <span>Sản phẩm:</span>
                  <strong className="text-[#1c1c17]">{selectedProduct.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Chi tiết thêu:</span>
                  <strong className="text-[#2c6653]">
                    {selectedIcon} {childName || 'Tên bé'} ({threadColorName})
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span>Phí dịch vụ thêu:</span>
                  <span className="text-[#2c6653] font-bold">Miễn phí (Tiết kiệm 50.000đ)</span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-[#f1ede6]">
                  <span className="font-heading font-bold text-sm text-[#1c1c17]">Tổng cộng:</span>
                  <span className="font-heading text-2xl font-bold text-[#2c6653]">
                    {formatVND(selectedProduct.price)}
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full mt-2 h-12 rounded-full bg-[#2c6653] hover:bg-[#12503f] text-white font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  <span>Thêm sản phẩm thêu tên vào giỏ</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Customization Controls (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Step 1: Choose Garment */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <span className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#b3efd7] text-[#12503f] text-xs flex items-center justify-center font-bold">1</span>
                <span>Chọn trang phục muốn thêu tên</span>
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {customizableProducts.map((prod) => {
                  const isSelected = selectedProduct.id === prod.id;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => {
                        setSelectedProduct(prod);
                        setSelectedColor(prod.colors[0]?.name || '');
                        setSelectedSize(prod.sizes[0] || '100');
                      }}
                      className={`p-2.5 rounded-2xl flex flex-col text-left transition-all border ${
                        isSelected
                          ? 'bg-[#f7f3ec] border-[#2c6653] ring-2 ring-[#2c6653] shadow-xs'
                          : 'bg-white border-[#e3ded5] hover:border-[#2c6653]'
                      }`}
                    >
                      <img src={prod.image} alt={prod.name} className="w-full aspect-[4/3] rounded-xl object-cover mb-2" />
                      <span className="font-heading text-xs font-bold text-[#1c1c17] line-clamp-1">{prod.name}</span>
                      <span className="text-xs font-bold text-[#2c6653] mt-1">{formatVND(prod.price)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Child's Name & Nickname */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <span className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#b3efd7] text-[#12503f] text-xs flex items-center justify-center font-bold">2</span>
                <span>Nhập tên hoặc biệt danh của bé</span>
              </span>

              <div className="flex flex-col gap-1.5">
                <div className="relative">
                  <input
                    type="text"
                    maxLength={14}
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Ví dụ: Anna, Bống, Miu, Bon..."
                    className="w-full h-12 px-4 rounded-2xl bg-[#f1ede6] text-[#1c1c17] font-heading font-bold text-base outline-none focus:bg-white focus:ring-2 focus:ring-[#2c6653]/30 border border-transparent focus:border-[#2c6653]"
                  />
                  <span className="absolute right-3 top-3 text-xs text-[#5e6762]">
                    {childName.length}/14 ký tự
                  </span>
                </div>
                <span className="text-[11px] text-[#5e6762]">
                  * Ba mẹ có thể nhập tên, tên lót hoặc biệt danh thân mật ở nhà của bé.
                </span>
              </div>
            </div>

            {/* Step 3: Choose Cute Icon */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-[#1c1c17] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#b3efd7] text-[#12503f] text-xs flex items-center justify-center font-bold">3</span>
                  <span>Chọn biểu tượng thêu đi kèm</span>
                </span>
                <span className="text-xs font-bold text-[#2c6653]">{selectedIconName}</span>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {icons.map((it) => {
                  const isSelected = selectedIcon === it.icon;
                  return (
                    <button
                      key={it.name}
                      onClick={() => {
                        setSelectedIcon(it.icon);
                        setSelectedIconName(it.name);
                      }}
                      className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all border ${
                        isSelected
                          ? 'bg-[#f7f3ec] border-[#2c6653] ring-2 ring-[#2c6653] scale-105 shadow-xs'
                          : 'bg-white border-[#e3ded5] hover:bg-[#f1ede6]'
                      }`}
                    >
                      <span className="text-2xl">{it.icon}</span>
                      <span className="text-[10px] font-bold text-[#1c1c17] line-clamp-1">{it.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Font Style & Thread Color */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Font Style */}
              <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
                <span className="font-heading text-sm font-bold text-[#1c1c17] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#ffdbd2] text-[#904b39] text-xs flex items-center justify-center font-bold">4</span>
                  <span>Kiểu chữ thêu</span>
                </span>
                <div className="flex flex-col gap-1.5">
                  {fontOptions.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFontStyle(f.id)}
                      className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border ${
                        fontStyle === f.id
                          ? 'bg-[#2c6653] text-white border-[#2c6653]'
                          : 'bg-[#f1ede6] text-[#1c1c17] border-transparent hover:bg-[#ece8e0]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Thread Color */}
              <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-3">
                <span className="font-heading text-sm font-bold text-[#1c1c17] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#ffdf90] text-[#755b01] text-xs flex items-center justify-center font-bold">5</span>
                  <span>Màu chỉ thêu</span>
                </span>
                <div className="flex flex-col gap-1.5">
                  {threadColors.map((tc) => (
                    <button
                      key={tc.name}
                      onClick={() => {
                        setThreadColor(tc.hex);
                        setThreadColorName(tc.name);
                      }}
                      className={`p-2 rounded-xl flex items-center gap-2.5 text-xs font-bold transition-all border ${
                        threadColor === tc.hex
                          ? 'bg-[#f7f3ec] border-[#2c6653] ring-1 ring-[#2c6653]'
                          : 'bg-white border-[#e3ded5] hover:bg-[#f1ede6]'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full border border-black/10 shrink-0" style={{ backgroundColor: tc.hex }} />
                      <span className="text-[#1c1c17]">{tc.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5: Position & Size */}
            <div className="p-5 rounded-3xl bg-white border border-[#e3ded5] shadow-xs flex flex-col gap-4">
              <div>
                <span className="font-heading text-sm font-bold text-[#1c1c17] block mb-2">
                  Vị trí thêu tinh tế:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {positions.map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setPosition(pos)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        position === pos
                          ? 'bg-[#2c6653] text-white border-[#2c6653]'
                          : 'bg-[#f1ede6] text-[#404944] border-transparent hover:bg-[#ece8e0]'
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-heading text-sm font-bold text-[#1c1c17] block mb-2">
                  Chọn kích cỡ sản phẩm:
                </span>
                <div className="flex items-center gap-2">
                  {selectedProduct.sizes.map((sz) => (
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
