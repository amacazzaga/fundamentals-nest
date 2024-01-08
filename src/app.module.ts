import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CatService],
})
export class AppModule {}
