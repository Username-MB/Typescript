import express from 'express';
import bodyParser from 'body-parser';
import ProdutoRoutes from './ProdutoRoutes';
import { pool } from './database';
import path from 'path';

const app = express();