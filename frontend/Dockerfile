
FROM node:22-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install -g

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "start"]