# Imagem oficial do Node.js como base
FROM node:latest

# Diretório de trabalho dentro do contêiner
WORKDIR /app

ADD package*.json ./

# Dependências do projeto
RUN npm install

COPY . .

# Construir a aplicação React.js com Vite
RUN npm run build

# Porta
EXPOSE 5173

# Comando para iniciar a aplicação React.js
CMD ["npm", "run", "dev"]
