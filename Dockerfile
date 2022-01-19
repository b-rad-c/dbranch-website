FROM nginx
RUN apt-get update
RUN apt-get -y install npm=7.5.2+ds-2

RUN rm /usr/share/nginx/html/*
WORKDIR /tmp/build

COPY nginx.conf /etc/nginx/nginx.conf
COPY ui/ .

RUN npm install && npm run build
RUN mv build/* /usr/share/nginx/html

WORKDIR /home
# RUN  rm -R /tmp/build

CMD ["nginx", "-g", "daemon off;"]
