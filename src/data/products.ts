import { Product, MixMatchItem } from '../types';

export const PRODUCTS: Product[] = [
  {
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
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB4AxR08xkzZRf6vV654yw2PIMjKT4p3s7Q4BFtybhuEzfhAD8BCcA_AsOrDdAoo5bYV48EydP0kw_Dko1joVv_RI4H0IeTjE2vVdw2NclwwpluN4bL596cqa1YeB4RvqhBqt3dm1om2TlF6VD1XbAd07HZLfppfseuPv77HDGpcblV_jsvg_hQhqNzy_6f48OgjMbmxkBWub6jtiWN2KPYaLiPUyd1ejhS_yzmFIa6dpKj0MgASyyzZg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBynXxoF4xNH-4e7syYDkBJJB9k9a5Bl6VqxXV0YYkEb8j6kPllMrgT_fNW_YzkjimojAfmgItCQ64XkCJXiDKLN4C4o39JGxKLlXd2kukzIkmyV9Us6CP2HZpVmO1YuTzhf7HYsaiOgDKB_ADFFg0KanPq75j_cz6Mol7ELEhUpKng2ahkk6fVdKkTViwXw9r5jjCfHJQsNa2Vr3Ev1hQCbxRhXSAyTm1bAO1mkdSAZ0QhmeCpKKs8Dg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArOLjMq8gAIfjG2RtXkg3wXF3un5VONM-zwsel6A7aqkGnXK6ZQ2ABYsuS7GMNls19yxMxS3XQ_5HBC7QgG75F0Ef63LSpHrsYHQozETU53Dr6PXYY8ZSNvSvZs5kLMSV8mf8s5Vsd3ZnIJkGfFBIGQ3XPFDd6ShK6XxYaQUjKemKgGR7PCFDIYty0MZehXGzJwvBccXJgdrvKKvRATGgrdNcGxrPvFPLq8FqKROMB2c5DQFEAlP2scg'
    ],
    colors: [
      { name: 'Vàng bơ', hex: '#fae8b2' },
      { name: 'Xanh mint', hex: '#b8e5d2' },
      { name: 'Trắng kem', hex: '#fbf8ed' }
    ],
    sizes: ['90', '100', '110', '120'],
    description: 'Chất liệu 100% cotton hữu cơ đạt chuẩn Oeko-Tex mềm mại, siêu thoáng mát, họa tiết gấu nhỏ thêu nổi sắc sảo đáng yêu cho bé thoải mái vận động.',
    fabricDetails: '100% Organic Cotton chải kỹ tự nhiên. Định lượng vải 190gsm vừa vặn, không co rút sau nhiều lần giặt máy.',
    isBestSeller: true,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Bán chạy',
    highlights: ['Vải hữu cơ Oeko-Tex an toàn', 'Thêu nổi gấu con thủ công', 'Thấm hút mồ hôi tối ưu', 'Đổi size miễn phí 7 ngày'],
    reviews: [
      {
        id: 'r1',
        author: 'Mẹ Thu Hằng',
        childAge: '4 tuổi',
        city: 'Hà Nội',
        rating: 5,
        comment: 'Bé Bơ nhà mình da nhạy cảm cực kỳ, mặc đồ thô ráp là mẩn đỏ ngay. Áo thun này vải mềm như mây, giặt máy mấy lần vẫn không hề bai nhão.',
        sizePurchased: 'Size 100',
        date: '28/05/2025'
      },
      {
        id: 'r2',
        author: 'Ba Minh Quân',
        childAge: '3 tuổi',
        city: 'TP. Hồ Chí Minh',
        rating: 5,
        comment: 'Màu vàng bơ bên ngoài rất nhã nhặn, form rộng rãi dễ chịu. Cu Bon mặc đi nhà trẻ cả ngày không bị bí mồ hôi lưng.',
        sizePurchased: 'Size 90',
        date: '02/06/2025'
      }
    ]
  },
  {
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
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQFxS5iLwVLV4H9wcUUNjfVjkjr8NiLmhdWsRza7ridP-pJ67l2hsoajp8cjEEXT-bwlZ0tfN9S0sk1BrXYEdGVfmK2BiWdNhasfvdNQ3s3VVJMtA6iH47TRaE-k2k14ecLW2sWUMhmuOCXgUpRiaaMQe2VBYZ43D0JaqN2mos6XRIz_PPZYDc7XL3-Bmu_iWymnXMrUxgEl1bdFXOX9zo9o3A81RkMJ9NlZ6zr15W7HHzPDPAnedINA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0qAifZvFfaOesQUOoHJ4ZbSDYsOAMR30dsTfQO6WmYObfT9TXMYSiR5QRTwjV7r1JyLCni8AUb8F8PsMxUJk-De_cZtj3m76O31fuj996ICdIByum3M2JyAjcvcJqkTFI7sAA7YXF6gkrY3WXV1WfGxJiP7QGDLMqlmL0nO9M45fCtYcCSo4nLxVE1Zwh-ElNoid4mIA8IeqHNPdD1chi4Ggwt3SGEUCISCUrQG96sgP45zkZ40ivyw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD74vz-9YAZuLbOpT18eK9Z9Tw2g1LcqX41iPh6ESrebYGJO5CNb-0Nmw6VmyL9Tiz0larBM6a5Z1NpZaVjRhOfi57srJHg5aAP099l0OgjQE22q0BrjYhdJAoy3SneVbSBL0LOFhtA6m4f6PeQ_KiPHuvYzw_ycSlpy5gAmmpI1OMjop2qx-u0DQmnwBqnxS48RH4VpoelQk5m96_Zab4DZrTg9p9EBbKo848lbQyemwfIT_JBNzynsA'
    ],
    colors: [
      { name: 'Hồng pastel', hex: '#fcd4dc' },
      { name: 'Trắng kem', hex: '#fbf8ed' },
      { name: 'Vàng hoa cúc', hex: '#faefcd' }
    ],
    sizes: ['90', '100', '110', '120'],
    description: 'Vải xô muslin 2 lớp mềm mại bay bổng, họa tiết hoa nhí dịu dàng. Bé mặc đi dạo phố, đi tiệc sinh nhật hay du lịch biển đều xinh như nàng thơ nhỏ.',
    fabricDetails: '100% Cotton Muslin double gauze dệt kép cao cấp, không gây ngứa hay kích ứng, có độ nhăn tự nhiên mộc mạc phong cách Hàn Quốc.',
    isBestSeller: true,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Bán chạy',
    highlights: ['Vải Muslin 2 lớp bay bổng', 'Cổ bèo cánh tiên tiểu thư', 'Có thể thêu tên cá nhân', 'Lớp lót chống dặm ngứa'],
    reviews: [
      {
        id: 'r3',
        author: 'Mẹ Lam Anh',
        childAge: '4 tuổi',
        city: 'Hà Nội',
        rating: 5,
        comment: 'Váy đẹp xuất sắc luôn Mầm ơi! Vải mát tay, bé nhà mình 3.5 tuổi nặng 14.5kg mặc size 100 vừa vặn xinh xắn lắm. Mũi thêu tên bé ở ngực rất tinh xảo.',
        sizePurchased: 'Size 100',
        date: '15/06/2025'
      }
    ]
  },
  {
    id: 'p3',
    sku: 'MK-QS03',
    name: 'Quần short năng động',
    vietnameseName: 'Quần short năng động linen cotton',
    price: 159000,
    originalPrice: 199000,
    category: 'shorts',
    gender: 'both',
    ageRange: '3-6',
    rating: 4.8,
    reviewCount: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbzjiQnPc_WojbIGmjvhowB1GI6e7hqNAICfz1K4LXEvOXGwZbLtTZ-dDEvN2IAkQRuZ_Vs3L4IlYJOwk_DIIcq3lZln5LgPmMhD-gsIG0doY5rd9c-9DcBKsg9dKQMb5x4duLAUgSxPfLaJDsWR2uEgb7GhfbDVI0f6zGoG7XVpRQChgR3kUKN9Iu90H3CfotKaUDjCSy49eM_VJGXCIyTOWK5PpCF60TdDJx9nabIv-ItLuIk6xSfg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbzjiQnPc_WojbIGmjvhowB1GI6e7hqNAICfz1K4LXEvOXGwZbLtTZ-dDEvN2IAkQRuZ_Vs3L4IlYJOwk_DIIcq3lZln5LgPmMhD-gsIG0doY5rd9c-9DcBKsg9dKQMb5x4duLAUgSxPfLaJDsWR2uEgb7GhfbDVI0f6zGoG7XVpRQChgR3kUKN9Iu90H3CfotKaUDjCSy49eM_VJGXCIyTOWK5PpCF60TdDJx9nabIv-ItLuIk6xSfg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGY-XzpwfdHNcS2Cl4DLMWK4B3Io_XBgxGFJ6aET0ODDCcxCBAkh2fMErSgrHL_rv6Wq11I8R1Mdis-PaCof8onAd6jkDwdSRTjuqQbC9fCKaJinxfu5zP33cQ_1Eni-0QX0ebx0s9AWJSVnIPLLlBKK9_Ss-e1rw8Ey4ALnggYEQsieWzn5Bbx9MWYMDwwJaq8kkZFfhMF6pfDTPr6ybGyzC8CF8w159Cv3jTR6HIY5D5TJSMxM0jEg'
    ],
    colors: [
      { name: 'Be tự nhiên', hex: '#eae3d2' },
      { name: 'Xanh sage', hex: '#9bbfa8' },
      { name: 'Xanh denim', hex: '#82a4b8' }
    ],
    sizes: ['90', '100', '110', '120'],
    description: 'Lưng thun co giãn êm dịu bọc vải cotton bên ngoài, không hằn bụng bé khi vui chơi. Túi 2 bên sâu rộng bé đựng kẹo hay đồ chơi nhỏ.',
    fabricDetails: 'Chất đũi cotton pha lanh tự nhiên, thoáng khí tối đa, cản gió nhẹ và nhanh khô.',
    isBestSeller: false,
    isNewArrival: true,
    isPersonalizable: true,
    tag: 'Mới về',
    highlights: ['Lưng thun êm không hằn bụng', 'Chất đũi lanh mát lạnh', 'Đường may chịu lực 3 kim', 'Dễ dàng mix cùng áo polo, thun'],
    reviews: [
      {
        id: 'r4',
        author: 'Mẹ Hoàng Yến',
        childAge: '5 tuổi',
        city: 'Đà Nẵng',
        rating: 5,
        comment: 'Quần form đẹp, bé trai nhà mình tròn bụng mà mặc lưng thun này thoải mái không kêu đau tí nào.',
        sizePurchased: 'Size 110',
        date: '20/06/2025'
      }
    ]
  },
  {
    id: 'p4',
    sku: 'MK-DB04',
    name: 'Đồ bộ Ngày Nắng',
    vietnameseName: 'Đồ bộ Ngày Nắng dệt tổ ong',
    price: 199000,
    originalPrice: 250000,
    category: 'set',
    gender: 'both',
    ageRange: '3-6',
    rating: 5.0,
    reviewCount: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVFE3dfUtjXzdR8YiGagFMPQjvZqYM6bO_PPhMJkZ15YoStr5doa5Nf1rx4EPDv16sx6qmAvFnFZmMoD0H7fK_VJC2kXGMrzGZj3XHAFtGfzanxqDFrhmWKlsuQsmSE4rTk3QuzlBnWfwqBbBvGCnr5qAOSmSeWdWhUW4K3BT2BYdkiRZAV9e2IUyOwxtoYIq08gmLEWhAKso9OTG1MfPPNAtTre48DykNj9J6rRKHe1ugMbZkvDe79g',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVFE3dfUtjXzdR8YiGagFMPQjvZqYM6bO_PPhMJkZ15YoStr5doa5Nf1rx4EPDv16sx6qmAvFnFZmMoD0H7fK_VJC2kXGMrzGZj3XHAFtGfzanxqDFrhmWKlsuQsmSE4rTk3QuzlBnWfwqBbBvGCnr5qAOSmSeWdWhUW4K3BT2BYdkiRZAV9e2IUyOwxtoYIq08gmLEWhAKso9OTG1MfPPNAtTre48DykNj9J6rRKHe1ugMbZkvDe79g',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAd6gnwItFCNg9EN1neEm_-EKk4aCBf9-TWWoTw0SUVqA65N7-UJoN60UtHzZGgPIvLRWqIt8hE9cg4pxK053cuUzvw6Zg-1_mfURobtX_HvSGEI22TbldsxtNdsK9xermlqB5Fs66fvDj9VaV4SnX-DiO29sKxL4vZhd7Cjf9KWvnJOrbChOrfeQWI1S2_ERVwPOlQ3e_V1jJGmO8bn28rleL8CbRtSa1elF5ED83Re9kSKG_Kycwig'
    ],
    colors: [
      { name: 'Cam đào', hex: '#f9c09c' },
      { name: 'Xanh lá non', hex: '#bfe3bd' },
      { name: 'Vàng chanh dịu', hex: '#f7e7a5' }
    ],
    sizes: ['90', '100', '110', '120'],
    description: 'Thiết kế đồ bộ cộc tay dệt dập nổi tổ ong (waffle) độc quyền, giữ độ rỗng giữa sợi vải giúp không khí lưu thông tối ưu, bé mặc nhà hay đi chơi đều dễ thương.',
    fabricDetails: 'Sợi tre Bamboo & Organic Cotton kháng khuẩn tự nhiên, kiểm soát mùi mồ hôi vượt trội.',
    isBestSeller: true,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Bán chạy',
    highlights: ['Dệt dập tổ ong thoáng khí', 'Vải sợi tre kháng khuẩn', 'Trọn bộ áo + quần tiện lợi', 'Đạt chứng nhận GOTS'],
    reviews: [
      {
        id: 'r5',
        author: 'Mẹ Khánh Vy',
        childAge: '3 tuổi',
        city: 'Cần Thơ',
        rating: 5,
        comment: 'Mình mua liền 3 bộ màu khác nhau cho bé thay đổi. Vải xốp nhẹ tênh, giặt vắt phơi tí là khô cong, mặc phòng máy lạnh hay ra sân chơi đều hợp.',
        sizePurchased: 'Size 90',
        date: '08/06/2025'
      }
    ]
  },
  {
    id: 'p5',
    sku: 'MK-HD05',
    name: 'Áo hoodie Cầu Vồng',
    vietnameseName: 'Áo hoodie Cầu Vồng nỉ da cá mỏng nhẹ',
    price: 299000,
    originalPrice: 360000,
    category: 'jacket',
    gender: 'both',
    ageRange: '7-12',
    rating: 4.9,
    reviewCount: 32,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd-4YYPhCOHaAxNpaklsoSYqA2oeA8NKhqWKZKlPY01AL3CJYMs_ZHfPHVEG5K9NoOAA-ez26E15lTo0UVe0WVeyllza0-8J55m4ItXKcG6Jl08080v9rq6kFwODcMOULZlZ8NrFA9HFgvL5ZWbRP7QAOVDh53coJT84PJS6ewJDAeVFbDgPd5W5_xLLK1lPNV5wgP4mmZB7QBiBSTp_5VJJLShbiDUViGm4pQSHW2jwcD2VwhF1XN_Q',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBd-4YYPhCOHaAxNpaklsoSYqA2oeA8NKhqWKZKlPY01AL3CJYMs_ZHfPHVEG5K9NoOAA-ez26E15lTo0UVe0WVeyllza0-8J55m4ItXKcG6Jl08080v9rq6kFwODcMOULZlZ8NrFA9HFgvL5ZWbRP7QAOVDh53coJT84PJS6ewJDAeVFbDgPd5W5_xLLK1lPNV5wgP4mmZB7QBiBSTp_5VJJLShbiDUViGm4pQSHW2jwcD2VwhF1XN_Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGp7V1dXqK4gUZNKcEWDBjDkSvkBcbI4pw4E3yCK6g73Fl37YpuIBexYQ_n2DPmCpoVnO3K8T2MHjCnWNwj7s3gpdW6lftLuTIJ8INHBj8Ga-Z2k4RHx0yc4_uWn9qUo7LG3QJw--tLYqIqWbKmTyIA_0k2UIZD6W9_VQWawyy3pbxo49AqrVNrUtFrB37j1gA1flj-bEwszhJpOqgPbs6iezltaZ-uaX4OO_O2DtQ7Khqj609ZE7s-g'
    ],
    colors: [
      { name: 'Tím pastel', hex: '#d6cae8' },
      { name: 'Vàng kem', hex: '#faefcd' },
      { name: 'Trắng sữa', hex: '#fdfaf5' }
    ],
    sizes: ['120', '130', '140', '150'],
    description: 'Chất nỉ da cá French Terry mỏng nhẹ giữ ấm phòng điều hòa hoặc tiết trời se lạnh. Họa tiết cầu vồng uốn lượn thêu thủ công trên ngực áo đầy năng lượng.',
    fabricDetails: '100% French Terry Cotton, mặt trong là vòng sợi bông mềm không bụi lông, không kích ứng da họng của bé.',
    isBestSeller: true,
    isNewArrival: true,
    isPersonalizable: true,
    tag: 'Mới về',
    highlights: ['Nỉ da cá mỏng nhẹ 4 mùa', 'Mũ trùm 2 lớp giữ ấm tai', 'Bo gấu thun co giãn êm ái', 'Phom unisex cho cả bé trai & bé gái'],
    reviews: [
      {
        id: 'r6',
        author: 'Mẹ Hải Anh',
        childAge: '8 tuổi',
        city: 'Hải Phòng',
        rating: 5,
        comment: 'Bé lớn nhà mình thích chiếc áo này lắm, mặc đi học thêm buổi tối se lạnh rất tiện, cầu vồng thêu sắc nét.',
        sizePurchased: 'Size 130',
        date: '25/06/2025'
      }
    ]
  },
  {
    id: 'p6',
    sku: 'MK-VC06',
    name: 'Váy công chúa pastel',
    vietnameseName: 'Váy công chúa pastel tơ bồng lót cotton',
    price: 269000,
    originalPrice: 320000,
    category: 'dress',
    gender: 'girl',
    ageRange: '3-6',
    rating: 5.0,
    reviewCount: 178,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6vUGvBO3ApuLHditClT41nhYoyrnXEnQ_Qlqvn1b-uz_F80NENKXUqDJHPraevjQWvIoh4Kcwf2wCu0uePZf136R8wFDCcsi7lCc9uqR-SgX9IS1dunIPwRmp0EW5GH32aC5n-nQxItgB5Ml-bxKCezP7bFUl0aP1zlc60Oxb8XEh1Z-KuGQAn0DKqUyI-B0JDS3ELcyQ9JjtFS3YL1TEjiw-4zEfC1tpQk9DOKPdVMostHEuoCJqQQ',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6vUGvBO3ApuLHditClT41nhYoyrnXEnQ_Qlqvn1b-uz_F80NENKXUqDJHPraevjQWvIoh4Kcwf2wCu0uePZf136R8wFDCcsi7lCc9uqR-SgX9IS1dunIPwRmp0EW5GH32aC5n-nQxItgB5Ml-bxKCezP7bFUl0aP1zlc60Oxb8XEh1Z-KuGQAn0DKqUyI-B0JDS3ELcyQ9JjtFS3YL1TEjiw-4zEfC1tpQk9DOKPdVMostHEuoCJqQQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0tjOZnnQBD64I1ICpCfYOWJ_g1FSQCLCA3vg_Vw8WnOrBMhh5V2kNNjacWlMz2KLpOHMfwHk0Ye46xaXq3wFzC7QzZPdjmM2vWX50I3ID9jBfxZ0v83zxoJW7zCTSJ0HQC-86InB6UxS1eye-1wbWneBD21cXePY5jSkgAIs33WKsvQ_Xjx6Cs3Eni8RxXzLGo6FjZUJ95XYR-W-FOppP13bSm7dyVeZHAmvDrJT0XP1i991jzuew2A'
    ],
    colors: [
      { name: 'Hồng kẹo bông', hex: '#f8c0cb' },
      { name: 'Xanh voan biển', hex: '#b8deea' },
      { name: 'Trắng kem', hex: '#fdf9f1' }
    ],
    sizes: ['100', '110', '120', '130'],
    description: 'Lớp lót cotton 100% không dặm ngứa da bé, tùng xòe tự nhiên từ voan mềm bồng bềnh. Chiếc đầm mơ ước biến bé thành nàng công chúa ngọt ngào trong các bữa tiệc.',
    fabricDetails: 'Thân trong 100% cotton dệt phẳng dịu êm. Lớp ngoài voan organza tơ tằm dập ly bồng bềnh, đường may viền kín không cọ xát da.',
    isBestSeller: true,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Bán chạy',
    highlights: ['Lớp lót cotton 100% an toàn', 'Voan tơ bồng bềnh nhẹ tênh', 'Phù hợp tiệc sinh nhật & lễ hội', 'Có thể thêu tên bé tặng quà'],
    reviews: [
      {
        id: 'r7',
        author: 'Mẹ Mai Anh',
        childAge: '5 tuổi',
        city: 'Đà Nẵng',
        rating: 5,
        comment: 'Đặt váy công chúa pastel cho con gái diện sinh nhật 5 tuổi mà ai cũng khen. Dịch vụ đổi size tận nhà siêu nhanh. Chấm 10/10!',
        sizePurchased: 'Size 110',
        date: '10/06/2025'
      }
    ]
  },
  {
    id: 'p7',
    sku: 'MK-SM07',
    name: 'Áo sơ mi Bé Trai Lịch Lãm',
    vietnameseName: 'Áo sơ mi Bé Trai Lịch Lãm đũi lanh tơ',
    price: 249000,
    originalPrice: 299000,
    category: 'tshirt',
    gender: 'boy',
    ageRange: '7-12',
    rating: 4.9,
    reviewCount: 67,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsQGppycNoWMvNkXI9TX7hlvbTOHFQdqbskf2jcIf9UwyI5i_Z93Nh9K5DKA7vQ6btYqAfpho0QxbHPFoOtM7h7GBTgpvK6LvcVjEZ25QZQQ9gRF02cYJ9PUq0PSX3lHZiGGhP-gjYMP9-DD1rMeQRMQTE0H_QtQHTToZvqKB4K5P3jq3_LbUB7JydwDroePG1eO72a7pXn1DdS4hVKDCjgRqTtp17vk6eCbJvgoh1d8MTyP-TrGlUeQ',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsQGppycNoWMvNkXI9TX7hlvbTOHFQdqbskf2jcIf9UwyI5i_Z93Nh9K5DKA7vQ6btYqAfpho0QxbHPFoOtM7h7GBTgpvK6LvcVjEZ25QZQQ9gRF02cYJ9PUq0PSX3lHZiGGhP-gjYMP9-DD1rMeQRMQTE0H_QtQHTToZvqKB4K5P3jq3_LbUB7JydwDroePG1eO72a7pXn1DdS4hVKDCjgRqTtp17vk6eCbJvgoh1d8MTyP-TrGlUeQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8s8OfMiOyrYzvj7mEg9Pnur7oHN6sbMYvlLcJw9Sw8i5qTciFhBkf44FrLlIchV355oMPYVcTISuXMOXEN4bU66lboTERML0hieIE_ddarDbJGxORHwUnmQIMJkBJFv3IpST3Z9rMjNfIWQLE3mY_EGmoKgKXxEiZlUIxv9bXwRNP6Aa1A0L4-27FFMJmUhnpstO3FP4SBLPgpinodU0sr9kaCoNmbit8kFm5mrJDyGdjKrMbIpjXRA'
    ],
    colors: [
      { name: 'Xanh sage', hex: '#9bbfa8' },
      { name: 'Xanh baby', hex: '#cbe3f5' },
      { name: 'Trắng kem', hex: '#fbf8ed' }
    ],
    sizes: ['120', '130', '140', '150'],
    description: 'Chất đũi lanh tơ mềm mịn, thoáng mồ hôi cho bé tự tin dự tiệc hay đến trường. Nút cài gỗ dừa mộc mạc phong cách vintage tự nhiên.',
    fabricDetails: '55% Linen hữu cơ tự nhiên + 45% Cotton organic thoáng khí, không nhăn nhúm cứng ráp.',
    isBestSeller: false,
    isNewArrival: true,
    isPersonalizable: true,
    tag: 'Mới về',
    highlights: ['Chất linen cotton cao cấp', 'Khuy cài gỗ dừa thân thiện', 'Cổ áo đứng phom lịch sự', 'Dễ phối với quần tây, sooc'],
    reviews: [
      {
        id: 'r8',
        author: 'Ba Quang Dũng',
        childAge: '8 tuổi',
        city: 'TP. Hồ Chí Minh',
        rating: 5,
        comment: 'Mình mua áo sơ mi này cho cu Bon 8 tuổi đi học hè, form lên dáng vừa in, bạn ấy khen mặc mát không bị bí mồ hôi lưng.',
        sizePurchased: 'Size 130',
        date: '18/06/2025'
      }
    ]
  },
  {
    id: 'p8',
    sku: 'MK-KG08',
    name: 'Áo khoác gió Nhà Thám Hiểm Nhí',
    vietnameseName: 'Áo khoác gió Nhà Thám Hiểm cản nắng UV50+',
    price: 349000,
    originalPrice: 420000,
    category: 'jacket',
    gender: 'both',
    ageRange: '7-12',
    rating: 5.0,
    reviewCount: 98,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYjJd6cw7rubrIvQ2PqgqctgOR4TohZl7VO5rrQ12yS7i5d8QBVbyIg72eySaW-uYOXNeRAwi1AZ1a0G1UE25BqlW2O2cei76iu1wpMXBPO6RqRyRorHvE_uCEOxtZTkPNeH7n9CVXlycjkW8boYkOVed6lIuf2U7lSppcAHKe8bLE2Zf0jjl3oYPfC1zQX17xB3iINfmGS676RHUR6i1uuq5usqjgggHicXYEeJzva9QQ9eu9N16t7A',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYjJd6cw7rubrIvQ2PqgqctgOR4TohZl7VO5rrQ12yS7i5d8QBVbyIg72eySaW-uYOXNeRAwi1AZ1a0G1UE25BqlW2O2cei76iu1wpMXBPO6RqRyRorHvE_uCEOxtZTkPNeH7n9CVXlycjkW8boYkOVed6lIuf2U7lSppcAHKe8bLE2Zf0jjl3oYPfC1zQX17xB3iINfmGS676RHUR6i1uuq5usqjgggHicXYEeJzva9QQ9eu9N16t7A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBM4pYXLWqQr1md-wYYbT3HGsYSnFRbMbJh7FpRANdBs9AOMgRlmxXSImORRE-gBvrFV0AG47k_rMUTdT3XZN1C1C8QtdbqO8uNI7-9g4MJtHW2zfAi2cXNO11JRhgc8dhUz6SNz1-mMlFl4iCVBRzw_a0797w8U_RZy-V4YHBAK2Wy0vX7Y8coTqoInHSmlGqLVEMwZCEU4iDFj2IKkPgpuF474NOMep2Isv2TnF6tJ7vNuHHO3O4KAg'
    ],
    colors: [
      { name: 'Xanh eucalyptus', hex: '#467f6b' },
      { name: 'Vàng mù tạt', hex: '#e3ad3b' },
      { name: 'Xanh mint', hex: '#b8e5d2' }
    ],
    sizes: ['120', '130', '140', '150'],
    description: 'Trượt nước nhẹ hạt mưa phùn, cản gió và chống tia cực tím UV UPF 50+, lớp lót lưới thoáng khí không đọng mồ hôi, đồng hành cùng bé mọi chuyến đi dã ngoại.',
    fabricDetails: 'Vải dù vi sợi mật độ cao chống bám bụi bẩn, lót trong lưới cotton 100% thoáng khí.',
    isBestSeller: true,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Bán chạy',
    highlights: ['Chống nắng UV UPF 50+', 'Trượt nước hạt sen nhẹ', 'Lót lưới mát lưng', 'Gấp gọn bỏ túi balo dễ dàng'],
    reviews: [
      {
        id: 'r9',
        author: 'Mẹ Bích Phương',
        childAge: '7 tuổi',
        city: 'Đà Lạt',
        rating: 5,
        comment: 'Áo khoác gió nhẹ tênh, đi dã ngoại hay đi xe máy cản gió rất ấm mà không hề bị bí.',
        sizePurchased: 'Size 120',
        date: '14/06/2025'
      }
    ]
  },
  {
    id: 'p9',
    sku: 'MK-QJ09',
    name: 'Quần jean năng động',
    vietnameseName: 'Quần jean năng động co giãn mềm mại',
    price: 279000,
    originalPrice: 330000,
    category: 'shorts',
    gender: 'both',
    ageRange: '7-12',
    rating: 4.8,
    reviewCount: 72,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg4PL6sONEyf9c6qX-LTL-JOirSxjZUunBcyS4ltO_UMQl-CIa8BZWrsmONKtqR9_SzOrtwyGDfgVpWkhtYyXloDhT3VYHexao6DKpUkvO8nBxFgM2g4TG4qcULlj3l-nrq3GYF6cgfyrqfJUD0RZ3afalRk7LjiLtl3dZqGQ0pf1-Bivho0b7oJNia1RMMJRnzdzOPNGoqXqJ0QqUrZacmi2OzN3PIT7bhEynuxqyWAgmqUTFFJZabg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAg4PL6sONEyf9c6qX-LTL-JOirSxjZUunBcyS4ltO_UMQl-CIa8BZWrsmONKtqR9_SzOrtwyGDfgVpWkhtYyXloDhT3VYHexao6DKpUkvO8nBxFgM2g4TG4qcULlj3l-nrq3GYF6cgfyrqfJUD0RZ3afalRk7LjiLtl3dZqGQ0pf1-Bivho0b7oJNia1RMMJRnzdzOPNGoqXqJ0QqUrZacmi2OzN3PIT7bhEynuxqyWAgmqUTFFJZabg'
    ],
    colors: [
      { name: 'Xanh wash', hex: '#82a4c8' },
      { name: 'Xanh đậm', hex: '#3d5a80' }
    ],
    sizes: ['120', '130', '140', '150'],
    description: 'Chất denim cotton co giãn 4 chiều mềm mại, lưng có nút chun điều chỉnh độ ôm theo vòng bụng của bé. Bé mặc vận động không hề gò bó.',
    fabricDetails: 'Denim sợi bông tự nhiên 98% cotton + 2% elastane mềm rũ, giặt wash an toàn cho da.',
    isBestSeller: false,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Ưa chuộng',
    highlights: ['Denim cotton mềm co giãn', 'Cạp thun có nút tăng giảm size', 'Không cộm đáy, không hằn lưng', 'Phom ống đứng phong cách'],
    reviews: [
      {
        id: 'r10',
        author: 'Mẹ Minh Thư',
        childAge: '9 tuổi',
        city: 'Vũng Tàu',
        rating: 5,
        comment: 'Quần bò mà mềm như quần nỉ, bé trai nhà mình khó tính về quần áo mà khen mặc dễ chịu lắm.',
        sizePurchased: 'Size 140',
        date: '19/06/2025'
      }
    ]
  },
  {
    id: 'p10',
    sku: 'MK-TS10',
    name: 'Áo thun Smile Club',
    vietnameseName: 'Áo thun Smile Club cotton hữu cơ',
    price: 169000,
    originalPrice: 210000,
    category: 'tshirt',
    gender: 'both',
    ageRange: '3-6',
    rating: 4.8,
    reviewCount: 83,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqM_Kh86C-kF-mAmBnzahuaIFYAlSGqUmu8irzsx4tsHKfa40DTAMOriRUhZLyBgUZY_DY0q9q34gT5kp_hjX0GN7KZG7Rrrq3EDZ8afQktw6Ybq0NaTOxfwhzk2wCzkIwD4izEnD0KqXmGE9eeBaCGYbowPA5ukfn8LfAGO7g6Z8Fg3BxVOd0ygA87ap4Vo4MGI7wa8pFbfZIl_01mtxI8VYVyN3SH5kO6DeFaOBf7Qa92BgT3JOxLg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqM_Kh86C-kF-mAmBnzahuaIFYAlSGqUmu8irzsx4tsHKfa40DTAMOriRUhZLyBgUZY_DY0q9q34gT5kp_hjX0GN7KZG7Rrrq3EDZ8afQktw6Ybq0NaTOxfwhzk2wCzkIwD4izEnD0KqXmGE9eeBaCGYbowPA5ukfn8LfAGO7g6Z8Fg3BxVOd0ygA87ap4Vo4MGI7wa8pFbfZIl_01mtxI8VYVyN3SH5kO6DeFaOBf7Qa92BgT3JOxLg'
    ],
    colors: [
      { name: 'Xanh sage', hex: '#9bbfa8' },
      { name: 'Trắng tinh khôi', hex: '#fdfaf5' },
      { name: 'Vàng mật ong', hex: '#fae8b2' }
    ],
    sizes: ['90', '100', '110', '120'],
    description: 'Họa tiết mặt trời mỉm cười lan tỏa niềm vui tuổi thơ. Chất liệu hữu cơ thoáng khí, bo cổ dệt mịn không bai giãn sau khi giặt máy.',
    fabricDetails: '100% Organic Cotton dệt tròn, mực in gốc nước thân thiện môi trường không chứa chì.',
    isBestSeller: false,
    isNewArrival: true,
    isPersonalizable: true,
    tag: 'Mới về',
    highlights: ['Vải organic đạt chuẩn an toàn', 'Mực in gốc nước an toàn', 'Bo cổ co giãn không bai', 'Màu sắc vintage pastel'],
    reviews: [
      {
        id: 'r11',
        author: 'Mẹ Cẩm Tú',
        childAge: '4 tuổi',
        city: 'Bình Dương',
        rating: 5,
        comment: 'Hình mặt trời cười cưng xỉu, vải mềm sờ mát tay cực kỳ.',
        sizePurchased: 'Size 100',
        date: '21/06/2025'
      }
    ]
  },
  {
    id: 'p11',
    sku: 'MK-TT11',
    name: 'Bộ đồ thể thao Active Kids',
    vietnameseName: 'Bộ đồ thể thao Active Kids co giãn',
    price: 299000,
    originalPrice: 350000,
    category: 'sport',
    gender: 'both',
    ageRange: '7-12',
    rating: 4.9,
    reviewCount: 97,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmlr4Rlbm3VlbD17v3bKDnFZr5BR4aawAHgqeZx4q3qqEqXYOhrIYbsJ0l7zJhbMFM-8tkLE4Ods2WRYDPKk_qQ51PLBWYsJC6Jc3EVa2fmC-jxx5RarzRMkXM66Mg1ecmkypAuWuSUMk4kDUk_2ET7Tghh3HwKKnFNqPjq25YemqrnbvBjt3aMCSr7DeUoWxtF3mE_clGAMIXIXVfmHSaPWDDFqCShYLWYo3MOdmknESOGnAOIpxoIg',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmlr4Rlbm3VlbD17v3bKDnFZr5BR4aawAHgqeZx4q3qqEqXYOhrIYbsJ0l7zJhbMFM-8tkLE4Ods2WRYDPKk_qQ51PLBWYsJC6Jc3EVa2fmC-jxx5RarzRMkXM66Mg1ecmkypAuWuSUMk4kDUk_2ET7Tghh3HwKKnFNqPjq25YemqrnbvBjt3aMCSr7DeUoWxtF3mE_clGAMIXIXVfmHSaPWDDFqCShYLWYo3MOdmknESOGnAOIpxoIg'
    ],
    colors: [
      { name: 'Xám tiêu', hex: '#d0d3d4' },
      { name: 'Xanh navy', hex: '#1b263b' }
    ],
    sizes: ['130', '140', '150', '155'],
    description: 'Bộ thể thao nỉ mỏng gồm áo khoác kéo khóa và quần dài bo gấu. Thấm hút mồ hôi tối ưu, hỗ trợ bé học thể dục, bóng đá, chạy nhảy năng động.',
    fabricDetails: '95% Cotton tự nhiên + 5% Spandex co giãn hồi form, bề mặt chải mềm mại.',
    isBestSeller: true,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Thể thao',
    highlights: ['Khóa kéo an toàn chống kẹp cổ', 'Quần có túi tiện lợi', 'Co giãn 4 chiều tự do', 'Độ bền cao khi vận động mạnh'],
    reviews: [
      {
        id: 'r12',
        author: 'Ba Văn Hùng',
        childAge: '10 tuổi',
        city: 'Quảng Ninh',
        rating: 5,
        comment: 'Bộ nỉ này con trai mình mặc đi tập bóng rổ rất ưng, chất nhẹ và thoáng.',
        sizePurchased: 'Size 140',
        date: '17/06/2025'
      }
    ]
  },
  {
    id: 'p12',
    sku: 'MK-QJ12',
    name: 'Quần jogger Thoải Mái Mỗi Ngày',
    vietnameseName: 'Quần jogger dệt kim hữu cơ',
    price: 219000,
    originalPrice: 260000,
    category: 'shorts',
    gender: 'both',
    ageRange: '7-12',
    rating: 4.8,
    reviewCount: 60,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP5ZPird9gsGL4CAztEuyngQ9SNxBY6OzhcH4D6RgBCdjAB_SoSwvKuKXw8DwVcm6_s2YuYnXNhiIcsrVyNwbDNp2C56p5_x3hPrbzMXbvyBuzJZ0ioTjpZeSgoLpRxULe0wPGRtxL036pZ0fUlo6yCWcZ4_6CFXjK3hFDi7xbo2w4pSDez4aSIrqQ2_B5OCQT1tJy7cx07r4lrzHZF_c0rvvgSOkXvHxUMREypmiQIY8BU0TpIBJm_Q',
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAP5ZPird9gsGL4CAztEuyngQ9SNxBY6OzhcH4D6RgBCdjAB_SoSwvKuKXw8DwVcm6_s2YuYnXNhiIcsrVyNwbDNp2C56p5_x3hPrbzMXbvyBuzJZ0ioTjpZeSgoLpRxULe0wPGRtxL036pZ0fUlo6yCWcZ4_6CFXjK3hFDi7xbo2w4pSDez4aSIrqQ2_B5OCQT1tJy7cx07r4lrzHZF_c0rvvgSOkXvHxUMREypmiQIY8BU0TpIBJm_Q'
    ],
    colors: [
      { name: 'Be nhạt', hex: '#f1ebd9' },
      { name: 'Đen chì', hex: '#3e3d3c' }
    ],
    sizes: ['120', '130', '140', '150'],
    description: 'Lưng thun mềm êm kèm dây rút điều chỉnh, ống côn nhẹ hiện đại. Dễ phối với áo thun, hoodie hay áo khoác dạo phố.',
    fabricDetails: '100% Sợi bông dệt kim mềm, mặt ngoài mượt mà, mặt trong êm ái với làn da.',
    isBestSeller: false,
    isNewArrival: false,
    isPersonalizable: true,
    tag: 'Ưa chuộng',
    highlights: ['Lưng thun kèm dây rút tiện lợi', 'Bo gấu thun mềm không thít chân', 'Chất vải bền giặt không xù lông'],
    reviews: [
      {
        id: 'r13',
        author: 'Mẹ Ngọc Diệp',
        childAge: '8 tuổi',
        city: 'Huế',
        rating: 5,
        comment: 'Quần dày dặn vừa phải, màu be nhã nhặn phối áo nào cũng xinh.',
        sizePurchased: 'Size 130',
        date: '22/06/2025'
      }
    ]
  }
];

