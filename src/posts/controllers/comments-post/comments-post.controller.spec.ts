import { Test, TestingModule } from '@nestjs/testing';
import { CommentsPostController } from './comments-post.controller';

describe('CommentsPostController', () => {
  let controller: CommentsPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsPostController],
    }).compile();

    controller = module.get<CommentsPostController>(CommentsPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
