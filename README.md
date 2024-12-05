# Documentação do Projeto - Sistema de Contatos
Descrição Geral
Este projeto é uma aplicação backend para gerenciar contatos de usuários, permitindo que os usuários possam criar, visualizar, atualizar e excluir contatos. O sistema segue o padrão MVC (Model-View-Controller) e foi desenvolvido utilizando Node.js e Express.js. O banco de dados utilizado é um banco relacional, configurado para persistir informações de contatos, como nome, telefone e email dos usuários.

# Estrutura de Pastas e Arquivos
A estrutura do projeto segue o padrão MVC, organizando os arquivos de acordo com suas responsabilidades. Abaixo está a descrição das pastas e arquivos principais:

• controllers          
Contém os controladores que lidam com a lógica das rotas

• helpers              
Funções auxiliares, como validações

• migrations           
Arquivos de migrações para o banco de dados

• models               
Modelos que representam as entidades do banco de dados

• repositories         
Camada de acesso aos dados no banco (para persistência)

• routes               
Definição das rotas da API

• config              
Arquivo de configuração (ex: banco de dados)

• server.ts            
Arquivo principal do servidor

----------------------------------------------------------------------------------------------------------------

# Descrição das Pastas

controllers: Contém os controladores responsáveis por lidar com as requisições HTTP e retornar as respostas apropriadas. Cada controlador é responsável por uma entidade do sistema. Por exemplo, contatoController.js gerencia as requisições relacionadas aos contatos.

helpers: Contém funções auxiliares e utilitárias que podem ser usadas em diferentes partes do código. Um exemplo é o arquivo validation.js, que contém funções para validar dados de entrada.

migrations: Arquivos de migração do banco de dados que são responsáveis pela criação e atualização das tabelas no banco de dados.

models: Contém os modelos que representam as entidades do banco de dados. O modelo contato.js define como os dados de contato são armazenados.

repositories: A camada de repositório contém as funções que interagem diretamente com o banco de dados para obter ou alterar dados. O contatoRepository.js contém funções para manipular contatos no banco de dados.

routes: Contém a definição das rotas da API. No arquivo contatoRoutes.js, as rotas são configuradas para cada operação de CRUD sobre contatos.

services: Contém a lógica de negócios. O arquivo contatoService.js interage com os repositórios para manipular dados e é chamado pelos controladores.

config: Arquivos de configuração, como a configuração do banco de dados.

-----------------------------------------------------------------------------------------------------------------

# Instruções de Instalação e Configuração

Instalar as dependências

O projeto utiliza o Node.js. instale o Node.js.

Para instalar as dependências do projeto, rode o comando:
npm install

Configuração do Banco de Dados

Configure o banco de dados de acordo com suas preferências (por exemplo, MySQL ou PostgreSQL). O arquivo de configuração do banco está em config/database.js.

Rodar as migrações
Execute as migrações para criar as tabelas no banco de dados:

npx ts-node src/migrations/migrations.ts

Rodar a aplicação
Para rodar o servidor, utilize o seguinte comando:

npx ts-node src/server.ts

O servidor será iniciado e ficará disponível em http://localhost:3000.

--------------------------------------------------------------------------------------------------------------------

# Exemplos de Uso das Rotas

O sistema possui as seguintes rotas para manipulação dos contatos:

1. GET /contatos
Descrição: Retorna todos os contatos cadastrados no sistema.

Exemplo de requisição:
curl -X GET http://localhost:3000/contatos

2. POST /contatos
Descrição: Adiciona um novo contato ao sistema.

Exemplo de requisição:
curl -X POST http://localhost:3000/contatos

3. PUT /contatos/:id
Descrição: Atualiza um contato existente pelo seu ID.

Exemplo de requisição:
curl -X PUT http://localhost:3000/contatos/1

4. DELETE /contatos/:id
Descrição: Deleta um contato pelo seu ID.

Exemplo de requisição:
curl -X DELETE http://localhost:3000/contatos/3

----------------------------------------------------------------------------------------------------------------------