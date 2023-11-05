import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesAnimmeController } from './favorites-animme.controller';

describe('FavoritesAnimmeController', () => {
  let controller: FavoritesAnimmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesAnimmeController],
    }).compile();

    controller = module.get<FavoritesAnimmeController>(FavoritesAnimmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
