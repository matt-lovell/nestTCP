import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HelloMicroserviceModule } from './hello-microservice.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HelloMicroserviceModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 9000
      }
    }
  )
  app.listen().then(() => console.log('Microservice listening'));
}
bootstrap();
