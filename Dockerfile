FROM node:12.0-alpine
WORKDIR  /var/www/marvel-api
ENV PORT=8080
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install && npm cache clean --force
COPY . .
CMD ["npm", "start"]