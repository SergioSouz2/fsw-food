# **Documentação**

# Next.js

## Requisitos do sistema

- Node.js 18.18 ou LTS

## Inicie um projeto Next

```shell
npx create-next-app@latest nome_do_projeto
```

## Prisma ORM

Adicione o Prisma ORM ao seu aplicativo em alguns minutos para começar a modelar seus dados, executar migrações de esquemas e consultar seu banco de dados.

```she
npm install prisma --save-dev
ou
yarn add prisma --save-dev
```

Por fim, configure o Prisma ORM com o `init`comando do Prisma CLI:

```she
npx prisma init --datasource-provider postgresql
```

Isso cria um novo `prisma`diretório com um `schema.prisma`arquivo e configura o PostgreSql como seu banco de dados. Agora você está pronto para modelar seus dados e criar seu banco de dados com algumas tabelas.

## Configuração do PostgreSQL com Docker Compose

Antes de começar, certifique-se de que você tem os seguintes itens instalados:

- [Docker](https://www.docker.com/)
- Docker Compose

## Criar o Arquivo `docker-compose.yml`

Crie um arquivo chamado `docker-compose.yml` na raiz do seu projeto e insira o seguinte conteúdo:

```yaml
version: '3.8'

services:
  db:
    image: postgres:latest # Define a imagem do PostgreSQL
    container_name: postgres_db # Nome do container
    environment:
      POSTGRES_USER: user # Usuário padrão do PostgreSQL
      POSTGRES_PASSWORD: password # Senha do usuário
      POSTGRES_DB: database # Nome do banco de dados padrão
    ports:
      - "5432:5432" # Mapeia a porta 5432 do container para o host
    volumes:
      - postgres_data:/var/lib/postgresql/data # Persistência de dados

volumes:
  postgres_data:
    driver: local

```

## Subir o Container com Docker Compose

No terminal, navegue até o diretório onde o arquivo `docker-compose.yml` foi criado e execute o comando:

```bash
docker-compose up -d
```

## Obter a URL de Conexão

A URL de conexão do banco de dados segue este formato padrão:

```php
postgres://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>
```

## Criar e Aplicar a Primeira Migração

O arquivo `schema.prisma` contém a definição do modelo de dados. Certifique-se de que ele reflete a estrutura inicial do banco de dados que você deseja criar.

**Executar o Comando de Migração** Após definir o esquema no `schema.prisma`, execute:

```bash
npx prisma migrate dev --name init_database
```

## **Comandos Adicionais Relacionados**

**Resetar o Banco de Dados** Se você quiser limpar os dados e reaplicar todas as migrações (útil em desenvolvimento):

```bash
npx prisma migrate reset
```

Esse comando:

- Apaga todos os dados.
- Reaplica as migrações existentes.

**Verificar o Status das Migrações** Para listar migrações aplicadas e pendentes:

```bash
npx prisma migrate status
```

**Executar o Prisma Studio** Para visualizar e gerenciar dados diretamente no navegador:

```bash
npx prisma studio
```

## [**Shadcn/ui**](https://ui.shadcn.com/)

Esta **NÃO** é uma biblioteca de componentes. É uma coleção de componentes reutilizáveis que você pode copiar e colar em seus apps.

**O que você quer dizer com não ser uma biblioteca de componentes?**

Quero dizer que você não o instala como uma dependência. Ele não está disponível ou distribuído via npm.

Selecione os componentes que você precisa. Copie e cole o código no seu projeto e personalize conforme suas necessidades. O código é seu.

### Execute o `init`comando para criar um novo projeto Next.js ou para configurar um existente:

`````
npx shadcn@latest init
`````

### É isso

Agora você pode começar a adicionar componentes ao seu projeto.

```
npx shadcn@latest add button
```

