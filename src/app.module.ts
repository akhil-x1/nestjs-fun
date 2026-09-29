import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import LoggerMiddleware from './middlewares/loggerMiddleware';
import { CatModule } from './cats/cat.module';
import { BirdModule } from './birds/bird.module';

@Module({
  imports: [CatModule, BirdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
