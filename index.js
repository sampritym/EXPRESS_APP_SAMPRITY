import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen(port, () => {
  console.log(`App is listening on port :${port}`);
});
