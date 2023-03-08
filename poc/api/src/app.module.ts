import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { OrgaModule } from './orga/orga.module';
import { AuthController } from './auth/auth.controller';
import { DBService } from './db/db.service';
import { AuthService } from './auth/auth.service';
import { EventController } from './event/event.controller';
import { OrgaController } from './orga/orga.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './db/entities';
import { User } from './db/entities/user.entity';
import { Event } from './db/entities/event.entity';
import { EventService } from './event/event.service';

@Module({
  imports: [
		ConfigModule.forRoot({ isGlobal: true }), 
		TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: '' + configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
		TypeOrmModule.forFeature([User]),
		TypeOrmModule.forFeature([Event]),
		UserModule, AuthModule, OrgaModule, EventModule
	],
  controllers: [AuthController, EventController, OrgaController],
  providers: [AuthService, EventService, DBService],
})
export class AppModule {}