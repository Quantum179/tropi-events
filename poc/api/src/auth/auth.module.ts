import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBService } from 'src/db/db.service';
import { User } from 'src/db/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [TypeOrmModule.forFeature([User]), 
		PassportModule, 
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
        };
      },
      inject: [ConfigService],
    }),
	],
	controllers: [AuthController],
	providers: [ConfigService, AuthService, DBService, LocalStrategy, JwtStrategy],
	exports: [AuthService]
})
export class AuthModule {}
