# Sử dụng Node.js version 20 trên Alpine
FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép các file package.json và package-lock.json từ thư mục app
COPY ../app/package*.json ./

# Cài đặt tất cả các dependency (bao gồm devDependencies để build)
RUN npm install

# Cài đặt @types/node để hỗ trợ build với TypeScript
RUN npm install --save-dev @types/node

# Sao chép toàn bộ mã nguồn từ thư mục app
COPY ../app .

# Biến môi trường NODE_ENV=production
ENV NODE_ENV=production

# Build ứng dụng
RUN npm run build

# Xóa devDependencies sau khi build xong để giảm kích thước image
RUN npm prune --production

# Mở cổng 3000
EXPOSE 3000

# Thiết lập người dùng không phải root để bảo mật hơn
USER node

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
