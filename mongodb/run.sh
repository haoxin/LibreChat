#!/bin/bash
nohup docker run  -d --rm \
  -p 7700:7700 \
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.5
  meilisearch --master-key DRfV0Mw7Vgz8JjNNbzBv-yFFSG9gQj1zKPaT6J0JaRgs &

docker compose up -d

nohup npm run backend &
