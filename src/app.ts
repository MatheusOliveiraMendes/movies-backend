import express from 'express';
import cors from 'cors';
import path from 'path';
import moviesRouter from './routes/movies';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));
app.use('/api/movies', moviesRouter);

export default app;
