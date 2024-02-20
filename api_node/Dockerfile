# Imagem oficial do Node.js como base
FROM node:latest

# Diretório de trabalho dentro do contêiner
WORKDIR /app

#adicionar package json
ADD package*.json ./

# Dependências do projeto
RUN npm install

COPY . .

# Porta
EXPOSE 3000

# Comandos Node.js
CMD ["node","app.js"]

