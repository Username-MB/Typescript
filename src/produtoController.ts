import { Request,Response } from "express";
import { produtoModel } from "./produtoModel";

const ProdutoModel = new produtoModel();

export const getProdutos = async (req: Request, res:Response )=>{
    
}