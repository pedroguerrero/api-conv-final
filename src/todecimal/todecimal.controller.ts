import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ToDecimalDto } from './dto/todecimal.dto';
import { TodecimalService } from './services/todecimal.service';
import { ToDecimalResponse } from './responses/todecimal.response';

@ApiTags('todecimal')
@Controller('todecimal')
export class TodecimalController {
  constructor(private readonly toDecimalService: TodecimalService) {}

  @ApiCreatedResponse({
    type: ToDecimalResponse,
  })
  @Post()
  convertToDecimal(@Body() body: ToDecimalDto): ToDecimalResponse {
    const {
      data: { binary },
    } = body;
    const decimal = this.toDecimalService.convert(binary);

    return { data: { value: decimal } };
  }
}
