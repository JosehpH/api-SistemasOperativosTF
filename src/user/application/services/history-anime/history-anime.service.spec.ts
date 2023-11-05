import { Test, TestingModule } from '@nestjs/testing';
import { HistoryAnimeService } from './history-anime.service';

describe('HistoryAnimeService', () => {
  let service: HistoryAnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryAnimeService],
    }).compile();

    service = module.get<HistoryAnimeService>(HistoryAnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
