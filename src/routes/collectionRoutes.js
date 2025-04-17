import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de colecoes
// GET /colecoes - Listar todos as colecoes
 collectionRouter.get("/", CollectionController.getAllCollections);


// // GET /colecoes/:id - Obter colecoes pelo ID
// collectionRouter.get("/:id", CollectionController.getCollectionsById);

// // // POST /colecoes - Criar um novo Collections
// collectionRouter.post("/", CollectionCntroller.createCollections);

// // // PUT /colecoes/:id - Atualizar um Collections
// collectionRouter.put("/:id", CollectionCntroller.updateCollections);

// // // DELETE /colecoes/:id - Remover um Collections
//  collectionRouter.delete("/:id", CollectionCntroller.deleteCollections);

export default collectionRouter;
