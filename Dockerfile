FROM nginx:alpine

LABEL author="Dan Wahlin"

WORKDIR /usr/share/nginx/html

COPY ./.docker/nginx.conf /etc/nginx/nginx.conf
COPY ./dist .

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]

## To Build
## docker build -t danwahlin/ng_nginx:<tag_version> .

## To run custom image
## docker run -p 8080:80 danwahlin/ng_nginx

## To run without Dockerfile (import to use the build flag below so the "dist" folder isn't deleted - it'll break the volume otherwise)
## 1. ng build --delete-output-path false
## 2. docker run -p 8080:80 -v $(pwd)/dist:/usr/share/nginx/html nginx:alpine