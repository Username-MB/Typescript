import { Router } from 'express';
import { getProdutos } from './../src/ProdutoController';

const router = Router();

router.get('/produtos', getProdutos);


export default router;