import { ApiProperty } from '@nestjs/swagger';

class BinaryValue {
  @ApiProperty({
    type: 'number',
    description: 'Binary value converted from decimal',
    example: 1101,
  })
  value: number;
}

export class ToBinaryResponse {
  @ApiProperty({
    type: () => BinaryValue,
  })
  data: BinaryValue;
}
