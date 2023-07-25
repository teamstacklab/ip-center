import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEventDto {
  name: string;
  initialDate: Date;
  finalDate: Date;
}

export class UpdateEventDto {
  @IsOptional() @IsNotEmpty() name: string;
  @IsOptional() @IsNotEmpty() initialDate: Date;
  @IsOptional() @IsNotEmpty() finalDate: Date;
}
