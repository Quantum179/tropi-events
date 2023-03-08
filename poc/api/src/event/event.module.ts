import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBService } from 'src/db/db.service';
import { Event } from 'src/db/entities/event.entity';
import { EventService } from './event.service';

@Module({
	imports: [TypeOrmModule.forFeature([Event])],
	providers: [EventService, DBService]
})
export class EventModule {}
