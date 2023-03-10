import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/db/entities/user.entity";
import { Repository } from "typeorm";
import { SignUpDto } from "./dtos/signup.dto";

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService
	) {}


  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({where: {username: username}})
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

	async login(user: {username: string, id: number}) {
    const payload = { username: user.username, sub: user.id };
		delete user.id
    return this.jwtService.sign(payload, { secret: '' + this.configService.get('JWT_SECRET') })
  }
	
	async signup(dto: SignUpDto) {
		// todo : refaire dans un décorateur pour password2
		if(dto.password == dto.password2) {
			delete dto.password2
			const newUser = this.userRepository.create(dto)
			await this.userRepository.save(newUser)
			delete newUser.password
			delete newUser.id
			return { token: await this.login(newUser), user: newUser }
		}
	}
}