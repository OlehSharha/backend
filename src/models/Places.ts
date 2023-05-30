import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({
	tableName: 'places',
	createdAt: false,
	updatedAt: false,
})

export class Places extends Model {

	@Column( {
		type: DataType.STRING
	})
	name: string;

	@Column( {
		type: DataType.STRING
	})
	description: string;

	@Column( {
		type: DataType.STRING
	})
	latitude: string;

	@Column( {
		type: DataType.STRING
	})
	longtitude: string;

}