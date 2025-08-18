# Distributed Laravel Architecture Plan (Secure, Scalable, Cost-Effective)

## Goals
- Secure: Least-privilege networking, secrets management, TLS, minimal images.
- Scalable: Stateless web/app tier; horizontal scale of php-fpm, queue workers.
- Cost-Effective: Start on 1–2 VMs and evolve to multi-node with load balancer.

## Phase 1 (Small, Cost-Optimized)
- 1 VM with Docker Compose: nginx (web), php-fpm (app), redis, mysql (or managed), elasticsearch.
- Nightly DB backups; separate volume for data.

## Phase 2 (Highly Available)
- 3 VMs: 
  - VM1: nginx reverse proxy + TLS
  - VM2: php-fpm replicas, queue workers, scheduler
  - VM3: Redis, MySQL (managed preferred), Elasticsearch
- Add cloud Load Balancer; move secrets to KMS/SSM; enable backups & monitoring.

## Phase 3 (Kubernetes)
- Migrate to k8s with Ingress, HPA; managed Redis/MySQL; ECK for Elasticsearch.

## Security
- Non-root containers where possible, read-only FS.
- TLS everywhere, strong ciphers, WAF/CDN at edge.
- App-only access to DB/Redis/ES; no public exposure.
- Rotate `APP_KEY`; store secrets outside images.

## Scaling Levers
- Scale php-fpm + tune pool.
- Queue workers scale on depth.
- Managed DB for HA; ES heap sizing; snapshots to object storage.
