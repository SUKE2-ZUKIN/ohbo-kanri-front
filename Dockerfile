FROM node:18-slim

ARG APP_NAME
ARG API_URL
ARG WORKDIR

ENV APP_NAME $APP_NAME
ENV API_URL $API_URL
ENV WORKDIR $WORKDIR
ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV HOST 0.0.0.0

WORKDIR ${WORKDIR}

# Nuxtのビルドに必要なパッケージをインストール
RUN apt-get update -qq && apt-get install -y git vim && yarn install
