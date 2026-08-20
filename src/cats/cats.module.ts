import { Module } from '@nestjs/common';

import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService] //Exported provider can be imported by some other modules. This prevents creating a separate instance of the service causing increased memory, compute and other resource usage.
})
export class CatModule {}
