import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ViewUserDto } from "src/user/dtos/viewUser.dto";
import { CreateEditEventDto } from "./dtos/createEditEvent.dto";
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
	postEvent(@Body() dto: CreateEditEventDto) {
		
	}

	@Patch(':id')
	patchEvent(@Param('id') id: number, @Body() dto: CreateEditEventDto) {

	}

	@Delete(':id')
	deleteEvent(@Param('id') id: number) {
		this.eventService.deleteEvent(id)
	}
}