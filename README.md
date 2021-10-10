# api-tarefas-2021

## Verificar os containers que estão funcionando
docker ps

## Subir os containers que estão no docker-compose.yaml
docker-compose up -d

## Parar os containers (docker-compose.yaml)
docker-compose down

## Acessar o Mongo DB
docker exec -it mongodb-api-tarefas mongo

## Finalizar um processo que está rodando em uma determinada porta
kill -9 $(lsof -t -i:3002)