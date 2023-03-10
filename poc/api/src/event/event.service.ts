import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "src/db/entities/event.entity";
import { Repository } from "typeorm";
import { CreateEventDto } from "./dtos/createEvent.dto";
import EditEventDto from "./dtos/editEvent.dto";

@Injectable()
export class EventService {
	constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

	async createEvent(dto: CreateEventDto) {
		const event = this.eventRepository.create(dto)
		await this.eventRepository.save(event)
		return event
	}

	async editEvent(id: number, dto: EditEventDto) {
		const event = await this.eventRepository.update(id, dto)
		return event
	}

	async findAllEvents() {
		return this.eventRepository.find()
	}

	async findEventByID(id: number) {
		return this.eventRepository.findOneBy({id: id})
	}

	deleteEvent(id: number) {
		return this.eventRepository.delete(id)
	}
}