import { Test, TestingModule } from '@nestjs/testing';
import { ListsReproductionAnimemController } from './lists-reproduction-animem.controller';

describe('ListsReproductionAnimemController', () => {
  let controller: ListsReproductionAnimemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListsReproductionAnimemController],
    }).compile();

    controller = module.get<ListsReproductionAnimemController>(ListsReproductionAnimemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
