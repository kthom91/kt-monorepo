import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SetlistFmService } from './setlist-fm.service';
import { HttpModule } from '@nestjs/axios';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CACHE_TTL } from './common/utils/app.constants';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: CACHE_TTL,
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    SetlistFmService,
  ],
})
export class AppModule {}
