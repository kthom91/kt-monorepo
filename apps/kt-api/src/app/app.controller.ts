import {
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  OnModuleInit,
} from '@nestjs/common';

import { SetlistFmService } from './setlist-fm.service';
import { Cache } from 'cache-manager';
import { Setlist } from '@kt-monorepo/kt-shared';
import {
  SETLIST_FM_CACHE_KEY,
  SETLIST_FM_ENDPOINT,
} from './common/utils/app.constants';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly setlistFmService: SetlistFmService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  onModuleInit() {
    console.log(`The module has been initialized.`);
    this.getSetlistFmUserDetails().subscribe((setlists) => {
      this.cacheManager.set(SETLIST_FM_CACHE_KEY, setlists);
      console.log('Setlist.fm cache hydrated!');
    });
  }

  @Get()
  async getCacheDetails() {
    const keys = await this.cacheManager.store.keys();
    const value: Setlist[] = await this.cacheManager.get(SETLIST_FM_CACHE_KEY);
    return { keys: keys, length: value ? value.length : null };
  }

  @Get(SETLIST_FM_ENDPOINT)
  getSetlistFmUserDetails() {
    console.log('Starting fetch Setlist.fm user details');
    return this.setlistFmService.getSetlistFmUserDetails();
  }
}
