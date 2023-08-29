# Comparador de Carros

Este projeto consiste em uma API REST que permite cadastrar carros e comparar suas características para determinar qual é o melhor carro com base em critérios específicos.

## Como Executar o Projeto

1. Clone o repositório para o seu ambiente local: <br> git clone https://github.com/Julio-Cezar-Santos/Api-comparador-de-carros.git

2. Instale as dependências do projeto:<br> npm install express <br> npm install -D nodemon

3. Inicie o servidor: <br> npm run dev
4. O servidor estará rodando em `http://localhost:3000`.

## Exemplos de Uso

### Cadastrar Carro

Endpoint: `/carros/cadastrar` (Método GET)

Para cadastrar um novo carro, faça uma solicitação GET com os detalhes do carro no corpo da solicitação. Exemplo:

![Exemplo de Cadastro](./screenshots/cadastrar_carro.png)

### Comparar Carros

Endpoint: `/carros/comparar` (Método GET)

Para comparar dois carros, faça uma solicitação GET com os detalhes dos carros na URL. Exemplo:

![Exemplo de Comparação](./screenshots/comparar_carros.png)

 


