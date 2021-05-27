FROM node:14

WORKDIR /app

COPY ./app .

COPY ./scripts /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]