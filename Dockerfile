FROM nginx:1.17.1-alpine
COPY /dist/PhoneValidator /usr/share/nginx/html
