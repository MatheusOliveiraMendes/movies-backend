import { Request, Response, Router } from 'express';
import movies from '../data/movies.json';
import { Movie } from '../types/Movie';

const router = Router();
const movieList: Movie[] = movies;

router.get('/', (req: Request, res: Response) => {
  const { search, genre } = req.query;

  let results = movieList;

  if (search && typeof search === 'string') {
    results = results.filter(movie =>
      movie.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (genre && typeof genre === 'string') {
    results = results.filter(movie =>
      movie.genres.includes(genre.toLowerCase())
    );
  }

  res.json(results);
});

router.get('/:id', (req: Request, res: Response) => {
  const movie = movieList.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ error: 'Movie not found' });
  res.json(movie);
});

export default router;
