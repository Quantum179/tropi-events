import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "src/db/entities/event.entity";
import { Repository } from "typeorm";
import { CreateEditEventDto } from "./dtos/createEditEvent.dto";

@Injectable()
export class EventService {
	constructor(@InjectRepository(Event) private readonly eventRepository: Repository<Event>) {}

	createEvent(dto: CreateEditEventDto) {
		const event = this.eventRepository.create(dto)
		return this.eventRepository.save(event)
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