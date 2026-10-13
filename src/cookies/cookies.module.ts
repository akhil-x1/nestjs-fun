import { Module } from '@nestjs/common';
import { CookiesService } from './cookies.service';

@Module({
  providers: [CookiesService]
})
export class CookiesModule {}
