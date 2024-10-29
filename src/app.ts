import express from 'express';
import bodyParser from 'body-parser';
import produtoRoutes from './produtoRoutes'
import { pool } from './database';
import path from 'path';

const app = express();
//const PORT = process.env.PORT || 3000
const PORT = 3000

app.listen(PORT, ()=>{console.log(`Servidor rodando na porta ${PORT}`)})
app.use('/api',produtoRoutes)