import express from 'express';
import cors from 'cors';
import { dbInit } from '../../backend/src/utils/initDB';
import { router as placesRouter } from './routes/places';


// Create an instance of the express application
const app = express();

dbInit();

app.use(cors());

app.use('/places', express.json(), placesRouter);

app.listen(3222, () => {
  console.log('Server is running on port 3222');
});