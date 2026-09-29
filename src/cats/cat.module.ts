import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import AuthMiddleware from '../middlewares/authMiddleware';

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService], //Exported provider can be imported by some other modules. This prevents creating a separate instance of the service causing increased memory, compute and other resource usage.
})
// export class CatModule implements NestModule {
export class CatModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes(CatController);
  // }
}
