import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/db/entities/user.entity";
import { Repository } from "typeorm";
import { LoginDto } from "./dtos/login.dto";
import { SignUpDto } from "./dtos/signup.dto";

@Injectable()
export class AuthService {
	constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
		private readonly jwtService: JwtService) {}


  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({where: {username: username}});
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

	async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
	
	signup(dto: SignUpDto) {
		// todo : refaire dans un décorateur pour password2
		if(dto.password == dto.password2) {
			delete dto.password2
			const newUser = this.userRepository.create(dto)
			return this.userRepository.save(newUser)
		}
	}
}