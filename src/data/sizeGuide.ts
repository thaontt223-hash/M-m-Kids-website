export interface SizeChartItem {
  size: string;
  age: string;
  height: string;
  weight: string;
  chest: string;
  waist: string;
  hip: string;
  note: string;
}

export const SIZE_CHART: SizeChartItem[] = [
  {
    size: 'Size 90',
    age: '2 – 3 tuổi',
    height: '85 – 95 cm',
    weight: '10 – 13 kg',
    chest: '50 – 52 cm',
    waist: '48 – 50 cm',
    hip: '52 – 54 cm',
    note: 'Bé mới biết đi, phom dáng gọn gàng'
  },
  {
    size: 'Size 100',
    age: '3 – 4.5 tuổi',
    height: '95 – 105 cm',
    weight: '13 – 16 kg',
    chest: '53 – 55 cm',
    waist: '50 – 52 cm',
    hip: '55 – 57 cm',
    note: 'Kích cỡ phổ biến nhất cho bé mẫu giáo'
  },
  {
    size: 'Size 110',
    age: '4.5 – 6 tuổi',
    height: '105 – 115 cm',
    weight: '16 – 19 kg',
    chest: '56 – 58 cm',
    waist: '52 – 54 cm',
    hip: '58 – 61 cm',
    note: 'Bé lanh lợi, hiếu động chạy nhảy'
  },
  {
    size: 'Size 120',
    age: '6 – 7.5 tuổi',
    height: '115 – 125 cm',
    weight: '19 – 23 kg',
    chest: '59 – 62 cm',
    waist: '54 – 56 cm',
    hip: '62 – 65 cm',
    note: 'Bé chuẩn bị vào lớp 1'
  },
  {
    size: 'Size 130',
    age: '7.5 – 9 tuổi',
    height: '125 – 135 cm',
    weight: '24 – 28 kg',
    chest: '63 – 66 cm',
    waist: '57 – 59 cm',
    hip: '66 – 70 cm',
    note: 'Độ tuổi tiểu học năng động'
  },
  {
    size: 'Size 140',
    age: '9 – 10.5 tuổi',
    height: '135 – 145 cm',
    weight: '29 – 35 kg',
    chest: '67 – 71 cm',
    waist: '60 – 63 cm',
    hip: '71 – 76 cm',
    note: 'Phom suông dài thanh tú, đi học và dạo phố'
  },
  {
    size: 'Size 150',
    age: '10.5 – 12 tuổi',
    height: '145 – 155 cm',
    weight: '36 – 45 kg',
    chest: '72 – 77 cm',
    waist: '64 – 67 cm',
    hip: '77 – 83 cm',
    note: 'Thiết kế thời trang thiếu niên cá tính'
  }
];

export function calculateRecommendedSize(heightCm: number, weightKg: number): {
  size: string;
  badge: string;
  rangeText: string;
  advice: string;
} {
  if (weightKg <= 13 || heightCm < 95) {
    return {
      size: 'Size 90',
      badge: '90',
      rangeText: '10 – 13 kg • 85 – 95 cm',
      advice: 'Phom dáng gọn nhẹ, êm mềm cho bé vừa biết đi từ 2 - 3 tuổi.'
    };
  } else if (weightKg <= 16 && heightCm <= 105) {
    return {
      size: 'Size 100',
      badge: '100',
      rangeText: '13 – 16 kg • 95 – 105 cm',
      advice: 'Kích cỡ vừa vặn chuẩn xác, bé 3 - 4 tuổi mặc rất thoải mái.'
    };
  } else if (weightKg <= 20 && heightCm <= 115) {
    return {
      size: 'Size 110',
      badge: '110',
      rangeText: '16 – 19 kg • 105 – 115 cm',
      advice: 'Thích hợp cho bé 4 - 5 tuổi tự do chạy nhảy vận động ngoài trời.'
    };
  } else if (weightKg <= 24 && heightCm <= 125) {
    return {
      size: 'Size 120',
      badge: '120',
      rangeText: '19 – 23 kg • 115 – 125 cm',
      advice: 'Dành cho bé 6 - 7 tuổi, chuẩn form thể trạng trẻ em Việt Nam.'
    };
  } else if (weightKg <= 30 && heightCm <= 135) {
    return {
      size: 'Size 130',
      badge: '130',
      rangeText: '24 – 28 kg • 125 – 135 cm',
      advice: 'Dành cho độ tuổi tiểu học 7 - 8 tuổi năng động.'
    };
  } else if (weightKg <= 38 && heightCm <= 145) {
    return {
      size: 'Size 140',
      badge: '140',
      rangeText: '29 – 35 kg • 135 – 145 cm',
      advice: 'Thiết kế phom suông dài thanh lịch cho bé 9 - 10 tuổi.'
    };
  } else {
    return {
      size: 'Size 150',
      badge: '150',
      rangeText: '36 – 45 kg • 145 – 155 cm',
      advice: 'Kích thước chuẩn cho bé lớn 11 - 12 tuổi thoải mái.'
    };
  }
}
