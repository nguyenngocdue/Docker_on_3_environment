# Makefile tại project-root
DOCKER_COMPOSE_202=docker-compose -f .docker_202/docker-compose202.yml
DOCKER_COMPOSE_303=docker-compose -f .docker_302/docker-compose302.yml

# Lệnh để build và push code mới nhất sang môi trường beta (docker_202)
push_to_beta:
	# Stop môi trường beta hiện tại trong docker_202
	$(DOCKER_COMPOSE_202) down
	# Rebuild và start lại môi trường beta với code mới nhất
	$(DOCKER_COMPOSE_202) up --build -d
	@echo "Successfully pushed latest code to beta (docker_202)"
