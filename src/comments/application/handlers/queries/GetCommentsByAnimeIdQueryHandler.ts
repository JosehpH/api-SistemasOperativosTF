/* eslint-disable prettier/prettier */
import { Inject } from '@nestjs/common';
import { GetCommentsByAnimeId } from './../../messages/queries/GetCommentsByAnimeId';
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { ICommentsRepository } from 'src/comments/domain/repositories/ICommentsRepository';

@QueryHandler(GetCommentsByAnimeId)
export class GetCommentsByAnimeIdQueryHandler
  implements IQueryHandler<GetCommentsByAnimeId>
{
  constructor(
    @Inject(ICommentsRepository)
    private commentsRepository: ICommentsRepository,
  ) {}
  execute(query: GetCommentsByAnimeId) {
    return this.commentsRepository.getCommentsByAnimeId(query.animeId);
  }
}