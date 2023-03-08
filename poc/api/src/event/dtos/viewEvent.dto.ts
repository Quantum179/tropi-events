import { User } from "src/db/entities/user.entity"
import { ViewUserDto } from "src/user/dtos/viewUser.dto"

export class ViewEventDto {
	name: string
	orga: ViewUserDto
	startDate: Date
	endDate: Date
	location: string
	description: string

	constructor(source: Partial<ViewEventDto>) {
		Object.assign(this, source);
	}
}