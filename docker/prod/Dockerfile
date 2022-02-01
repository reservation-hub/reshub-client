FROM reshub-client:latest as builder
WORKDIR /app
ARG REACT_APP_BASE_URL=$REACT_APP_BASE_URL \
    REACT_APP_GOOGLE_CLIENT_ID=$REACT_APP_GOOGLE_CLIENT_ID \
    REACT_APP_GOOGLE_CLIENT_SECRET=$REACT_APP_GOOGLE_CLIENT_SECRET

RUN yarn install && yarn build

FROM ubuntu:20.04

COPY --from=builder /app/build /app/build

CMD ["cp", "-r", "/app/build", "/app/dist"]
