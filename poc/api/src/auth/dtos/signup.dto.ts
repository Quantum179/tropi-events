import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Length, MinLength } from "class-validator"

export class SignUpDto {
	@IsString()
	@IsNotEmpty()
	username: string
	
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