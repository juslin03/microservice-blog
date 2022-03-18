FROM node:16-alpine
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm cache clean --force
RUN npm install
COPY ./ ./

CMD ["npm", "start"]