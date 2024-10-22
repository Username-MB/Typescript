import { pool } from './../src/database'

export interface Produto{
    id?:number;
    nome:string;
    preco:number;
}

export class produtoModel{
    async getAll(): Promise<Produto[]>{
        const [rows] = await pool.query('select * from produtos');
        return rows as Produto[]
    }
    //create()
    //update()
    //delete()
}