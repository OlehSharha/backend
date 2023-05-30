import { Places } from "../models/Places"


export const getAllPlace = async () => {
	return Places.findAll();
};

export const addPlace = async (date: any)  => {
	return Places.create({
		...date,
	})
}

export const deletePlace = async (placeId: any) => {
	return Places.destroy({
		where: {
			id: placeId,
		}
	})
}