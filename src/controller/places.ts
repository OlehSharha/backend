import * as placeService from "../services/places";
import { Request, Response } from "express";


export const getAll = async (req: Request, res: Response) => {
	const places = await placeService.getAllPlace();

	res.send(places);

}

export const addPlace = async (req: Request, res: Response) => {
	const {name, description, latitude, longitude} = req.body;

	const newPlace = await placeService.addPlace ({name, description, latitude, longitude})

	res.send(newPlace);

}

