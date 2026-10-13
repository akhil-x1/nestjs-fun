import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('8f3a9b!k2$M9#zL1xP5@vR8tY2*qA0bC7&dE4fG9'));
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
