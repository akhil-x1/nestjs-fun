import { Controller, Get, Put, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('cookies')
export class CookiesController {
  @Get()
  getCookies() {
    return 'Hello! from cookies page!';
  }

  @Get('set')
  setCookies(@Res({ passthrough: true }) res: Response) {
    res.cookie('theme123', 'dark', {
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60,
    });

    return { message: 'Cookie set successfully' };
  }

  @Get('updated')
  updateCookies(@Res({ passthrough: true }) res: Response) {
    res.cookie('theme123', 'light');
    return { message: 'Cookie updated succesfully!' };
  }

  @Get('delete')
  deleteCookies(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('theme123');
    return { message: 'Cookie deleted successfully' };
  }
}
