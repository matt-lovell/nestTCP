import { Controller } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { HelloMicroserviceService } from './hello-microservice.service';

@Controller()
export class HelloMicroserviceController {
  constructor(private readonly helloMicroserviceService: HelloMicroserviceService) {}

  @MessagePattern('getHello')
  getHello(obj: object): string {
    console.log('microservice getHello called with', obj)
    throw new RpcException({
      error: '???',
      code: 400,
      message: 'wtf?'
    })
  }
}
