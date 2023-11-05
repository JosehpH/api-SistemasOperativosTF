import { Test, TestingModule } from '@nestjs/testing';
import { FollowedAnimeService } from './followed-anime.service';

describe('FollowedAnimeService', () => {
  let service: FollowedAnimeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowedAnimeService],
    }).compile();

    service = module.get<FollowedAnimeService>(FollowedAnimeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
