# Knovator DevOps Technical Task – Solution Pack

This repository contains:
- **Step 1**: Multi-stage Docker for Node.js (API) and React, docker-compose, Nginx reverse proxy (Ubuntu 20.04 ready)
- **Step 2**: GitLab CI/CD pipeline using a **self-hosted VM runner**, secure deploy via SSH and Docker Compose
- **Step 3**: Distributed Laravel plan (web, PHP-FPM, Redis, MySQL, Elasticsearch) + docker-compose example and hardening notes

---

## Ubuntu 20.04 – Prereqs
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
sudo systemctl enable docker --now
# Optional firewall
sudo ufw allow 22,80,443/tcp
sudo ufw --force enable
```

## Step 1 – Local run
```bash
cd step1
docker compose up -d --build
# Frontend: http://localhost/
# API:      http://localhost/api/hello
```

## Step 2 – GitLab CI/CD (self-hosted runner)
Register a runner (tag `vm-runner`) on a VM:
```bash
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash
sudo apt-get install -y gitlab-runner
sudo gitlab-runner register --url https://gitlab.com/ --registration-token <TOKEN> --executor shell --tag-list vm-runner --description "VM Runner"
sudo systemctl enable gitlab-runner --now
```

Set CI variables: `CI_REGISTRY_USER`, `CI_REGISTRY_PASSWORD`, `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY`.
On the deploy VM: `mkdir -p ~/app/nginx/certs ~/app/env ~/app/scripts` and place TLS certs if needed.
Pipeline builds/pushes images and SSH-deploys `docker-compose.prod.yml` via `scripts/deploy.sh`.

## Step 3 – Laravel distributed
See `step3/architecture.md`. Example stack:
```bash
cd step3
docker compose -f docker-compose.laravel.yml up -d
# http://localhost:8080
```
Adjust `step3/env/.app.env` and consider managed MySQL for HA as you scale.
