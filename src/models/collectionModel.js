import prisma from "../../prisma/prisma.js";

class CollectionModel {
  // Obter todos as coleções
  async findAll() {
    const colecoes = await prisma.collection.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(colecoes);

    return colecoes;
  }

  // Obter uma colecao pelo ID
  async findById(id) {
    const colecoes = await prisma.collection.findUnique({
      where: {
        id: Number(id),
      },
    });

    return colecoes;
  }

  // Criar um nova colecao
  async create(
    title,
    description,
    episodes,
    releaseYear,
    studio,
    genres,
    rating,
    imageUrl
  ) {
    const newPersonagem = await prisma.collection.create({
      data: {
        title,
        description,
        episodes,
        releaseYear,
        studio,
        genres,
        rating,
        imageUrl,
      },
    });

    return newPersonagem;
  }

  // Atualizar um personagem
  async update(
    id,
    title,
    description,
    episodes,
    releaseYear,
    studio,
    genres,
    rating,
    imageUrl
  ) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    // Atualize o personagem existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (episodes !== undefined) {
      data.episodes = episodes;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
    }
    if (studio !== undefined) {
      data.studio = studio;
    }
    if (genres !== undefined) {
      data.genres = genres;
    }
    if (rating !== undefined) {
      data.rating = rating;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const personagemUpdated = await prisma.personagem.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return personagemUpdated;
  }

  // Remover um personagem
  async delete(id) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    await prisma.personagem.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CollectionModel();
