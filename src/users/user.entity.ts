import { Exclude, Expose, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RoleEntity } from './role.entity';

@Entity()
export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Transform(({value}) => value.name )
  role: RoleEntity 

  @Exclude()
  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

}
