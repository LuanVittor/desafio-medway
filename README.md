# Desafio Medway

Este projeto é uma aplicação web fullstack desenvolvida com Next.js no frontend e backend, utilizando PostgreSQL como banco de dados e Docker para containerização. A aplicação permite o cadastro e login de usuários, com validações de senha e mensagens de feedback.

## Requisitos

- Docker
- Docker Compose

## Estrutura do Projeto

```plaintext
.
├── prisma/                       # Configuração do banco de dados
│   ├── migrations/               # Migrações do banco de dados
│   └── schema.prisma             # Esquema Prisma
├── public/                       # Assets públicos, como imagens
├── src/                          # Código fonte do projeto
│   ├── app/
│   │   ├── about/                # Página 'Sobre Mim'
│   │   ├── api/                  # APIs de autenticação
│   │   ├── contact/              # Página de Contato
│   │   ├── hobbies/              # Página de Hobbies
│   │   └── projects/             # Página de Projetos
│   ├── components/               # Componentes de interface
│   ├── data/                     # Arquivos de dados estáticos
│   └── globals.css               # Estilos globais
├── .env                          # Arquivo de variáveis de ambiente
├── docker-compose.yml            # Configuração do Docker Compose
├── Dockerfile                    # Dockerfile para o container do Next.js
└── README.md                     # Este arquivo

```

## Variáveis de Ambiente

O projeto utiliza variáveis de ambiente que precisam ser configuradas no arquivo .env. Certifique-se de que as seguintes variáveis estão definidas corretamente:

```plaintext
DATABASE_URL=postgresql://myuser:mypassword@db:5432/nextjsdb
```

Essas variáveis também estão configuradas no docker-compose.yml para garantir que o backend se conecte ao banco de dados corretamente.

## Configuração do Projeto

### Clonando o Repositório

```
git clone https://github.com/seu-usuario/desafio-medway.git
cd desafio-medway
```

## Iniciando o Projeto

Para iniciar o projeto, basta executar o Docker Compose:

````
docker-compose up --build
````
Isso irá construir as imagens do frontend e backend, e iniciar o PostgreSQL no container.

## Aplicando Migrações e Sincronizando o Banco de Dados

Após subir os containers, é necessário rodar as migrações do Prisma para sincronizar o banco de dados:

```
docker-compose exec nextjs npx prisma migrate dev --name init
```

## Acessando a Aplicação
Frontend e Backend (Next.js): Acesse http://localhost:3000

## Verificando a Conexão com o Banco de Dados
Para garantir que o banco de dados PostgreSQL está funcionando corretamente, você pode acessar o container do banco de dados e utilizar o cliente psql:

```
docker exec -it desafio-medway-db-1 /bin/bash
psql -U myuser -d nextjsdb
```
## Funcionalidades
- Tela de Login: Autenticação por email e senha
- Tela de Cadastro: Validação de senha e verificação se o usuário já está cadastrado
- Feedback Visual: Toasts para exibir mensagens de erro ou sucesso