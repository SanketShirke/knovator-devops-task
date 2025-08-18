# Knovator DevOps Technical Task – Solution Pack

This repository contains:
- **Step 1**: Multi-stage Docker for Node.js (API) and React, docker-compose, Nginx reverse proxy (Ubuntu 20.04 ready)
- **Step 2**: Github CI/CD pipeline 
- **Step 3**: Distributed Laravel plan (web, PHP-FPM, Redis, MySQL, Elasticsearch) + docker-compose example and hardening notes

---
```

## Step 1 – Local run
```bash
cd step1
docker compose up -d --build
# Frontend: http://localhost/
# API:      http://localhost/api/hello

## Step 3 – Laravel distributed
See `step3/architecture.md`. Example stack:
```bash
cd step3
docker compose -f docker-compose.laravel.yml up -d
# http://localhost:8080

