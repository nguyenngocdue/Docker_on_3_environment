# File Makefile để quản lý Docker Compose cho ba môi trường

# Tên các file Docker Compose
COMPOSE_FILE_LOCAL=.docker_302/docker-compose302.yml
COMPOSE_FILE_BETA=.docker_202/docker-compose202.yml
COMPOSE_FILE_PROD=.docker_102/docker-compose102.yml

up:
	@echo "Starting $(env) environment..."
	@if [ "$(env)" = "local" ]; then \
		docker-compose -f $(COMPOSE_FILE_LOCAL) up -d; \
	elif [ "$(env)" = "beta" ]; then \
		docker-compose -f $(COMPOSE_FILE_BETA) up -d; \
	elif [ "$(env)" = "prod" ]; then \
		docker-compose -f $(COMPOSE_FILE_PROD) up -d; \
	else \
		echo "Invalid environment. Use 'env=local', 'env=beta', or 'env=prod'."; \
	fi
