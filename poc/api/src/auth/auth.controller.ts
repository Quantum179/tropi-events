import { Controller, Post, Request, UseGuards, Body } from "@nestjs/common";
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

	@UseGuards(JwtAuthGuard)
	@Post('login')
	login(@Request() req) {
		return this.authService.login(req.user);
	}
}