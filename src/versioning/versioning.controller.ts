import { Controller, Get, Version } from '@nestjs/common';

@Controller({ path: 'versioning', version: '3' })
export class VersioningController {
  @Get()
  getVersionPage() {
    return 'Your version is 3';
  }

  @Version('4')
  @Get('updated')
  getUpdatedVersion() {
    return 'Your version is 4';
  }
}
