import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CatService], // asociamos el token catservice a la clase CatService segun la documentacion
})
export class AppModule {}

/* si quisieramos usar un objeto de mock en lugar , este es un ejemplo pensado para hacer un test!
const mockCatsService = {
   mock implementacion aca
  ...
};
@Module({
  imports: [CatsModule], // esto importa el modulo de Cat entero!! este es el modulo general
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService, // aca usamos el useValue que es usar CatService para testing
    },
  ],
})
export class AppModule {}
*/
/*
si quisieramos usar dinamicamente una clase , debemos usar useClass
const configServiceProvider = {
  provide: ConfigService,
  useClass:
    process.env.NODE_ENV === 'development'
      ? DevelopmentConfigService
      : ProductionConfigService,
};
@Module({
  providers: [configServiceProvider], // a este mismo provider podriamos enviarle CatService y nos quedaria algo asi [configServiceProvider,CatService]
})
export class AppModule {}
*/