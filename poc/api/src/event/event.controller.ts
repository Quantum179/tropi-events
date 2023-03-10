import { Body, Request, Controller, Delete, Get, Param, Patch, Post, UseGuards, Headers } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ViewUserDto } from "src/user/dtos/viewUser.dto";
import { CreateEventDto } from "./dtos/createEvent.dto";
import EditEventDto from "./dtos/editEvent.dto";
import { ViewEventDto } from "./dtos/ViewEvent.dto";
import { EventService } from "./event.service";

@Controller('events')
export class EventController {
	constructor(private eventService: EventService) {}

	@Get()
	async getEvents() {
		let events = await this.eventService.findAllEvents()
		return events.map((x) => new ViewEventDto(x))
	}

	@Get(':id')
	async getEvent(@Param('id') id: number) {
		return await this.eventService.findEventByID(id)
	}

	@Post()
	@UseGuards(JwtAuthGuard)
	async postEvent(@Body() dto: CreateEventDto) {
		const event = await this.eventService.createEvent(dto)
		return { event }
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	async patchEvent(@Param('id') id: number, @Body() dto: EditEventDto) {
		const updatedEvent = await this.eventService.editEvent(id, dto)
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	deleteEvent(@Param('id') id: number) {
		this.eventService.deleteEvent(id)
	}
}