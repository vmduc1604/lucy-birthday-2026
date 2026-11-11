// Chạy: node update-images.js  -> tạo lucy-images/images.js liệt kê mọi ảnh trong thư mục
const fs = require("fs");
const f = fs
  .readdirSync("lucy-images")
  .filter((n) => /\.(jpe?g|png|webp|gif|avif|heic|heif)$/i.test(n))
  .sort();
fs.writeFileSync(
  "lucy-images/images.js",
  "window.LUCY_IMAGES=" + JSON.stringify(f) + ";",
);
console.log(f.length + " ảnh");
