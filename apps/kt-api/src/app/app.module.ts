import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetlistFmService } from './setlist-fm.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, SetlistFmService],
})
export class AppModule {}
