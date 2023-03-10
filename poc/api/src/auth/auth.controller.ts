import { Controller, Post, Request, UseGuards, Body, HttpCode } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dtos/login.dto";
import { SignUpDto } from "./dtos/signup.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('signup')
	signup(@Body() dto: SignUpDto) {
		return this.authService.signup(dto)
	}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	@HttpCode(200)
	async login(@Request() req) {
		const token = await this.authService.login(req.user)
		const user = req.user
		delete user.id
		delete user.password
		return { token, user }
	}
}