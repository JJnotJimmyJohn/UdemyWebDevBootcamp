FROM alpine:latest

RUN apk add --update nodejs npm
RUN apk add git
RUN npm install express

EXPOSE 8008


# run this to build the image
# docker build --tag wdb_img .
# run this in terminal to run the container
# docker run -it -v "/Users/jianjin/Documents/Web Development - Udemy":"/wdb" -p 8008:8008 --name wdbenv wdb_img