FROM node:lts-alpine3.16
WORKDIR /usr/src/app
COPY . .
RUN npm i
EXPOSE 3000
CMD [ "npm", "run", "start"]
