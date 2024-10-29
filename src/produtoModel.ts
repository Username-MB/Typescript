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



   //create()
   // update()
   // delete()
}