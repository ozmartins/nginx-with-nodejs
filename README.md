# nginx & nodejs

Este repositório foi criado para atender ao desafio de Docker do curso Full Cycle 3.0. Nele existe uma mini aplicação NodeJS que conecta-se em um banco de dados MySql. Em seguida a mini aplicação cria uma tabela chamada `people` (caso ela ainda não exista) e a popula com um único registro sempre que ela é executada.

O repositório também possui um arquivo `docker-compose.yaml` que cria um contêiner MySql, um contêiner NodeJS e um contêiner Nginx. Dentro do arquivo `docker-compose.yaml` configurou-se o serviço mysql de modo que ele crie um banco de dados chamado `db`. Nele também foi configurado um volume que permite que os dados inseridos no banco sejam salvos na máquina hospedeira do contêiner. Por fim, este serviço possui um healthcheck configurado. Desta forma, o serviço é considerado saudável apenas quando o serviço está rodando e o banco de dados `db` já estiver criado.

Ainda no arquivo `docker-compose.yaml`, configurou o serviço node que instala as dependências usando npm e, em seguida, executa o arquivo `index.js`. Esse serviço usa a cláusula `depends_on`  para garantir que ele será executado somente quando o serviço mysql esteja saudável.

Finalmente, configurou o serviço nginx para que ele funcione como um proxy reverso para a aplicação NodeJS. O serviço nginx expõe a porta 8080 e está configurado para ser executado apenas quando o serviço node já estiver rodando.

## Rodando localmente

Primeiramente, clone o projeto para sua máquina local usando o comando abaixo:

```
git clone https://github.com/ozmartins/nginx-with-nodejs.git
```

Então, para entrar no diretório do projeto, digite no seu terminal:

```
cd nginx-with-nodejs
```
Finalmente, rode a aplicação usando o comando abaixo:

```
docker compose up -d
```

Com a aplicação rodando você pode tentar acessá-la pela URL https://localhost:8080
