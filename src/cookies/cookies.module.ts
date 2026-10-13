import { Module } from '@nestjs/common';
import { CookiesService } from './cookies.service';
import { CookiesController } from './cookies.controller';

@Module({
  providers: [CookiesService],
  controllers: [CookiesController]
})
export class CookiesModule {}
