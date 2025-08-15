import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ToBinaryDto } from './dto/tobinary.dto';
import { TobinaryService } from './services/tobinary.service';
import { ToBinaryResponse } from './responses/tobinary.response';

@ApiTags('tobinary')
@Controller('tobinary')
export class TobinaryController {
  constructor(private readonly toBinaryService: TobinaryService) {}

  @ApiCreatedResponse({
    type: ToBinaryResponse,
  })
  @Post()
  convertToBinary(@Body() body: ToBinaryDto): ToBinaryResponse {
    const {
      data: { decimal },
    } = body;
    const binary = this.toBinaryService.convert(decimal);

    return { data: { value: binary } };
  }
}
