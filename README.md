# Teste_CotaBox

## Sobre o Projeto
- Esse projeto consiste em um layout feito com react.js recebendo dados de uma api feita com node.js e express onde mostra uma tabela e um gráfico no qual exibe o nome e o sobrenome de
um participante e o percentual dele de participação em uma determinada produção.

## Tecnologias utilizadas na construção do sistema:
- HTML, CSS, JavaScript, React.js, Node.js, Insomnia e Mongo DB.

## Imagem do Layout
![img1](https://github.com/Gustavo12386/Teste_CotaBox/assets/81700849/0d0655b4-b683-48d5-94e8-f555f3d470f5)

## Imagem da API
![img2](https://github.com/Gustavo12386/Teste_CotaBox/assets/81700849/d9281460-1d29-4d2b-8c04-d2993a1b23b2)

## Instalando o react.js
#### foi utilizado o seguinte comando para a instalação:
- npm create vite@latest
#### e para a execução da aplicação foi usado os seguintes comandos:
- cd layout_react
- npm install(comando para instalar as depências que vão ser usadas)
- npm run dev

## Criando imagem do layout_react com docker
- primeiro será necessário criar uma imagem com arquivo Dockerfile e colocando os seguintes comandos:
 ![img4](https://github.com/Gustavo12386/Teste_CotaBox/assets/81700849/71a10abe-3c10-4481-92fa-b52e437ae12c)

#### e na sequência executar o seguinte comanado para a criação da imagem:
- docker build -t layout_react .

## Instalando API com Node.js
#### para instalar os arquivos da api é necessário executar os segintes comandos:
- npm init
- npm install express

#### no caso do node.js para executa o comando de execução da aplicação é necessário realizar uma configuração no arquivo package.json na parte de scripts:
![img6](https://github.com/Gustavo12386/Teste_CotaBox/assets/81700849/47fa0315-6026-4b0f-ab15-dfe4c6b24c06)
#### e em seguida executar os seguintes comandos:
- npm run nodemon
- npm run dev

  ## Criando imagem da API com docker
  - primeiro será necessário criar uma imagem com arquivo Dockerfile e colocando os seguintes comandos:
  ![img3](https://github.com/Gustavo12386/Teste_CotaBox/assets/81700849/c7380aa1-5a8f-4177-b73f-01fb5c10b254)

#### e na sequência executar o seguinte comanado para a criação da imagem:
- docker build -t api_node .

# Autor do Projeto
- Gustavo Viana
