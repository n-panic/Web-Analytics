# Analytics

## Membres du groupe

- Nikola PANIC
- Mehdi SABER

## Installation

```bash
cp .env.example .env
docker compose build --pull --no-cache
docker compose up -d
docker compose exec dashboard npx prisma migrate dev --name init
```
