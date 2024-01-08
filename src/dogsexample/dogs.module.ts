import { Module } from '@nestjs/common';
import { DogService } from './dogsservice';
import { DogController } from './dogscontroller';

// simulamos tener un servicio aca, mas tarde debera estar en el dogsservice
class ExampleServiceOfDogs {
    constructor(private readonly options: string) {}
    getHello(): string {
      return `Hello from ExampleService of the dogs  with options: ${this.options}`;
    }
  }
 // nuestro provider recupera el servicio de dogs provide: exampleserviceofdogs
  const exampleProvider = {
    provide: ExampleServiceOfDogs,
    useFactory: (options: string) => { // cumplir con el mandatory que dice la docu 
      return new ExampleServiceOfDogs(options);
    },
    inject: [""], //Las dependencias necesarias para la creación de esta instancia se especifican en el array inject
  };
  //
@Module({
  imports: [],
  controllers: [DogController],
  providers: [DogService], 
})
export class DogAppModule {}