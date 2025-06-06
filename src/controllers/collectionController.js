import  CollectionModel from "../models/collectionModel.js";

class CollectionController {
  // GET /colecoes
  async getAllCollections(req, res) {
    try {
      const colecoes = await CollectionModel.findAll();
      res.json(colecoes);
    } catch (error) {
      console.error("Erro ao buscar coleções:", error);
      res.status(500).json({ error: "Erro ao buscar coleções" });
    }
  }

  // GET /api/personagens/:id
  async getPersonagemById(req, res) {
    try {
      const { id } = req.params;

      const personagem = await PersonagemModel.findById(id);

      if (!personagem) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(personagem);
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      res.status(500).json({ error: "Erro ao buscar personagem" });
    }
  }

  // POST /colecoes
  async createCollection(req, res) {
    try {
      // Validação básica
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      // Verifica se todos os campos de colecoes foram fornecidos
      if (!name || !releaseYear) {
        return res
          .status(400)
          .json({ error: "os campos nome e ano de lançamento são obrigátorios" });
      }

      // Criar o nova colecao
      const newCollection = await CollectionModel.create(
        name,
        description,
        releaseYear,
      );

      if (!newCollection) {
        return res.status(400).json({ error: "Erro ao criar coleção" });
      }

      res.status(201).json(newCollection);
    } catch (error) {
      console.error("Erro ao criar coleção:", error);
      res.status(500).json({ error: "Erro ao criar coleção" });
    }
  }

  // PUT /colecoes/:id
  async updateCollection(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        releaseYear,
      } = req.body;

      // Atualizar a colecao
      const updatedCollection = await CollectionModel.update(
        name,
        description,
        releaseYear,
      );

      if (!updatedCollection) {
        return res.status(404).json({ error: "colecao não encontrada" });
      }

      res.json(updatedCollection);
    } catch (error) {
      console.error("Erro ao atualizar colecao:", error);
      res.status(500).json({ error: "Erro ao atualizar colecao" });
    }
  }

  // DELETE /api/personagens/:id
  async deletePersonagem(req, res) {
    try {
      const { id } = req.params;

      // Remover o personagem
      const result = await PersonagemModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover personagem:", error);
      res.status(500).json({ error: "Erro ao remover personagem" });
    }
  }
}

export default new CollectionController();
