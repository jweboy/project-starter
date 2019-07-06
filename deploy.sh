#!/bin/sh

tag="latest"
container_name="projectName"
image_name="jweboy/${container_name}:${tag}"
port=4004

# pull image
docker pull ${image_name}

# cleanup
if [ "$(docker ps -a | grep projectName)" ]; then
    docker stop ${container_name}
fi

# restart
docker run -p ${port}:${port} -d --name ${container_name}  --network network-connect-middleware --rm ${image_name}


# 检查容器是否存在
# if [ ! "$(docker ps -q -f name=${container_name})" ]; then
#     if [ "$(docker ps -aq -f status=running -f name=${container_name})" ]; then
#         # cleanup
#         docker stop ${container_name}
#     fi
#         # restart
#         docker run -p 4004:4004 -d --name ${container_name}  --network network-connect-middleware --rm jweboy/${container_name}:0.0.1
# fi

# https://stackoverflow.com/questions/38576337/how-to-execute-a-bash-command-only-if-a-docker-container-with-a-given-name-does
