<<<<<<< HEAD
FROM node:14-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm" , "start" ]
=======
FROM node:lts-alpine3.16
WORKDIR /usr/src/app
COPY . .
RUN npm i
EXPOSE 3000
CMD [ "npm", "run", "start"]
>>>>>>> f89d2aacf4b75be592425e9c7079262f943bdf26
