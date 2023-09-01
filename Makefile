.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: server
server:
	yarn dev

.PHONY: dev
dev: down up server

.PHONY: migrate
migrate:
	yarn prisma migrate dev --name init
