"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduto = exports.updateProduto = exports.createProduto = exports.getProdutos = void 0;
const ProdutoModel_1 = require("./../src/ProdutoModel");
const produtoModel = new ProdutoModel_1.ProdutoModel();
const getProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produtos = yield produtoModel.getAll();
        res.json(produtos);
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos" });
    }
});
exports.getProdutos = getProdutos;
const createProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, preco } = req.body;
        yield produtoModel.create({ nome, preco });
        res.status(201).json({ message: 'Produto criado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar produto' });
    }
});
exports.createProduto = createProduto;
const updateProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nome, preco } = req.body;
        yield produtoModel.update(Number(id), { nome, preco });
        res.json({ message: 'Produto atualizado com sucesso ' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
});
exports.updateProduto = updateProduto;
const deleteProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield produtoModel.delete(Number(id));
        res.json({ message: 'Produto deletado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao deletar produto' });
    }
});
exports.deleteProduto = deleteProduto;
