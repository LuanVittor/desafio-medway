FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD npx prisma migrate deploy && npm run dev
