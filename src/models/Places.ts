import { AllowNull, Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
	tableName: 'places',
	createdAt: false,
	updatedAt: false,
})

export class Places extends Model {
	@AllowNull(false)
	@Column({
		type:DataType.STRING}
		)
	name: string;
	@AllowNull(false)
	@Column({
		type:DataType.STRING}
		)
	description: string;
	@AllowNull(false)
	@Column({
		type:DataType.FLOAT}
		)
	latitude: number;
	@AllowNull(false)
	@Column({
		type:DataType.FLOAT}
		)
	longitude: number;
}
