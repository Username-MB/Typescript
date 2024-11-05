import { Router } from 'express';
import { createProduto, deleteProduto, getProdutos, updateProduto } from './../src/ProdutoController';

const router = Router();

router.get('/produtos', getProdutos);
router.post('/produtos', createProduto);
router.put('/produtos/:id', updateProduto);
router.delete('/produtos/:id', deleteProduto);


export default router;