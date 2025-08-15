/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsDefined,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';

class Decimal {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Number to convert',
    example: 13,
    required: true,
  })
  decimal: number;
}

export class ToBinaryDto {
  @IsDefined()
  @ValidateNested()
  @Type(() => Decimal)
  @ApiProperty({
    description: 'Data to convert',
    required: true,
    type: () => Decimal,
  })
  data: Decimal;
}
