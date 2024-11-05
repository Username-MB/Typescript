import express from "express";
import bodyParser from "body-parser";
import ProdutoRoutes from "./ProdutoRoutes";
import { pool } from "./database";
import path from "path";
import { error } from "console";

const app = express();
//const PORT = process.env.PORT || 3000;

const PORT = 3000;
app.use("/api", ProdutoRoutes);

//CONFIGURAR O MIDDLEWARE PARA ARQUIVOS ESTATICOS
app.use(express.static(path.join(__dirname, "views")));
app.use(bodyParser.json());
app.use("/api", ProdutoRoutes);
//ROTA PARA SERVIR O ARQUIVO ESTATICO
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
pool
  .getConnection()
  .then(() => {
    console.log("Conectado ao banco com sucesso");
    app.listen(PORT, () => {
      console.log(`localhost:${PORT}/api/produtos`);
    });
  })
  .catch((error: any) => {
    console.error("Erro ao conectar ao banco");
  });
