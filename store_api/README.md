server configuration NODE/NEXT.JS

1 - curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -

2 - sudo apt install nodejs -y

3 - sudo npm install -g npm@9.5.0 --Atualizando para a versão mais 9

4 - cd <pasta-repositorio-git>

5 - npx create-next-app .

6 - npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


