import { Test, TestingModule } from '@nestjs/testing';
import { HistoryAnimeController } from './history-anime.controller';

describe('HistoryAnimeController', () => {
  let controller: HistoryAnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryAnimeController],
    }).compile();

    controller = module.get<HistoryAnimeController>(HistoryAnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
