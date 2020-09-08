

FROM node:12.18.1

# Sets working directory to current directory 
WORKDIR  /
# Copy the package and package.json files from the current directory 
COPY package*.json /
#Running npm install, to install dependencies
RUN npm install
#Bundle the Source Code (required)
COPY . . 
#Port that container will use
EXPOSE 3000
# Starting node command 
CMD ["node", "./bin/www"]

# Docker build command 
# docker build . (path to dockerfile) -t <image name> 

#Docker container command 
# docker run -d (detached) -p (ports) 3000 (host port): 3000 (container ports) --name <container name> <image name to build container> 

