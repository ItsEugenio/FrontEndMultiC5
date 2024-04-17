FROM node:18.16.0

WORKDIR /app

COPY ./apipay ./

RUN npm install

EXPOSE 80:5173

CMD ["npm", "dev"]
