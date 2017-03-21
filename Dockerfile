FROM node:6.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]

#Commands to build and run this project
# >docker build -t <your username>/node-web-app .
# above command give a name to yor container for future reference
# docker run -p 3000:3000 -d <your username>/node-web-app
# 49160 -is main OS port 8080 -is container port
# access application http://localhost:49160

#>docker images (display all local downloaded images)
#>docker ps  -->(display list of running containers)
