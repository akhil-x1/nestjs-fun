import { Controller, Get, Session } from '@nestjs/common';

@Controller('session')
export class SessionController {
  @Get()
  getSession(@Session() sess: Record<string, any>) {
    sess.visits = sess.visits ? sess.visits + 1 : 1;
    return 'Session page! Session visits' + sess.visits;
  }
}
