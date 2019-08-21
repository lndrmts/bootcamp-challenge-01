# Desafio 01 - Conseitos NodeJS

**O Desafio**

Criar uma aplicação do zero utilizando Express.
Essa aplicação será utilizada para armazenar projetos e suas tarefas.

## Instalando a Aplicação

Certifique-se de ter instalado `Node` & `NPM` ou `Yarn` para conseguir executar a aplicação.

## Iniciando a Aplicação

No diretótio `/` rode um dos comando abaixo:

``` 
    yarn add 
```
ou

``` 
    npm install
```
## Testando a Aplicação

Para testar é preciso utilizar um software REST de teste uma dica é o https://insomnia.rest/

## Utilize as seguintes rotas para debugar
POST /projects: A rota deve receber id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] }; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com àspas duplas.

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id/delete: A rota deve deletar o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

### Exemplo
Se eu chamar a rota POST /projects repassando { id: 1, title: 'Novo projeto' } e a rota POST /projects/1/tasks com { title: 'Nova tarefa' }, meu array de projetos deve ficar assim:
```
[
  {
    id: "1",
    title: 'Novo projeto',
    tasks: ['Nova tarefa']
  }
]
```
## Verifique no link abaixo todos os requisitos desse desafio
https://github.com/Rocketseat/bootcamp-gostack-desafio-01
