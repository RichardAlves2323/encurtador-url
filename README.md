# 🔗 Desafio - Encurtador de URL

Este projeto é uma aplicação fullstack que implementa um **encurtador de URLs** seguindo os princípios da **Arquitetura Limpa**, com backend em **Node.js (Express)** e frontend em **React** com **Bootstrap**.

---

## 🚀 Funcionalidades

- Criar URLs encurtadas.
- Listar URLs existentes com:
  - URL original.
  - URL encurtada.
  - Quantidade de cliques.
- Redirecionamento automático via slug.
- Deletar uma URL encurtada.
- Contador de cliques atualizado em tempo real ao acessar a URL encurtada.

---

## 🛠 Tecnologias utilizadas

### Backend
- **Node.js**
- **Express**
- **Prisma ORM**

### Frontend
- **React**
- **Axios**
- **Bootstrap 5**

---

## 📁 Estrutura de Pastas

```
src/
│
├── domain/              # Camada de domínio
│   ├── entities/        # Entidades do domínio (ex: Url)
│   ├── interfaces/      # Interfaces de repositórios e serviços
│   └── services/        # Implementações da regra de negócio

├── infra/               # Camada de infraestrutura
│   ├── database/        # Implementação do repositório com Prisma
│   ├── create_slug/            # Gerador de slugs
│   └── dependency_injection/     # Injeção de dependências

├── presentation/        # Camada de apresentação
│   ├── frontend/        # Código React (UI)
│   ├── routes/          # Rotas do Express
│   └── server.ts        # Inicialização do servidor Express

```

---

## ⚙️ Requisitos

- Node.js
- MySQL

---

## 🔐 Configuração `.env`

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

> ⚠️ Substitua com suas credenciais reais do banco.

---

## 📦 Instalação e Uso

```bash
# Instale as dependências
npm install

# Gere o client do Prisma
npx prisma generate --schema=src/infra/database/prisma/

# Rode as migrations (opcional, se quiser criar as tabelas)
npx prisma migrate dev --name init --schema=src/infra/database/prisma/

# Build do frontend + start do servidor
npm run dev
```

---

## 💡 Observações

- As URLs encurtadas são geradas automaticamente e redirecionam corretamente via `/slug`.
- Toda vez que o link encurtado é acessado, o contador de cliques é atualizado.
- Ao clicar no link encurtado na interface, a lista é atualizada automaticamente.

---

