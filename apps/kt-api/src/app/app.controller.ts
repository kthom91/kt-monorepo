import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { SetlistFmService } from './setlist-fm.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly setlistFmService: SetlistFmService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('setlist-fm/user')
  getSetlistFmUserDetails() {
    return this.setlistFmService.getSetlistFmUserDetails();
  }
}
