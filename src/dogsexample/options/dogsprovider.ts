//veamos como se veria dependencia 1 si quisieramos

import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class Dependencia1 {
  dogService: any;

  @Get()
  getHello(): string {
    return this.dogService.getHello('hello this is a dependency of many dogs!'); // llama al dogService, podria ser cualquiera
  }
}
