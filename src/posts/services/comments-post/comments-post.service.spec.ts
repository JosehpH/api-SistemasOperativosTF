import { Test, TestingModule } from '@nestjs/testing';
import { CommentsPostService } from './comments-post.service';

describe('CommentsPostService', () => {
  let service: CommentsPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsPostService],
    }).compile();

    service = module.get<CommentsPostService>(CommentsPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
