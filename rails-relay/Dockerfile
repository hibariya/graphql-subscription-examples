FROM ruby:2.5-alpine

RUN apk update --no-cache && apk upgrade --no-cache && apk add --no-cache --update tzdata tini build-base libc6-compat sqlite sqlite-dev nodejs nodejs-npm
RUN npm install --global yarn # to use the latest version...
RUN gem install bundler foreman --pre --no-document

ARG APP_USER=app
ARG APP_UID=1000
ARG APP_BUNDLE_PATH=/data/bundle

ENV BUNDLE_PATH=${APP_BUNDLE_PATH}
RUN mkdir -p /app $APP_BUNDLE_PATH
WORKDIR /app

RUN sh -c 'getent passwd ${APP_UID} || adduser -D -u ${APP_UID} ${APP_USER}'
RUN chown -R $APP_USER /app $APP_BUNDLE_PATH /usr/local/bundle
USER $APP_USER

EXPOSE 3000 3035

ENTRYPOINT ["/sbin/tini", "--"]
