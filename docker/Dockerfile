FROM node:14

WORKDIR /app

COPY ./app/public ./public
COPY ./app/src ./src
COPY ./app/package.json .
COPY ./app/yarn.lock .
COPY ./app/tsconfig.* ./
COPY ./app/*.config.js ./
COPY ./app/.* ./

COPY ./scripts /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]
