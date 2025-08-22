import { Controller, Get, Render } from '@nestjs/common';

@Controller('root')
export class RootController {
  @Get()
  @Render('root')
  root() {
    return { title: 'Conversor' };
  }
}
