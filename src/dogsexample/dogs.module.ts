import { Module } from '@nestjs/common';
import { DogService } from './dogsservice';
import { DogController } from './dogscontroller';
import { Dependencia1 } from './options/dogsprovider';
import { ConfigModule } from './config/configmodule'; // mi modulo de configuracion

// simulamos tener un servicio aca, mas tarde debera estar en el dogsservice
class ExampleServiceOfDogs {
  constructor(private readonly options: string) {}
  getHello(): string {
    return `Hello from ExampleService of the dogs  with options: ${this.options}`;
  }
}
// crearemos un custom provider dependiendo de lo que la funcion useFactory nos devuelva!!!
// nuestro provider recupera el servicio de dogs provide: exampleserviceofdogs
const exampleOfCustomProviderWithDogDependency = {
  provide: ExampleServiceOfDogs,
  useFactory: (dependencia: Dependencia1) => {
    //podriamos hacer este provider asincrono usando async await en esta funcion (await ... dependencia.getHello())
    // inyect especifica las dependecias que se pasan a esta funcion de useFactory()
    return new ExampleServiceOfDogs(dependencia.getHello()); // Dependencia 1 , nos saludan muchos perros
  },
  inject: [
    Dependencia1, // ver la dependencia el el archivo de options/dogsprovider
    'dependencia dos podria ser opcional, si se viera asi : { token: SomeOptionalProvider, optional: true }', // seria recibida en useFactory
  ], //Las dependencias necesarias para la creación de esta instancia se especifican en el array inject, instancia que se pasa a la funcion useFactory
};

//
@Module({
  imports: [ConfigModule.register()], // aca se importa el modulo de config, el register : pasar argumentos al método y utilizarlos para personalizar la configuración del módulo.
  controllers: [DogController],
  providers: [exampleOfCustomProviderWithDogDependency, DogService],
  exports: [exampleOfCustomProviderWithDogDependency], //ejemplo de como podemos exportar un custom provider
})
export class DogAppModule {}
