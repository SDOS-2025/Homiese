import express from 'express';
import cors from 'cors'
import {PORT,  ORIGIN} from './config/env.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}))

app.get('/change', (req, res) => {
  res.send("Hello from the backend");
})

app.post('/change', (req, res) => {
  console.log(req.body);
})


app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
})