# .docker_202/Dockerfile
FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép các file package.json và package-lock.json từ thư mục app
COPY ../app/package*.json ./

# Set quyền sở hữu (nếu cần thiết)
RUN chown -R node:node /usr/src/app

# Cài đặt các dependency
RUN npm install

# Sao chép toàn bộ mã nguồn từ thư mục app
COPY ../app .

# Mở cổng 3000
EXPOSE 3000

# Thiết lập người dùng
USER node

# Lệnh khởi chạy ứng dụng ở môi trường production
CMD ["npm", "run", "start:prod"]
