import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/db/entities/user.entity";
import { Repository } from "typeorm";
import { LoginDto } from "./dtos/login.dto";
import { SignUpDto } from "./dtos/signup.dto";

@Injectable()
export class AuthService {
	constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

	signup(dto: SignUpDto) {
		// todo : refaire dans un décorateur pour password2
		if(dto.password == dto.password2) {
			delete dto.password2
			const newUser = this.userRepository.create(dto)
			return this.userRepository.save(newUser)
		}

		return "thefuck"
	}

	signin(dto: LoginDto) {
		const user = this.userRepository.findOne({where: {username: dto.username, password: dto.password}})
		return user != null
	}
}