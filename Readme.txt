1. modified GPTClient & OpenAIClient to proxy OpenAI API to Azure Openai
2. edit .env file 
3. mongodb -- docker compose up -d to start mongodb in container.
4. azure-openai-proxy -- run.sh to start the proxy.
5. mongodb -- nohub ./run.sh & to start meilisearch in container. 
6. npm ci , npm run frontend, nohup npm run backend &
