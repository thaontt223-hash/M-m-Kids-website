import { Promotion } from '../types';

export const PROMOTIONS: Promotion[] = [
  {
    code: 'WELCOME50',
    title: 'Giảm 50.000đ Đơn Đầu Tiên',
    description: 'Giảm ngay 50.000đ cho đơn hàng đầu tiên của ba mẹ tại Mầm Kids từ 399.000đ.',
    discountType: 'fixed',
    discountValue: 50000,
    minOrderValue: 399000,
    validUntil: '31/12/2025',
    tag: 'Khách hàng mới'
  },
  {
    code: 'SET100',
    title: 'Giảm 100.000đ Khi Mua Trọn Set',
    description: 'Giảm 100.000đ khi phối trọn bộ trang phục Mix & Match (Áo + Quần/Váy) từ 450.000đ.',
    discountType: 'fixed',
    discountValue: 100000,
    minOrderValue: 450000,
    validUntil: '31/12/2025',
    tag: 'Mix & Match'
  },
  {
    code: 'MAMM20',
    title: 'Giảm 20% Sản Phẩm Thêu Tên',
    description: 'Ưu đãi giảm 20% cho sản phẩm có dịch vụ thêu tên cá nhân hóa độc bản cho bé.',
    discountType: 'percentage',
    discountValue: 0.20,
    minOrderValue: 200000,
    validUntil: '31/12/2025',
    tag: 'Cá nhân hóa'
  },
  {
    code: 'FREESHIP',
    title: 'Miễn Phí Vận Chuyển Toàn Quốc',
    description: 'Miễn phí giao hàng hỏa tốc toàn quốc tận nhà cho đơn hàng từ 299.000đ.',
    discountType: 'shipping',
    discountValue: 30000,
    minOrderValue: 299000,
    validUntil: '31/12/2025',
    tag: 'Vận chuyển'
  }
];

export const FREE_GIFT_ITEM = {
  name: 'Túi Tote Canvas Mầm Kids Thân Thiện Môi Trường',
  description: 'Tặng miễn phí cho mọi đơn hàng (Không yêu cầu giá trị tối thiểu). Vải bố canvas organic dày dặn in logo mầm nhỏ tươi sáng.',
  originalPrice: 89000,
  price: 0,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALUu2NvDBWZpSZ6_3dzqmIStoxUV9xCHM2CPt1Z89oNPE9ibsvRYI3fTNGxd6S66vwm0tNo5JlHKIM3W8_d15fr5RNqCtySSFpWLBcbsjuQ83nAzPi1Ry91XXIWcYVqqSfG6Xca0xQRIBFwVLTYEhKY7P0Thypx2E-0ypRsxJaMWasP0gLuh0o8v6qym9jzvB8PlF3wwS5vKWVzNG3LK8QmDEVk2wNOLpUsZpOeTfP6NJ7ROaSl44Rcw'
};
