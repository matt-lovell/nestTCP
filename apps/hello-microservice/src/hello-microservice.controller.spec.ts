import { Test, TestingModule } from '@nestjs/testing';
import { HelloMicroserviceController } from './hello-microservice.controller';
import { HelloMicroserviceService } from './hello-microservice.service';

describe('HelloMicroserviceController', () => {
  let helloMicroserviceController: HelloMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloMicroserviceController],
      providers: [HelloMicroserviceService],
    }).compile();

    helloMicroserviceController = app.get<HelloMicroserviceController>(HelloMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(helloMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
