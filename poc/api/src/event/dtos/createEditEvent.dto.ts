import { IsDate, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateEditEventDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	name: string

	//@IsExistingOrga()
	@IsNotEmpty()
	idOrga: number

	@IsDate()
	@IsNotEmpty()
	startDate: Date

	@IsDate()
	@IsNotEmpty()
	endDate: Date

	@IsString()
	@IsNotEmpty()
	location: string
	
	@IsString()
	description: string
}