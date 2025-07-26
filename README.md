# 🔗 Encurtador de URLs

Este é um projeto Fullstack desenvolvido como parte de um desafio técnico. A proposta é criar uma aplicação que permita encurtar URLs, redirecionar os acessos e contabilizar o número de cliques em cada link encurtado.

---

## ✨ Funcionalidades

- Encurtar qualquer URL válida.
- Redirecionar a URL curta para a original.
- Contar e exibir a quantidade de acessos.
- API REST construída com boas práticas.
- Frontend simples em React + TailwindCSS para interação.

---

## ⚙️ Tecnologias utilizadas

### Backend
- [Node.js 20+](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL (via Docker)](https://hub.docker.com/_/mysql)
- [TSX](https://github.com/esbuild-kit/tsx) para rodar código TypeScript diretamente

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

---

## 🧠 Arquitetura adotada

Mesmo sendo um projeto simples, foi aplicada uma separação em camadas visando a manutenção e a escalabilidade futura.

Essa estrutura permite seguir princípios como:
- Separação de responsabilidades
- Testabilidade
- Independência do framework
- Baixo acoplamento entre camadas
