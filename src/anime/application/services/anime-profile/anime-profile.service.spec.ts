import { Test, TestingModule } from '@nestjs/testing';
import { AnimeProfileService } from './anime-profile.service';

describe('AnimeProfileService', () => {
  let service: AnimeProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnimeProfileService],
    }).compile();

    service = module.get<AnimeProfileService>(AnimeProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
