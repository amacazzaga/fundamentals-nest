import { NestFactory } from '@nestjs/core';
import { AppModule } from './catsexample/app.module';
//solo importamos el modulo de gatos

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
