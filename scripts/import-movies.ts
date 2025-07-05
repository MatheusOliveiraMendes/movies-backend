import { PrismaClient } from '../src/generated/prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function run() {
  try {
    const filePath = path.join(__dirname, '..', 'data', 'movies.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const movies = JSON.parse(data);

    for (const movie of movies) {
      await prisma.movie.upsert({
        where: { id: movie.id },
        update: {},
        create: {
          id: movie.id,
          key: movie.key,
          name: movie.name,
          description: movie.description,
          genres: movie.genres,
          rate: parseFloat(movie.rate),
          length: movie.length,
          img: movie.img,
        },
      });
    }

    console.log('✅ Dados importados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao inserir filmes:', error);
  } finally {
    await prisma.$disconnect();
  }
}

run();