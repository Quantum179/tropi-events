import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Event {
	@PrimaryGeneratedColumn({type: 'bigint', name: 'event_id'})
  id: number;

	@ManyToOne(() => User, (user) => user.events)
	orga: User

  @Column({nullable: false, default: ''})
  name: string;

	@Column({nullable: false, default: ''})
	startDate: Date

  @Column({nullable: false, default: ''})
	endDate: Date

  @Column({nullable: false, default: ''})
	location: string
	
	@Column({nullable: false, default: ''})
	description: string
}