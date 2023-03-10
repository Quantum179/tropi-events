import { IsDateString, IsOptional, IsString, MinLength } from "class-validator"

export default class EditEventDto {
	@IsString()
	@IsOptional()
	@MinLength(5)
	name: string

	@IsDateString()
	@IsOptional()
	startDate: Date

	@IsDateString()
	@IsOptional()
	endDate: Date

	@IsString()
	@IsOptional()
	location: string
	
	@IsString()
	@IsOptional()
	description: string
}