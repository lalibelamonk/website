FROM node:7.10

MAINTAINER Neal Johnson <njohnson@nexient.com>

RUN mkdir /client

WORKDIR /client

ADD . /client

RUN npm install

RUN npm rebuild node-sass --force
