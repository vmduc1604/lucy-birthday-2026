CẤU TRÚC
  index.html          trang chính
  lucy-images/        bỏ ảnh vào đây
  music.mp3           (tự thêm) nhạc nền, đặt cạnh index.html. Chưa có thì trang dùng nhạc hộp Happy Birthday tự tạo
  update-images.js    (tuỳ chọn) quét thư mục ảnh

CÁCH TRANG TÌM ẢNH (trình duyệt không tự đọc được thư mục, nên có 3 cách, tự thử theo thứ tự)
  1. Chạy:  node update-images.js   -> tạo lucy-images/images.js. Chạy được cả khi bấm đúp mở file, và trên mọi hosting.
  2. Chạy bằng server (VS Code Live Server, python3 -m http.server, npx serve): trang tự đọc danh sách thư mục.
  3. Đặt tên ảnh 1.jpg, 2.jpg, 3.png ... (liên tục, đuôi viết thường): không cần làm gì thêm.
Mỗi lần thêm hoặc bớt ảnh ở cách 1, chạy lại update-images.js.
