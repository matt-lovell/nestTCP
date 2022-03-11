import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('HELLO_SERVICE') private client: ClientProxy,
    ) {}

  @Get()
  getHello(): Promise<string> {
    console.log('app.controller getHello called')
    return firstValueFrom(this.client.send('getHello', 'notAnObject')).catch((err) => {
      console.error('Caught error', err)
    })
  }
}
