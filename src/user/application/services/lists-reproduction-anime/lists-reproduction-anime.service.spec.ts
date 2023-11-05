import { Test, TestingModule } from '@nestjs/testing';
import { ListsReproductionAnimeService } from './lists-reproduction-anime.service';

describe('ListsReproductionAnimeService', () => {
  let service: ListsReproductionAnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListsReproductionAnimeService],
    }).compile();

    service = module.get<ListsReproductionAnimeService>(ListsReproductionAnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
