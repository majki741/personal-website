#stage 1
FROM node:latest as node
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /usr/local/app/dist/witryna-osobista /usr/share/nginx/html
EXPOSE 80