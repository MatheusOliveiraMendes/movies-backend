import { Request, Response, Router } from 'express';
import { PrismaClient } from '../generated/prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/movies?search=...&genre=...
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search, genre } = req.query;

    let where: any = {};

    if (search && typeof search === 'string') {
      where.name = { contains: search, mode: 'insensitive' };
    }

    if (genre && typeof genre === 'string') {
      where.genres = { has: genre.toLowerCase() };
    }

    const movies = await prisma.movie.findMany({
      where,
      orderBy: { id: 'asc' },
    });

    res.json(movies);
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

// GET /api/movies/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

    const movie = await prisma.movie.findUnique({
      where: { id },
    });

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    console.error('Erro ao buscar filme por ID:', error);
    res.status(500).json({ error: 'Erro ao buscar filme' });
  }
});

export default router;