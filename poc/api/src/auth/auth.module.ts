import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBService } from 'src/db/db.service';
import { User } from 'src/db/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	imports: [TypeOrmModule.forFeature([User]),],
	controllers: [AuthController],
	providers: [AuthService, DBService]
})
export class AuthModule {}
