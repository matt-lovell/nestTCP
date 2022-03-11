import { Module } from '@nestjs/common';
import { HelloMicroserviceController } from './hello-microservice.controller';
import { HelloMicroserviceService } from './hello-microservice.service';

@Module({
  imports: [],
  controllers: [HelloMicroserviceController],
  providers: [HelloMicroserviceService],
})
export class HelloMicroserviceModule {}
