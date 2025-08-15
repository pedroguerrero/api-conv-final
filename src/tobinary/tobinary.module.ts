import { Module } from '@nestjs/common';
import { TobinaryController } from './tobinary.controller';
import { TobinaryService } from './services/tobinary.service';

@Module({
  providers: [TobinaryService],
  controllers: [TobinaryController],
})
export class TobinaryModule {}
