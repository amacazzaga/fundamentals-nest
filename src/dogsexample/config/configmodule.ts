import { DynamicModule, Module } from '@nestjs/common';
//import { ConfigService } from './config.service';
// aqui vemos un modulo de configuracion creado, el config service nos sirviria por ejemplo dada la circunstancia para recuperar un servicio

@Module({})
export class ConfigModule {
  static register(): DynamicModule {
    return {
      module: ConfigModule,
      // providers: [ConfigService],
      //  exports: [ConfigService],
    };
  }
}
