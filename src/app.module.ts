import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import LoggerMiddleware from './middlewares/loggerMiddleware';
import { CatModule } from './cats/cat.module';
import { BirdModule } from './birds/bird.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CookiesModule } from './cookies/cookies.module';
import { VersioningModule } from './versioning/versioning.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [CatModule, BirdModule, AuthModule, UsersModule, CookiesModule, VersioningModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
