import { Controller, Get } from '@nestjs/common';
import { CatService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: CatService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
