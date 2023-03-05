import { Module } from '@nestjs/common';
import { DBService } from 'src/db/db.service';

@Module({
	providers: [DBService]
})
export class EventModule {}
