FROM node:16
EXPOSE 80
#ENV DEBIAN_FRONTEND=noninteractive
#RUN apt-get update
#RUN apt-get -yq install npm
RUN npm install -g serve

WORKDIR /app
COPY ui/ .

RUN npm install && npm run build
RUN rm -R node_modules

CMD ["serve", "-p", "80", "-s", "build"]