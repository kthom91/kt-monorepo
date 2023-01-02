import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { SetlistFmService } from './setlist-fm.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [SetlistFmService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to kt-api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getCacheDetails()).toMatchObject({
        keys: '123',
        lenght: 250,
      });
    });
  });
});
