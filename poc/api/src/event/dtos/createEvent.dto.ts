import { IsDateString, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateEventDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	name: string

	@IsDateString()
	@IsNotEmpty()
	startDate: Date

	@IsDateString()
	@IsNotEmpty()
	endDate: Date

	@IsString()
	@IsNotEmpty()
	location: string
	
	@IsString()
	description: string
}