FROM node:6.4

ENV APP_PATH /usr/src/app

RUN mkdir -p $APP_PATH && cd $APP_PATH && \
    git clone https://github.com/watermelonpizza/Up1 . && \
    rm client/config.js.example && \
    rm server/server.conf.example

WORKDIR $APP_PATH/server

ENV NODE_ENV production
RUN npm install

COPY server.conf $APP_PATH/server/server.conf
COPY config.js $APP_PATH/client/config.js

EXPOSE 80
VOLUME /usr/src/app

ENTRYPOINT ["npm", "start"]
