FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production

COPY . .

RUN addgroup -g 1000 ndcgp && \
    adduser -D -u 1000 ndc -G ndcgp && \
    chown -R ndc:ndcgp /app

USER ndc

# Expose port cho môi trường production
EXPOSE 3000

CMD ["npm", "run", "start"]
