#!/usr/bin/env bash
set -euo pipefail
mkdir -p env nginx certs scripts
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d --remove-orphans
docker image prune -f
