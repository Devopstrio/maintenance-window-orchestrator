.PHONY: help build up down test lint migrate schedule-window execute-maint validate-health rollback-change

help:
	@echo "Maintenance Window Orchestrator - Management Commands"
	@echo "---------------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "schedule-window : Create a new orchestrated maintenance window"
	@echo "execute-maint   : Trigger maintenance execution workflow"
	@echo "validate-health : Run automated post-maintenance validation"
	@echo "rollback-change : Execute automated rollback procedure"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

schedule-window:
	docker-compose exec api python scripts/schedule/create_window.py

execute-maint:
	docker-compose exec api python scripts/execute/run_workflow.py

validate-health:
	docker-compose exec api python scripts/validate/check_sla.py

rollback-change:
	docker-compose exec api python scripts/rollback/revert_state.py
