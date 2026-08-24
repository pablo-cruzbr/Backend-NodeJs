import express from 'express';
import router from './route';

const app = express();
const port = 8081;

app.use(router);

app.listen(port, () => console.log(`Rodando com Express (TypeScript) na porta: ${port}`));
