import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/db/entities/user.entity";
import { Repository } from "typeorm";
import { CreateEditUserDto } from "./dtos/createEditUser.dto";


@Injectable()
export class UserService {
	constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}


	findAll() {
		return this.userRepository.find()
	}

	findUserByID(id: number) {
		return this.userRepository.findOne({where: {id: id}});
	}
}