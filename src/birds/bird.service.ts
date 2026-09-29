import { Injectable } from '@nestjs/common';

@Injectable()
export class BirdService {
  getHello(): string {
    return 'Hello World from bird service!';
  }
}
