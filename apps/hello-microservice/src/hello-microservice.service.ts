import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
