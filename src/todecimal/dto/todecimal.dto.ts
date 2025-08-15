import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsDefined,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';

class Binary {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Binary number to convert',
    example: 1101,
    required: true,
  })
  binary: number;
}

export class ToDecimalDto {
  @IsDefined()
  @ValidateNested()
  @Type(() => Binary)
  @ApiProperty({
    type: () => Binary,
  })
  data: Binary;
}
