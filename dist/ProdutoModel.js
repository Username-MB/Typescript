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
exports.ProdutoModel = void 0;
const database_1 = require("./../src/database");
class ProdutoModel {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield database_1.pool.query('SELECT * FROM produtos');
            return rows;
        });
    }
    //CREATE
    create(produto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO produtos (nome, preco) VALUES(?, ? )', [produto.nome, produto.preco]);
        });
    }
    // UPDATE
    update(id, produto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [produto.nome, produto.preco, id]);
        });
    }
    // DELETE
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('DELETE FROM produtos WHERE id = ? ', [id]);
        });
    }
}
exports.ProdutoModel = ProdutoModel;
