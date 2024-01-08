import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CatService], // asociamos el token catservice a la clase CatService segun la documentacion
})
export class AppModule {}
