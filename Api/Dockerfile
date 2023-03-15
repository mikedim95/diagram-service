FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /appData/api
COPY . .
RUN npm install 
EXPOSE 9103


CMD ["node", "app.js"]
