import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, Length, MinLength } from "class-validator"
import { TypeUser } from "src/db/entities/user.entity"

export class SignUpDto {
	@IsString()
	@IsNotEmpty()
	username: string

	@IsEnum(TypeUser)
	type: TypeUser
	
	@IsEmail()
	@IsNotEmpty()
	email: string

	//@IsPhoneNumber()
	@IsNotEmpty()
	@Length(10)
	phoneNumber: string

	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	password: string

	@IsString()
	@IsNotEmpty()
	@MinLength(8)
	password2: string
}