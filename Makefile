commitID=$(shell git log --pretty=format:"%H" -1)
tag=latest

# 根据实际名称来定义
container_name=projectName
# 根据实际端口来定义
port=4004

build-image:
	@echo "============= docker build image ============="
	docker build -t jweboy/${container_name}:${tag} .
run-container:
	@echo "============= docker run container ============="
	docker run -p ${port}:${port} -d --name ${container_name}  --network network-connect-middleware --rm jweboy/${container_name}:${tag}
remove-container:
	@echo "============= docker remove container ============="
	docker stop ${container_name}
push-image:
	@echo "============= docker push image ============="
	docker push jweboy/${container_name}:${tag}
pull-image:
	@echo "============= docker pull image ============="
	docker pull jweboy/${container_name}:${tag}