// Mix & Match items for top, bottom, footwear, and accessory
export const MIX_MATCH_ITEMS: MixMatchItem[] = [
  // TOPS
  {
    id: 'mm-top-1',
    name: 'Áo polo cộc tay Linen Sage',
    category: 'top',
    gender: 'boy',
    price: 210000,
    originalPrice: 260000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIlkbhms6Xsss7IeJwusX45zNQ5tKDWrH9ZCRG33I9AxPF8gF_YBjTncj1ZwpjSNYnHYYxltNJ65LPFDPwpMeg6IiGICe-nYq5QF7I0wXvIfN1cZ5FjlB_0snY2vZv4Qf7fVBxiVaPvAinBltKt_yBmyLo-C0p1trWG_H-iMGsdy_z2iotnsI5QOZu64UcBAEtdw2ayceKvrkFwQ2p9jnMYBV6xj1HpVsot06GGSys88bCJGDvzbjMMQ',
    colorName: 'Xanh sage',
    colorHex: '#9bbfa8',
    description: 'Chất đũi lanh mát lạnh phong trần cho hoàng tử nhỏ'
  },
  {
    id: 'mm-top-2',
    name: 'Áo blouse hoa nhí cổ sen',
    category: 'top',
    gender: 'girl',
    price: 195000,
    originalPrice: 240000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNYQpgp_ly_EGm6VZ8AMHdNfmYzhkJe-1k8FLq4JaMJeoWXLGug583PaVTtKXiwGoIYdYT6DUWcTjZgWrRQXqp2dXs1nCnD0YtVptWFh8nP8caKD5atTNe9m_dmWoCKrYm04bY6yryYIrFTbYXodSXyjhzEP119XV24pw147kevBu8R7W9bwiqHBJYHg7TcPo7Pc1RKyLjnWYwt2p3bFLZXynfOakFrk__fArSYKw0CQtgLXuurTmTKA',
    colorName: 'Hoa nhí pastel',
    colorHex: '#fcd4dc',
    description: 'Cổ sen tiểu thư điệu đà, tay bồng xinh xắn'
  },
  {
    id: 'mm-top-3',
    name: 'Áo thun cotton Gấu Nhỏ Vàng',
    category: 'top',
    gender: 'both',
    price: 149000,
    originalPrice: 190000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4AxR08xkzZRf6vV654yw2PIMjKT4p3s7Q4BFtybhuEzfhAD8BCcA_AsOrDdAoo5bYV48EydP0kw_Dko1joVv_RI4H0IeTjE2vVdw2NclwwpluN4bL596cqa1YeB4RvqhBqt3dm1om2TlF6VD1XbAd07HZLfppfseuPv77HDGpcblV_jsvg_hQhqNzy_6f48OgjMbmxkBWub6jtiWN2KPYaLiPUyd1ejhS_yzmFIa6dpKj0MgASyyzZg',
    colorName: 'Vàng bơ',
    colorHex: '#fae8b2',
    description: 'Chất cotton 100% organic thêu hình gấu xinh'
  },
  {
    id: 'mm-top-4',
    name: 'Áo sơ mi cộc tay Trắng Kem',
    category: 'top',
    gender: 'boy',
    price: 249000,
    originalPrice: 299000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsQGppycNoWMvNkXI9TX7hlvbTOHFQdqbskf2jcIf9UwyI5i_Z93Nh9K5DKA7vQ6btYqAfpho0QxbHPFoOtM7h7GBTgpvK6LvcVjEZ25QZQQ9gRF02cYJ9PUq0PSX3lHZiGGhP-gjYMP9-DD1rMeQRMQTE0H_QtQHTToZvqKB4K5P3jq3_LbUB7JydwDroePG1eO72a7pXn1DdS4hVKDCjgRqTtp17vk6eCbJvgoh1d8MTyP-TrGlUeQ',
    colorName: 'Trắng kem',
    colorHex: '#fbf8ed',
    description: 'Áo sơ mi đũi lanh tơ lịch lãm chuẩn soái ca'
  },

  // BOTTOMS
  {
    id: 'mm-bottom-1',
    name: 'Quần short linen cạp chun Be',
    category: 'bottom',
    gender: 'boy',
    price: 159000,
    originalPrice: 199000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbzjiQnPc_WojbIGmjvhowB1GI6e7hqNAICfz1K4LXEvOXGwZbLtTZ-dDEvN2IAkQRuZ_Vs3L4IlYJOwk_DIIcq3lZln5LgPmMhD-gsIG0doY5rd9c-9DcBKsg9dKQMb5x4duLAUgSxPfLaJDsWR2uEgb7GhfbDVI0f6zGoG7XVpRQChgR3kUKN9Iu90H3CfotKaUDjCSy49eM_VJGXCIyTOWK5PpCF60TdDJx9nabIv-ItLuIk6xSfg',
    colorName: 'Be tự nhiên',
    colorHex: '#eae3d2',
    description: 'Cạp thun co giãn êm dịu có dây rút điều chỉnh'
  },
  {
    id: 'mm-bottom-2',
    name: 'Quần short nhún bèo tơ hoa',
    category: 'bottom',
    gender: 'girl',
    price: 145000,
    originalPrice: 180000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD74vz-9YAZuLbOpT18eK9Z9Tw2g1LcqX41iPh6ESrebYGJO5CNb-0Nmw6VmyL9Tiz0larBM6a5Z1NpZaVjRhOfi57srJHg5aAP099l0OgjQE22q0BrjYhdJAoy3SneVbSBL0LOFhtA6m4f6PeQ_KiPHuvYzw_ycSlpy5gAmmpI1OMjop2qx-u0DQmnwBqnxS48RH4VpoelQk5m96_Zab4DZrTg9p9EBbKo848lbQyemwfIT_JBNzynsA',
    colorName: 'Hoa nhí pastel',
    colorHex: '#fcd4dc',
    description: 'Gấu quần viền bèo phồng bồng bềnh cực điệu'
  },
  {
    id: 'mm-bottom-3',
    name: 'Quần jean denim mềm cạp chun',
    category: 'bottom',
    gender: 'both',
    price: 279000,
    originalPrice: 330000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg4PL6sONEyf9c6qX-LTL-JOirSxjZUunBcyS4ltO_UMQl-CIa8BZWrsmONKtqR9_SzOrtwyGDfgVpWkhtYyXloDhT3VYHexao6DKpUkvO8nBxFgM2g4TG4qcULlj3l-nrq3GYF6cgfyrqfJUD0RZ3afalRk7LjiLtl3dZqGQ0pf1-Bivho0b7oJNia1RMMJRnzdzOPNGoqXqJ0QqUrZacmi2OzN3PIT7bhEynuxqyWAgmqUTFFJZabg',
    colorName: 'Xanh wash',
    colorHex: '#82a4c8',
    description: 'Denim co giãn 4 chiều mềm như quần nỉ'
  },
  {
    id: 'mm-bottom-4',
    name: 'Quần jogger dệt kim Be nhạt',
    category: 'bottom',
    gender: 'both',
    price: 219000,
    originalPrice: 260000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP5ZPird9gsGL4CAztEuyngQ9SNxBY6OzhcH4D6RgBCdjAB_SoSwvKuKXw8DwVcm6_s2YuYnXNhiIcsrVyNwbDNp2C56p5_x3hPrbzMXbvyBuzJZ0ioTjpZeSgoLpRxULe0wPGRtxL036pZ0fUlo6yCWcZ4_6CFXjK3hFDi7xbo2w4pSDez4aSIrqQ2_B5OCQT1tJy7cx07r4lrzHZF_c0rvvgSOkXvHxUMREypmiQIY8BU0TpIBJm_Q',
    colorName: 'Be nhạt',
    colorHex: '#f1ebd9',
    description: 'Chất bông dệt kim mượt mà ấm áp nhẹ'
  },

  // ACCESSORIES
  {
    id: 'mm-acc-1',
    name: 'Mũ cói hè vành viền ruy băng Sage',
    category: 'accessory',
    gender: 'both',
    price: 110000,
    originalPrice: 150000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBohmTWSVztms6mWOsQlr3DktyIj8myklu4M5pAFQkGv1k9icckf2KG0NZWD65-fOAyWOmHOfm2KujO5XWvuOhKtfwFPqf3B0vTSevk8P6Kd9elhWJ0Hbkskvm_CRK-gE2fqnSf8849ahI0vPc1K_Sibgchkl_WFmaW0wEN7waNWQKDPh700Rw06xZPtxw--BW8JLVqmE5v-R0RDEX3dRftSvuS_h4f5e9PKJOnSUHUtD58o37AVcJb3g',
    colorName: 'Cói tự nhiên',
    colorHex: '#ded5be',
    description: 'Đan thủ công từ sợi cói tự nhiên thoáng mát chống nắng'
  },
  {
    id: 'mm-acc-2',
    name: 'Túi đeo chéo canvas mini Mầm Kids',
    category: 'accessory',
    gender: 'both',
    price: 95000,
    originalPrice: 130000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALUu2NvDBWZpSZ6_3dzqmIStoxUV9xCHM2CPt1Z89oNPE9ibsvRYI3fTNGxd6S66vwm0tNo5JlHKIM3W8_d15fr5RNqCtySSFpWLBcbsjuQ83nAzPi1Ry91XXIWcYVqqSfG6Xca0xQRIBFwVLTYEhKY7P0Thypx2E-0ypRsxJaMWasP0gLuh0o8v6qym9jzvB8PlF3wwS5vKWVzNG3LK8QmDEVk2wNOLpUsZpOeTfP6NJ7ROaSl44Rcw',
    colorName: 'Be canvas',
    colorHex: '#ece5d8',
    description: 'Túi canvas nhỏ xinh bé đeo đựng đồ vặt khi đi chơi'
  },
  {
    id: 'mm-acc-3',
    name: 'Set 2 Nơ kẹp tóc hoa nhí Handmade',
    category: 'accessory',
    gender: 'girl',
    price: 45000,
    originalPrice: 65000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAi54mNQ1lGI0uYu67-XsLqc8pHTk0NqC8lf4o71Q94TiV_R-WbMEaPGbNk5i2sYZIUUlyhK7VloC1AchYdoU6OP3V__XiHxamuqt_H_dBrkjHOf3xmLosBBpJTokO5UxAfxvgSU7cZ3UZM6c1Oztsqg0CCfytHhWwzgTEE1ebHDDtlo1xBJnhKm3hGBl9o3aAZGzAhipEXqQK0fF0773dRj6GpBurEO_ncaHUbjig9sbKpzc5xv_JhA',
    colorName: 'Hồng hoa nhí',
    colorHex: '#fcd4dc',
    description: 'Kẹp tóc bọc vải êm ái không kéo đứt tóc bé'
  },

  // FOOTWEAR
  {
    id: 'mm-foot-1',
    name: 'Giày sneaker canvas trắng êm chân',
    category: 'footwear',
    gender: 'both',
    price: 230000,
    originalPrice: 290000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIlkbhms6Xsss7IeJwusX45zNQ5tKDWrH9ZCRG33I9AxPF8gF_YBjTncj1ZwpjSNYnHYYxltNJ65LPFDPwpMeg6IiGICe-nYq5QF7I0wXvIfN1cZ5FjlB_0snY2vZv4Qf7fVBxiVaPvAinBltKt_yBmyLo-C0p1trWG_H-iMGsdy_z2iotnsI5QOZu64UcBAEtdw2ayceKvrkFwQ2p9jnMYBV6xj1HpVsot06GGSys88bCJGDvzbjMMQ',
    colorName: 'Trắng sữa',
    colorHex: '#faf8f5',
    description: 'Đế cao su thiên nhiên chống trơn trượt, lót đệm êm ái'
  },
  {
    id: 'mm-foot-2',
    name: 'Giày búp bê quai da mềm Retro Brown',
    category: 'footwear',
    gender: 'girl',
    price: 240000,
    originalPrice: 300000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-2-9nlmlFb9tB5VoeanBbGrHJ04r6LuABaPPRHWQOaodKe5o7cYoaCgja-QDr9QMMq4PrhFkTptC5rWjNB5xqCTD3WmPSzwRKQdmmYkKNr_czbY11Wtm6tB3OhgzY-jUCiCEnIgd578OyMsE1yYwdXch9zo7DEnmYQ9DSGyx_YqikOZ1bcDtGJKF99oGvVvDeL1BYomrJ6j9q4nqbjbjGVkLpC-PBBGnt_pk2Pi9GBM2boDNzOcZPXQ',
    colorName: 'Nâu caramel',
    colorHex: '#a06535',
    description: 'Da microfiber siêu êm mềm, quai dán tiện lợi bé tự mang'
  }
];
