import { Module } from '@nestjs/common';
import { TobinaryModule } from './tobinary/tobinary.module';
import { TodecimalModule } from './todecimal/todecimal.module';
import { RootModule } from './root/root.module';

@Module({
  imports: [TobinaryModule, TodecimalModule, RootModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
