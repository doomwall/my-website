import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true, // allow cookies if you use them
}));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/api/health', (req, res) => {
  console.log('HEALTH CHECK HIT');
  res.json({ status: 'ok' });
});

export default app;