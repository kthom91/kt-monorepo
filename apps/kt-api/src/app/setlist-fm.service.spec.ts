import { Test, TestingModule } from '@nestjs/testing';
import { SetlistFmService } from './setlist-fm.service';

describe('SetlistFmService', () => {
  let service: SetlistFmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetlistFmService],
    }).compile();

    service = module.get<SetlistFmService>(SetlistFmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
