import { Module } from '@nestjs/common';
import { TobinaryModule } from './tobinary/tobinary.module';
import { TodecimalModule } from './todecimal/todecimal.module';

@Module({
  imports: [TobinaryModule, TodecimalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
