ARG NODE_VERSION=14.15.4-alpine

FROM node:${NODE_VERSION}

WORKDIR /frontend

COPY package*.json ./

RUN npm install --production -g

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]