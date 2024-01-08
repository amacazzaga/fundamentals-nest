import { Controller, Get } from '@nestjs/common';
import { DogService } from './dogsservice';

@Controller()
export class DogController {
  constructor(private readonly appService: DogService) {} 

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
