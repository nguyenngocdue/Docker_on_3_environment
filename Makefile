# Định nghĩa các lệnh docker-compose
DOCKER_COMPOSE_102=docker-compose -f .docker_102/docker-compose102.yml
DOCKER_COMPOSE_202=docker-compose -f .docker_202/docker-compose202.yml
DOCKER_COMPOSE_302=docker-compose -f .docker_302/docker-compose302.yml

# Lệnh để build và push code từ docker_302 lên docker_202
push_to_beta:
	# Stop môi trường beta hiện tại
	$(DOCKER_COMPOSE_202) down
	# Build lại môi trường beta với code mới nhất từ thư mục app
	$(DOCKER_COMPOSE_202) up --build -d 
	@echo "Code đã được đẩy lên beta (docker_202) thành công!"

push_to_prod:
    # Stop môi trường prod hiện tại
	$(DOCKER_COMPOSE_102) down
	# Build lại môi trường prod với code mới nhất từ thư mục app
	$(DOCKER_COMPOSE_102) up --build -d 
	@echo "Code đã được đẩy lên prod (docker_102) thành công!"
