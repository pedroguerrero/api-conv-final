import { ApiProperty } from '@nestjs/swagger';

class DecimalValue {
  @ApiProperty({
    type: 'number',
    description: 'Decimal value converted from binary',
    example: 13,
  })
  value: number;
}

export class ToDecimalResponse {
  @ApiProperty({
    type: () => DecimalValue,
  })
  data: DecimalValue;
}
