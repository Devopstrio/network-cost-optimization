.PHONY: help build up down test lint migrate ingest-flows analyze-traffic generate-recommendations

help:
	@echo "Network Cost Optimization Platform - Management Commands"
	@echo "--------------------------------------------------------"
	@echo "build              : Build all service containers"
	@echo "up                 : Start all services in the background"
	@echo "down               : Stop all services"
	@echo "test               : Run all tests (Unit + Optimization models)"
	@echo "lint               : Run linting checks"
	@echo "migrate            : Run database migrations"
	@echo "ingest-flows       : Manually trigger network flow log ingestion"
	@echo "analyze-traffic    : Run traffic flow and cost attribution analysis"
	@echo "generate-recommendations : Generate network optimization recommendations"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api tests/models
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

ingest-flows:
	docker-compose exec api python scripts/ingest/flow_processor.py

analyze-traffic:
	docker-compose exec api python scripts/analyze/traffic_engine.py

generate-recommendations:
	docker-compose exec api python scripts/optimize/recommender.py
