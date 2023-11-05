import { Test, TestingModule } from '@nestjs/testing';
import { FollowedAnimeController } from './followed-anime.controller';

describe('FollowedAnimeController', () => {
  let controller: FollowedAnimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowedAnimeController],
    }).compile();

    controller = module.get<FollowedAnimeController>(FollowedAnimeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
