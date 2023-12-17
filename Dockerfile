FROM node:18

RUN apt-get update && \
    apt-get upgrade -y && \
    npm install -g newman && \
    npm install -g newman-reporter-htmlextra 


WORKDIR /JS_HILLEL

COPY . .
