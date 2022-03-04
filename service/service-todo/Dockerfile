FROM node:14.17.3

RUN mkdir -p /service

WORKDIR /service

COPY dist /service

RUN npm install --registry=https://registry.npmmirror.com

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "bundle.js"]