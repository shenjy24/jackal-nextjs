#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
if [[ ! -f .env ]]; then
  echo "请先执行: cp env.example .env 并填写变量。"
  exit 1
fi
docker compose up -d "$@"
