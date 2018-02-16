FROM node:8.9.4-alpine
LABEL maintainer="Douglas Minnaar"
LABEL description="A simple React app that allows one to increase or decrease a counter"
EXPOSE 8080
RUN apk update && \
    apk upgrade && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --silent && npm cache clean --force
CMD [ "npm", "start"]