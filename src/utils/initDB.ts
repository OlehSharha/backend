import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Places } from '../../../backend/src/models/Places';



dotenv.config();

const {PGDATABASE, PGUSER, PGPASSWORD} = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@ep-lingering-mountain-854528.eu-central-1.aws.neon.tech/${PGDATABASE}`;

export const dbInit = () => {
	return new Sequelize(URL, {
	  models: [Places],
	  dialectOptions: {
		ssl: {
		  rejectUnauthorized: true,
		}
	  }
	})
  }