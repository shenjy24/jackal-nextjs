#!/bin/sh
set -e
cd /app
if [ ! -x node_modules/.bin/next ]; then
  echo "[icebox-dev] 安装依赖（首次或空卷）..."
  npm ci
fi
exec npm run dev -- --hostname 0.0.0.0 --port 3000
