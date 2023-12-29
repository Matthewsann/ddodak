FROM node:18-alpine

RUN mkdir -p /data/sangdamplus/next-dev
WORKDIR /data/sangdamplus/next-dev

COPY ./ ./
COPY ./.env.local ./.env

RUN npm install -g pnpm
RUN pnpm install 
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]