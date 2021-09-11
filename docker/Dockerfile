FROM node:14

WORKDIR /app

COPY ./app/public .
COPY ./app/src .
COPY ./app/package.json .
COPY ./app/yarn.lock .
COPY ./app/tsconfig.json .

COPY ./scripts /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]