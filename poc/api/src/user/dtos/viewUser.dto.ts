
export class ViewUserDto {
	username: string
	type: number

	constructor(source: Partial<ViewUserDto>) {
		Object.assign(this, source);
	}
}