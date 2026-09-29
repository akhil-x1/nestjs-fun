import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export default class LoggerMiddleware extends NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request....');
    next();
  }
}
