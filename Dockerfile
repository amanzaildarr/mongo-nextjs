FROM node:20-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm cache clean --force

# RUN npm ci

RUN npm install --no-cache

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
