import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEditEventDto } from "./dtos/createEditEvent.dto";
import { ViewEventDto } from "./dtos/ViewEvent.dto";

@Controller('events')
export class EventController {
	@Get()
	getEvents(): ViewEventDto[] {
		return [new ViewEventDto(), new ViewEventDto()]
	}

	@Get(':id')
	getEvent(@Param('id') id: number): ViewEventDto {
		return new ViewEventDto()
	}

	@Post()
	postEvent(@Body() dto: CreateEditEventDto) {
		
	}

	@Patch(':id')
	patchEvent(@Param('id') id: number, @Body() dto: CreateEditEventDto) {

	}

	@Delete(':id')
	deleteEvent(@Param('id') id: number) {

	}
}