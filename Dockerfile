FROM nginx:1.19.7-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/rinspect  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
