FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node welcome.js
EXPOSE 8000