import { Module } from '@nestjs/common';
import { DogService } from './dogsservice';
import { DogController } from './dogscontroller';

@Module({
  imports: [],
  controllers: [DogController],
  providers: [DogService], 
})
export class AppModule {}