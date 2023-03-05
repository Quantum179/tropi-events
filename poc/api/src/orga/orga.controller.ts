import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEditOrgaDto } from "./dtos/createEditOrga.dto";
import { ViewOrgaDto } from "./dtos/viewOrga.dto";

@Controller('orgas')
export class OrgaController {

	@Get()
	getOrgas(): ViewOrgaDto[] {
		return []
	}

	@Get(':id')
	getOrga(@Param('id') id: number): ViewOrgaDto[] {
		return []
	}

	@Post()
	postOrga(@Body() dto: CreateEditOrgaDto): ViewOrgaDto[] {
		return []
	}

	@Patch(':id')
	patchOrga(@Param('id') id: number, @Body() dto: CreateEditOrgaDto) {

	}

	@Delete(':id')
	deleteOrga(@Param('id') id: number) {
		return []
	}
}