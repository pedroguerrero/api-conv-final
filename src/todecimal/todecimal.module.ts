import { Module } from '@nestjs/common';
import { TodecimalController } from './todecimal.controller';
import { TodecimalService } from './services/todecimal.service';

@Module({
  providers: [TodecimalService],
  controllers: [TodecimalController],
})
export class TodecimalModule {}
