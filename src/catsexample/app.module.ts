import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatService } from './app.service';

// este modulo de gatos es el de App, en realidad deberia crear uno e importar alli modulo de gatos y perros, pero los dos modulos son ejemplos asi que lo dejamos asi por ahora
@Module({
  imports: [],
  controllers: [AppController],
  providers: [CatService], // asociamos el token catservice a la clase CatService segun la documentacion
})
export class AppModule {}

/* si quisieramos usar un objeto de mock en lugar del servicio, este es un ejemplo pensado para hacer un test!
const mockCatsService = {
   mock implementacion aca
  ...
};
@Module({
  imports: [CatsModule], // esto importa el modulo de Cat entero!! esto es el modulo global
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService, // aca usamos el USEVALUE que es usar CatService directamente para testing
    },
  ],
})
export class AppModule {}
*/
/*
si quisieramos usar dinamicamente una clase , debemos usar useClass, esto esta pensado para ejecutar el servicio en un entorno u otro.(prueba o el real)
la diferencia con el ejemplo anterior es que con usevalue mockeamos directamente a cat service , aca se ejecutara el servicio en un entorno de prueba o el real
dependiendo de lo que useClass establezca dinamicamente para la clase
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