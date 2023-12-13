![Alt text](logo.png)

# Desafio UneCont

## Dados do desenvolvedor:

- **Nome** : Luiz Felipe de Souza Barbosa
- **Email** : luizfelipesouza1998@outlook.com

### Tecnologias:

- Linguagens: TypeScript, JavaScript
- Front-end: React.JS, Next.JS, HTML, CSS, BootStrap, TailWind, Chakra.UI, etc.
- Back-end: Node.JS, Fastify, Express, Prisma
- Testes: Cypress, Vite, React Testing Library, Jest
- Padrões: TDD, SOLID, MVC, MVVM
- Outros: Linux, Git, GitHub, Docker, noções de UI/UX

### Redes

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lf-souza98/)

[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5522998906871)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Luiz-F-Souza)

---

## Sobre o desafio

Resolvi criar 02 versões para este desafio, a **Principal** e a **Secundária**.

A versão **Principal** Segue todos os requisitos solicitados, utilizando apenas (`HTML`, `Bootstrap & CSS`, `Vanilla JS` + `ChartJS` como lib de gráficos).

Já a versão **Secundária** foi desenvolvida em `Next JS` com `Typescript`. Esta foi feita como um extra :).

Ambas versões usam uma pequena api que criei para servir os dados e ficar um pouco mais próxima da realidade (afinal, raramente vamos construir algo que não faça consultas a um api..).

Tentei criar um visual um pouco mais moderno, inspirado no do banco inter, mas sei que tem muita coisa que daria para ser melhor.

Existem algumas features que seriam interessantes adicionar a este projeto, mas que devido ao tempo deixei para uma próxima, como por exemplo:

- Habilitar a pesquisa na search bar para filtrar por nome, status, mês e valor diretamente.
- Informar ao usuário quais filtros estão sendo aplicados ao fechar o modal.
- Adicionar paginação na listagem de notas
- Adicionar Skeleton em todas partes dinâmicas
- etc..

### Repositórios:

- **Principal**: https://github.com/Luiz-F-Souza/une_cont/tree/master/main
- **Secundário**: https://github.com/Luiz-F-Souza/une_cont/tree/master/nextjs
- **Mini API**: https://github.com/Luiz-F-Souza/une_cont/tree/master/api

### Como rodar o projeto:

Existem 02 versões disponíveis para serem executadas:

- Versão principal (HTML, Bootstrap & CSS + Vanilla JS): http://146.190.40.76/
- Versão Next.JS + Typescript: https://unecont-desafio.vercel.app/dashboard

Se desejar rodar localmente:

- clone o repositório: `git clone git@github.com:Luiz-F-Souza/une_cont.git`
- abra a pasta `main` no `vscode` (com a extensão liveServer)
- abra o arquivo `index.html` e pressione o ícone `Go Live` no canto inferior esquerdo da tela.

- Se desejar rodar o arquivo em nextjs basta abrir a pasta `nextjs`
- Abrir no vscode
- No terminal digite `npm i` e aguarde
- digite `npm run dev`

- Se desejar rodar a api basta abrir a pasta `api`
- Crie um arquivo chamado `.env` na raiz contendo

```
    NODE_ENV=dev
    PORT=8888
    DATABASE_URL="postgresql://admin:admin@localhost:5432/une_cont?schema=public"
```

- Digitar `npm i` e aguradar
- Digitar `docker compose up --build` em um terminal
- Abrir outra janela de terminal (canto superir direito das abas de terminal)
- Digitar `prisma migrate dev` e aguardar
- Digitar `npm run dev` e usar com a rota `http://localhost:8888` (pode adicionar `/all-invoices` ou `/year-summary` ao final)

### OBS:

O projeto principal e a mini api estão hospedados na Digital Ocean.
Já o projeto secundário está hospedada na vercel.
Todos estão rodando no plano gratuíto, podem estar mais lentos que o normal.

Não ativei o SSL para o projeto princial e para a api pois teria que comprar um domínio, se não me engano, em algumas requisições o browser pode acabar barrando por ser http.

### Recado final:

Espero que curtam minha codagem e que eu tenha a oportunidade de integrar a equipe, tentei demostrar minha empolgação com a oportunidade fazendo o máximo que pude. Precisei relembrar um pouco de Bootstrap e vanilla JS, mas creio que tenha conseguido entregar algo bom e ressalto que estou sempre com garra para aprender, isso não me assusta.
