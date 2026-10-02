import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, PersonalizationData, Promotion, OrderInfo } from '../types';
import { PROMOTIONS, FREE_GIFT_ITEM } from '../data/promotions';

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    selectedColor: string,
    selectedSize: string,
    quantity?: number,
    personalization?: PersonalizationData
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  appliedPromo: Promotion | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  grandTotal: number;
  totalItemsCount: number;
  freeShippingProgress: number; // 0 to 100
  freeShippingThreshold: number; // 299000
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  orders: OrderInfo[];
  placeOrder: (orderData: Omit<OrderInfo, 'orderId' | 'createdAt' | 'status' | 'estimatedDelivery'>) => OrderInfo;
  latestOrder: OrderInfo | null;
  activeToast: { title: string; message: string; type?: 'success' | 'info' | 'gift' } | null;
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'gift') => void;
  closeToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 299000;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Pre-seed cart with 2 realistic initial items so parent immediately sees an active cart
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 'init-item-1',
      productId: 'p1',
      product: {
        id: 'p1',
        sku: 'MK-TG01',
        name: 'Áo thun cotton Gấu Nhỏ',
        vietnameseName: 'Áo thun cotton Gấu Nhỏ Organic',
        price: 149000,
        originalPrice: 190000,
        category: 'tshirt',
        gender: 'both',
        ageRange: '3-6',
        rating: 5.0,
        reviewCount: 124,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4AxR08xkzZRf6vV654yw2PIMjKT4p3s7Q4BFtybhuEzfhAD8BCcA_AsOrDdAoo5bYV48EydP0kw_Dko1joVv_RI4H0IeTjE2vVdw2NclwwpluN4bL596cqa1YeB4RvqhBqt3dm1om2TlF6VD1XbAd07HZLfppfseuPv77HDGpcblV_jsvg_hQhqNzy_6f48OgjMbmxkBWub6jtiWN2KPYaLiPUyd1ejhS_yzmFIa6dpKj0MgASyyzZg',
        galleryImages: [],
        colors: [{ name: 'Vàng bơ', hex: '#fae8b2' }],
        sizes: ['90', '100', '110', '120'],
        description: 'Chất liệu 100% cotton thoáng mát, thêu nổi sắc sảo',
        fabricDetails: '100% Organic Cotton',
        highlights: ['Vải hữu cơ Oeko-Tex']
      },
      selectedColor: 'Vàng bơ',
      selectedSize: 'Size 100',
      quantity: 2
    },
    {
      id: 'init-item-2',
      productId: 'p2',
      product: {
        id: 'p2',
        sku: 'MK-VH02',
        name: 'Váy hoa mùa hè',
        vietnameseName: 'Váy hoa mùa hè tơ cotton muslin',
        price: 229000,
        originalPrice: 285000,
        category: 'dress',
        gender: 'girl',
        ageRange: '3-6',
        rating: 4.9,
        reviewCount: 89,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQFxS5iLwVLV4H9wcUUNjfVjkjr8NiLmhdWsRza7ridP-pJ67l2hsoajp8cjEEXT-bwlZ0tfN9S0sk1BrXYEdGVfmK2BiWdNhasfvdNQ3s3VVJMtA6iH47TRaE-k2k14ecLW2sWUMhmuOCXgUpRiaaMQe2VBYZ43D0JaqN2mos6XRIz_PPZYDc7XL3-Bmu_iWymnXMrUxgEl1bdFXOX9zo9o3A81RkMJ9NlZ6zr15W7HHzPDPAnedINA',
        galleryImages: [],
        colors: [{ name: 'Hồng pastel', hex: '#fcd4dc' }],
        sizes: ['90', '100', '110', '120'],
        description: 'Vải xô muslin 2 lớp mềm mại, bé mặc đi tiệc hay đi biển',
        fabricDetails: '100% Cotton Muslin double gauze',
        highlights: ['Vải Muslin 2 lớp']
      },
      selectedColor: 'Hồng pastel',
      selectedSize: 'Size 110',
      quantity: 1,
      personalization: {
        enabled: true,
        childName: 'Anna',
        icon: '🌸',
        iconName: 'Bông hoa',
        fontStyle: 'Nét thêu tay mềm mại',
        threadColor: '#467f6b',
        threadColorName: 'Xanh sage',
        position: 'Ngực áo (Trái)'
      }
    }
  ]);

  const [appliedPromo, setAppliedPromo] = useState<Promotion | null>(PROMOTIONS[0]); // WELCOME50
  const [wishlist, setWishlist] = useState<string[]>(['p2', 'p8']);
  const [orders, setOrders] = useState<OrderInfo[]>([]);
  const [latestOrder, setLatestOrder] = useState<OrderInfo | null>(null);
  const [activeToast, setActiveToast] = useState<{ title: string; message: string; type?: 'success' | 'info' | 'gift' } | null>(null);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'gift' = 'success') => {
    setActiveToast({ title, message, type });
  };

  const closeToast = () => {
    setActiveToast(null);
  };

  useEffect(() => {
    if (activeToast) {
      const timer = setTimeout(() => {
        setActiveToast(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [activeToast]);

  const addToCart = (
    product: Product,
    selectedColor: string,
    selectedSize: string,
    quantity = 1,
    personalization?: PersonalizationData
  ) => {
    setItems((prevItems) => {
      // Check if duplicate exists with same color, size and personalization
      const existingIdx = prevItems.findIndex(
        (it) =>
          it.productId === product.id &&
          it.selectedColor === selectedColor &&
          it.selectedSize === selectedSize &&
          JSON.stringify(it.personalization || null) === JSON.stringify(personalization || null)
      );

      if (existingIdx > -1) {
        const next = [...prevItems];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + quantity
        };
        return next;
      }

      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        productId: product.id,
        product,
        selectedColor,
        selectedSize,
        quantity,
        personalization
      };
      return [...prevItems, newItem];
    });

    const personalizedNote = personalization?.enabled ? ` (Thêu tên: ${personalization.childName})` : '';
    showToast(
      'Đã thêm vào giỏ hàng!',
      `${quantity}x ${product.name} - ${selectedSize}${personalizedNote}`,
      'success'
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((it) => it.id !== cartItemId));
    showToast('Đã xóa khỏi giỏ', 'Sản phẩm đã được xóa khỏi giỏ hàng của bạn.', 'info');
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((it) => {
          if (it.id === cartItemId) {
            const nextQty = it.quantity + delta;
            return nextQty > 0 ? { ...it, quantity: nextQty } : null;
          }
          return it;
        })
        .filter((it): it is CartItem => it !== null);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Đã bỏ yêu thích', 'Sản phẩm đã rời khỏi danh sách yêu thích.', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Đã lưu yêu thích', 'Mẹ có thể xem lại trong mục Yêu thích bất kỳ lúc nào.', 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Subtotal of regular items
  const subtotal = items.reduce((sum, it) => sum + it.product.price * it.quantity, 0);

  // Total items quantity
  const totalItemsCount = items.reduce((sum, it) => sum + it.quantity, 0);

  // Free shipping progress
  const freeShippingProgress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  // Determine discounts based on appliedPromo
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.code === 'WELCOME50' && subtotal >= appliedPromo.minOrderValue) {
      discountAmount = appliedPromo.discountValue;
    } else if (appliedPromo.code === 'SET100' && subtotal >= appliedPromo.minOrderValue) {
      discountAmount = appliedPromo.discountValue;
    } else if (appliedPromo.code === 'MAMM20') {
      // 20% on personalized items
      const personalizedSum = items
        .filter((it) => it.personalization && it.personalization.enabled)
        .reduce((sum, it) => sum + it.product.price * it.quantity, 0);
      if (personalizedSum > 0) {
        discountAmount = Math.round(personalizedSum * 0.20);
      } else {
        // Fallback 10% on general cart if >= minOrderValue
        discountAmount = subtotal >= appliedPromo.minOrderValue ? Math.round(subtotal * 0.10) : 0;
      }
    } else if (appliedPromo.code === 'FREESHIP') {
      // Will discount shipping
    }
  }

  // Shipping fee calculation
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || appliedPromo?.code === 'FREESHIP';
  const shippingFee = subtotal === 0 ? 0 : hasFreeShipping ? 0 : 30000;

  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    const promo = PROMOTIONS.find((p) => p.code === cleanCode);

    if (!promo) {
      return { success: false, message: 'Mã khuyến mãi không hợp lệ hoặc đã hết lượt sử dụng.' };
    }

    if (promo.minOrderValue && subtotal < promo.minOrderValue) {
      const minVnd = new Intl.NumberFormat('vi-VN').format(promo.minOrderValue);
      return {
        success: false,
        message: `Mã ${cleanCode} chỉ áp dụng cho đơn hàng từ ${minVnd}đ trở lên.`
      };
    }

    setAppliedPromo(promo);
    showToast('Áp dụng mã thành công!', `Đã áp dụng mã ${promo.code} - ${promo.title}`, 'gift');
    return { success: true, message: `Tuyệt vời! ${promo.title} đã được áp dụng.` };
  };

  const removeCoupon = () => {
    setAppliedPromo(null);
    showToast('Đã gỡ mã ưu đãi', 'Bạn có thể chọn nhập mã ưu đãi khác.', 'info');
  };

  const placeOrder = (orderData: Omit<OrderInfo, 'orderId' | 'createdAt' | 'status' | 'estimatedDelivery'>): OrderInfo => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const newOrderId = `MK-${randomSuffix}`;

    const newOrder: OrderInfo = {
      ...orderData,
      orderId: newOrderId,
      createdAt: new Date().toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      estimatedDelivery: '2 - 3 ngày tới',
      status: 'processing'
    };

    setOrders((prev) => [newOrder, ...prev]);
    setLatestOrder(newOrder);
    clearCart();
    showToast('Đặt hàng thành công!', `Mã đơn hàng #${newOrderId} đã được tiếp nhận.`, 'success');
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedPromo,
        applyCoupon,
        removeCoupon,
        subtotal,
        discountAmount,
        shippingFee,
        grandTotal,
        totalItemsCount,
        freeShippingProgress,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        wishlist,
        toggleWishlist,
        isInWishlist,
        orders,
        placeOrder,
        latestOrder,
        activeToast,
        showToast,
        closeToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
