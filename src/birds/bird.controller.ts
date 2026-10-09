import {
  Controller,
  Get,
  HttpStatus,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BirdService } from './bird.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('birds')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}

  @UseGuards(JwtAuthGuard)
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
