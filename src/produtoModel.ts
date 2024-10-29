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



   //create
   async create( produto: Produto): Promise <void>{
    await pool.query('INSERT INTO produtos (nome, preco) VALUES(?, ? )',
    [produto.nome, produto.preco]);
   }

   // update()
   async update(id: number, produto:Produto): Promise<void>{
    await pool.query('UPDATE produtos SET nome = ?, preco = ? where id = ?',
    [produto.nome, produto.preco, id]);
   }
   // delete()
   async delete(id:Number):Promise<void>{
    await pool.query('DELETE FROM produtos WHERE id = ?',[id]);
   }
}