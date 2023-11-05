import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesAnimeService } from './favorites-anime.service';

describe('FavoritesAnimeService', () => {
  let service: FavoritesAnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritesAnimeService],
    }).compile();

    service = module.get<FavoritesAnimeService>(FavoritesAnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
