import { ApiProperty } from '@nestjs/swagger';
import { Note } from '../entities/node.entity';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty({
    description: 'The age of a cat',
    minimum: 1,
    default: 1,
  })
  age: number;

  @ApiProperty()
  breed: string;

  @ApiProperty({ type: [String] })
  names: string[];

  @ApiProperty({ type: () => Note })
  node: Note;
}
