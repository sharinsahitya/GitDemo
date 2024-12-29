#use the latest L75 version of node.js
FROM node:18-alpine 
#latest version of nodejs

#set the working directory inside the container
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

#install dependencies
RUN npm install

#copy the rest of your application files
COPY . . 

#expose the port where your app runs 
EXPOSE 3000

#Define the cmd to run ur app
CMD ["npm","start"]
