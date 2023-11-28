# Autenticando EC2 para o ECR
aws ecr get-login-password --region sa-east-1 | docker login --username AWS --password-stdin 140802587575.dkr.ecr.sa-east-1.amazonaws.com

# Parando e removendo container antigo
docker container stop comex-backend
docker container rm comex-backend

# Removendo a imagem anterior
docker image rm 140802587575.dkr.ecr.sa-east-1.amazonaws.com/comex-backend:latest

# Pull da docker image para o EC2
docker pull 140802587575.dkr.ecr.sa-east-1.amazonaws.com/comex-backend:latest

# Rodando container a partir da imagem puxada
docker container run -v /root/certs-data/:/data/letsencrypt/ -v /etc/letsencrypt:/etc/letsencrypt -d --name comex-backend --restart always -p 5090:5090 -e .env --log-opt max-size=10m 140802587575.dkr.ecr.sa-east-1.amazonaws.com/comex-backend:latest npm run start
