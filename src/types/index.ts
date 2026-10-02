export type GenderCategory = 'all' | 'boy' | 'girl' | 'both';
export type AgeRange = 'all' | '3-6' | '7-12';
export type ProductCategory = 
  | 'all' 
  | 'tshirt' 
  | 'dress' 
  | 'shorts' 
  | 'set' 
  | 'jacket' 
  | 'sport' 
  | 'accessory';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Review {
  id: string;
  author: string;
  childAge: string;
  city: string;
  rating: number;
  comment: string;
  sizePurchased: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  vietnameseName: string;
  sku: string;
  price: number;
  originalPrice: number;
  category: ProductCategory;
  gender: GenderCategory;
  ageRange: AgeRange;
  rating: number;
  reviewCount: number;
  image: string;
  galleryImages: string[];
  colors: ProductColor[];
  sizes: string[];
  description: string;
  fabricDetails: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isPersonalizable?: boolean;
  tag?: string;
  highlights: string[];
  reviews?: Review[];
}

export interface PersonalizationData {
  enabled: boolean;
  childName: string;
  icon: string;
  iconName: string;
  fontStyle: string;
  threadColor: string;
  threadColorName: string;
  position: string;
}

export interface CartItem {
  id: string; // unique cart entry id
  productId: string;
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
  personalization?: PersonalizationData;
  isFreeGift?: boolean;
}

export interface Promotion {
  code: string;
  title: string;
  description: string;
  discountType: 'fixed' | 'percentage' | 'shipping';
  discountValue: number;
  minOrderValue: number;
  validUntil: string;
  appliedCategory?: string;
  tag: string;
}

export interface OrderInfo {
  orderId: string;
  customerName: string;
  phone: string;
  email: string;
  province: string;
  district: string;
  ward: string;
  address: string;
  note: string;
  paymentMethod: 'cod' | 'vietqr';
  checkoutType: 'guest' | 'member';
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  grandTotal: number;
  appliedPromo?: string;
  createdAt: string;
  estimatedDelivery: string;
  status: 'processing' | 'confirmed' | 'embroidering' | 'shipping' | 'delivered';
}

export interface MixMatchItem {
  id: string;
  name: string;
  category: 'top' | 'bottom' | 'accessory' | 'footwear';
  gender: 'boy' | 'girl' | 'both';
  price: number;
  originalPrice: number;
  image: string;
  colorName: string;
  colorHex: string;
  description: string;
}
