#!/bin/bash
if [ $BACKEND_BASE_URL ]; then
  echo "window.backendBaseUrl = \"$BACKEND_BASE_URL\";" > /usr/share/nginx/html/backend.js
  echo "env BACKEND_BASE_URL is existed, created backend.js"
else
  echo "env BACKEND_BASE_URL is not found"
fi

nginx -g "daemon off;"
