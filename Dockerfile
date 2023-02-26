FROM node:lts-alpine AS build
WORKDIR /home/node
USER node
COPY . /home/node
RUN yarn install && yarn build

FROM node:lts-alpine
ENV PORT=4000
WORKDIR /home/node
USER node
COPY --from=build /home/node/dist/index.min.js /home/node
EXPOSE ${PORT}
CMD ["node", "/home/node/index.min.js"]
