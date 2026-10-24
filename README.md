# Social Caption Studio ✨

Website tạo caption và hashtag mẫu dành cho người sáng tạo nội dung TikTok, Facebook và Instagram.

## Tính năng
- Chọn nền tảng và phong cách caption: tâm trạng, dễ thương, động lực, ngầu.
- Nhập chủ đề và tạo caption tiếng Việt từ mẫu có sẵn.
- Sửa, sao chép caption và lưu tối đa 100 ý tưởng trên trình duyệt bằng `localStorage`.
- Giao diện responsive, không cần tài khoản, máy chủ, thư viện ngoài hay API.
- Không tự động đăng bài, không cam kết tăng lượt xem hay lên xu hướng.

## Cấu trúc
```text
social-caption-studio/
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

## Chạy trên máy tính / điện thoại
Tải ZIP, giải nén, mở `index.html` trong trình duyệt. Để tính năng sao chép hoạt động ổn định, nên chạy qua HTTPS hoặc localhost.

Có thể chạy localhost với Python (nếu đã cài):
```bash
python -m http.server 8000
```
Mở `http://localhost:8000`.

## Đăng GitHub
1. Tạo repository công khai tên `social-caption-studio`.
2. Upload toàn bộ file trong thư mục (không chỉ upload ZIP), commit.
3. Vào **Settings → Pages → Build and deployment**.
4. Chọn **Deploy from a branch**, branch `main`, thư mục `/ (root)`, bấm **Save**.
5. Chờ GitHub Pages triển khai. URL thường có dạng `https://TEN-USER.github.io/social-caption-studio/`.

## Tùy chỉnh
- Sửa nội dung caption trong `templates` tại `script.js`.
- Sửa hashtag trong `tags` tại `script.js`.
- Sửa màu sắc và bố cục tại `style.css`.

## Quyền riêng tư
Dữ liệu được lưu trong localStorage của trình duyệt đang dùng. Xóa dữ liệu trình duyệt có thể làm mất ý tưởng đã lưu. Không gửi nội dung đến máy chủ.

## Giấy phép
MIT — xem `LICENSE`.
