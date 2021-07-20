FROM node:14-alpine
RUN apk add --no-cache fontconfig
RUN ln -s /usr/lib/libfontconfig.so.1 /usr/lib/libfontconfig.so && \
    ln -s /lib/libuuid.so.1 /usr/lib/libuuid.so.1 && \
    ln -s /lib/libc.musl-x86_64.so.1 /usr/lib/libc.musl-x86_64.so.1
ENV LD_LIBRARY_PATH /usr/lib
RUN apk --no-cache add msttcorefonts-installer fontconfig && \
    update-ms-fonts && \
    fc-cache -f
WORKDIR  /app
COPY package.json /app/package.json
RUN mkdir images
RUN npm install

# install application
COPY . /app
EXPOSE 4000
CMD [ "npm", "run", "start.dev" ]