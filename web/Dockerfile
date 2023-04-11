FROM node:lts-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]

FROM development as build

WORKDIR /usr/src/app

ENV NODE_ENV production

RUN npm run build

RUN npm ci --only=production && npm cache clean --force

FROM build as production

WORKDIR /usr/src/app

CMD ["node", ".output/server/index.mjs"]
