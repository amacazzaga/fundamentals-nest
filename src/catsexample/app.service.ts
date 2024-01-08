import { Injectable } from '@nestjs/common';

//DEPENDENCY INYECTION

@Injectable() // este inyectable nos permite marcar el CatService como provider, inyectable es un decorador
export class CatService {
  getHello(): string {
    return 'Hello Cats!!!';
  }
}
