import { Controller, Get } from '@nestjs/common';
import { CatService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: CatService) {} // aca esta la inyeccion de la dependencia CatService

  @Get()
  getHello(): string {
    return this.appService.getHello();// aca usamos el service una vez importado ya queda disponible (esto es usar la inyeccion dependencias)
  }
}
