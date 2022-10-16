FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npx", "serve", "build" ]


# combining build and run commands into one line:
# $ docker build -t react-productiv . && docker run -d --name productiv-app -p 3000:3000 react-productiv
