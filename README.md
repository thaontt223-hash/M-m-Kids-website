# Mầm Kids - Thời Trang Trẻ Em Hữu Cơ (Growing with Love)

Website thương mại điện tử thời trang hữu cơ dành cho trẻ em từ 3–12 tuổi của thương hiệu **Mầm Kids**.

## 🌟 Tính năng nổi bật

- **Trang chủ (Home)**: Banner Hè rực rỡ, bộ lọc độ tuổi và giới tính (3–6 tuổi & 7–12 tuổi), sản phẩm bán chạy, 5 cam kết vàng và đánh giá từ ba mẹ.
- **Sản phẩm (Products)**: Tìm kiếm thời gian thực, lọc đa tiêu chí (Bé trai, Bé gái, Loại áo/quần/váy/đồ bộ, Mức giá), sắp xếp và chọn nhanh size / màu.
- **Chi tiết sản phẩm (Product Detail)**: Bộ sưu tập ảnh nhiều góc, chọn size thông minh, gợi ý phối đồ (Complete the Look), thêu tên cá nhân hóa.
- **Bộ sưu tập Bé Trai & Bé Gái**: Danh mục chuyên biệt theo giới tính và từng giai đoạn phát triển của bé.
- **Mix & Match (Phòng phối đồ thông minh)**: Tự do chọn áo, quần/váy, giày dép, phụ kiện trên ma-nơ-canh trực quan; nút **Thử phối ngẫu nhiên (Try Another)** và **Thêm trọn bộ vào giỏ hàng (Add Complete Set)** với ưu đãi giảm 100.000đ (`SET100`).
- **Cá nhân hóa (Thêu tên bé)**: Tùy chỉnh tên bé, icon (🌸 Hoa, 🌱 Mầm xanh, 🐻 Gấu, ⭐ Sao, 💖 Tim, 🌈 Cầu vồng), vị trí thêu và màu chỉ với mô phỏng trực quan.
- **Ưu đãi & Voucher (Promotions)**: Hệ thống mã `WELCOME50`, `SET100`, `MAMM20`, `FREESHIP` và tặng kèm **Túi Tote Canvas Mầm Kids 0đ** cho mọi đơn hàng.
- **Bảng Size (Size Guide)**: Bảng size chuẩn nhân trắc học trẻ em Việt Nam (Size 90 - 150) và Trợ thủ đo & tính size thông minh theo chiều cao/cân nặng.
- **Giỏ hàng & Thanh toán (Cart & Checkout)**: Thanh toán linh hoạt COD hoặc Chuyển khoản VietQR 24/7, xác nhận đơn hàng kèm mã đơn và thông tin chi tiết.
- **Tra cứu đơn hàng (Track Order)**: Xem lộ trình 5 bước, thông tin shipper và tải hóa đơn điện tử.
- **Liên hệ (Contact)**: Hệ thống showroom Hà Nội, TP.HCM, Hotline 1900 6868 và form gửi tin nhắn hỗ trợ.

---

## 🚀 Hướng dẫn cài đặt & Chạy ứng dụng

### Yêu cầu
- Node.js >= 18
- npm hoặc yarn

### Cài đặt gói phụ thuộc
```bash
npm install
```

### Chạy môi trường phát triển (Dev server)
```bash
npm run dev
```
Ứng dụng sẽ khởi chạy tại: `http://localhost:3000`

### Kiểm tra cú pháp (Lint)
```bash
npm run lint
```

### Đóng gói ứng dụng (Production Build)
```bash
npm run build
```

---

## 🌐 Triển khai lên Vercel & GitHub

### 1. Đưa lên GitHub
```bash
git init
git add .
git commit -m "feat: complete Mam Kids children fashion e-commerce prototype"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 2. Triển khai lên Vercel
1. Đăng nhập vào [Vercel](https://vercel.com).
2. Chọn **"Add New..."** > **"Project"**.
3. Kết nối với kho GitHub chứa mã nguồn Mầm Kids vừa push.
4. Vercel sẽ tự động nhận diện cấu hình trong `vercel.json` (Framework: Vite, Output: `dist`).
5. Bấm **"Deploy"** và website sẽ hoạt động trực tiếp trên toàn cầu.
