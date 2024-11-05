import { pool } from './../src/database';


export interface Produto{

    id?: number;
    nome: string;
    preco: number;
}

export class ProdutoModel{

   async getAll(): Promise<Produto[]> {
        const [rows] = await pool.query('SELECT * FROM produtos');
        return rows as Produto[];
   }



   //CREATE

   async create( produto: Produto): Promise <void>{
    await pool.query('INSERT INTO produtos (nome, preco) VALUES(?, ? )', [produto.nome, produto.preco]);    
   }

   // UPDATE
   async update(id: number, produto: Produto): Promise<void>{
    await pool.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [produto.nome, produto.preco, id]);
   }

   // DELETE
   async delete(id: number): Promise<void>{
    await pool.query('DELETE FROM produtos WHERE id = ? ', [id]);
   }
}