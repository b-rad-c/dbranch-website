FROM node:16.13.2-slim
EXPOSE 80
RUN npm install -g serve@13.0.2

WORKDIR /app
COPY ui/ .

RUN npm install && npm run build
RUN rm -R node_modules

CMD ["serve", "-p", "80", "-s", "build"]