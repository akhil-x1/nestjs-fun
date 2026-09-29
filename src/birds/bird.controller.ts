import {
  Controller,
  Get,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { BirdService } from './bird.service';

@Controller('birds')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}

  @Get('hello')
  sayHello() {
    return this.birdService.getHello();
  }

  @Get()
  sayId(
    @Query(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return { id };
  }
}
