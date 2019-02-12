# import nodejs base image
FROM node:10-alpine

# create `node` user and set permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# set working directory
WORKDIR /home/node/app

# copy package and package lock files
COPY package*.json ./

# install dependencies
RUN npm install

# copy app code
COPY . .

# give `node` user permissions over the app code
COPY --chown=node:node . .

# change to `node` user
USER node

# tell docker which port to publish at runtime
EXPOSE 5000

# run the app
CMD ["npm", "run", "prod"]
