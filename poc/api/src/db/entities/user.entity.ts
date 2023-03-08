import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./event.entity";

export enum TypeUser {
	Member,
	Orga,
	Artist
}

@Entity()
export class User {
	@PrimaryGeneratedColumn({type: 'bigint', name: 'user_id'})
  id: number;

	@Column({nullable: false, default: TypeUser.Member})
	type: number

  @Column({nullable: false, default: '', unique: true})
  username: string;

  @Column({name: 'email_address', nullable: false, default: '', unique: true})
  email: string;

	@Column({name: 'phone_number', nullable: false, default: ''})
	phoneNumber: string

  @Column({nullable: false, default: '',})
  password: string;

	@OneToMany(() => Event, (event) => event.orga)
	events: Event[]
}