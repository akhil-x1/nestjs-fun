import { Controller, Get } from '@nestjs/common';
import { BirdService } from './bird.service';

@Controller('birds')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}

  @Get()
  sayHello() {
    return this.birdService.getHello();
  }
}
