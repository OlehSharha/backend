
import { Places } from "./models/Places";
import {dbInit} from '../src/utils/initDB'
const { sequelize } = require('./models');

(async () => {
	dbInit();

	try {
	  await Places.sync({ alter: true });

	} catch (error: any) {
	  throw new Error(error.message);
	}

	console.log('synced!');
  })()