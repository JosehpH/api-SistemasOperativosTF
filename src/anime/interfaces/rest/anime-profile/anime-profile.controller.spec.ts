import { Test, TestingModule } from '@nestjs/testing';
import { AnimeProfileController } from './anime-profile.controller';

describe('AnimeProfileController', () => {
  let controller: AnimeProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimeProfileController],
    }).compile();

    controller = module.get<AnimeProfileController>(AnimeProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
