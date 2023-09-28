import { Exclude, Expose, Transform } from 'class-transformer';
import { Entity, Column } from 'typeorm';

@Entity()
export class RoleEntity {
  id: number;
  name: string;

  constructor(partial: Partial<RoleEntity>){
    Object.assign(this, partial);
  }
}
