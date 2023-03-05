import { IsNotEmpty, IsString } from "class-validator"

export class CreateEditOrgaDto {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsString()
	@IsNotEmpty()
	pseudo: string

	@IsString()
	@IsNotEmpty()
	password: string
}