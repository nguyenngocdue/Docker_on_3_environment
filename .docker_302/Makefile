docker: docker-stop docker-start

docker-start:
	docker-compose -f docker-compose302.yml down && docker-compose -f docker-compose302.yml  up -d --build
docker-stop:
	docker-compose -f docker-compose302.yml down 

.PHONY: docker docker-start docker-stop