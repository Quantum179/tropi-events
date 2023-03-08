import { Controller, Get, Request } from "@nestjs/common";
import { ViewUserDto } from "./dtos/viewUser.dto";
import { UserService } from "./user.service"


@Controller('users')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async findUsers(@Request() req) {
		return req.user
		// let users = await this.userService.findAll()
		// return users.map((x) => new ViewUserDto(x))
	}
}