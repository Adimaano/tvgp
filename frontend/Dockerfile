
FROM node:latest

WORKDIR /frontend

COPY . .

RUN rm -rf node_modules && rm -rf package-lock.json

RUN npm install

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "start"]