import { Controller, Post } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { SignUpDto } from "./dtos/signup.dto";

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('signup')
	signup(@Body() dto: SignUpDto) {
		return this.authService.signup(dto)
	}

	@Post('login')
	login(@Body() dto: LoginDto) {
		this.authService.signin(dto)
	}
}