FROM ruby:2.4.1

MAINTAINER Neal Joho

RUN mkdir /app && apt-get update -qq \
 && apt-get install -y nodejs cowsay build-essential libpq-dev vim mysql-client

EXPOSE 80 8080

ENV BUNDLE_JOBS=4 \
    BUNDLE_PATH=/bundle \
    PATH=$PATH:/usr/games/
WORKDIR /app

ADD . /app

CMD ['foreman', 'start']
