import express from 'express';

import * as placeController from '../controller/places';

export const router = express.Router();

router.get('/', placeController.getAll);
router.post('/', placeController.addPlace);
router.delete('/', placeController.removePlace)
