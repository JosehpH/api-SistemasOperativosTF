/* eslint-disable prettier/prettier */
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetCommentsByEpisodeId } from "../../messages/queries/GetCommentsByEpisodeId";
import { Inject } from "@nestjs/common";
import { ICommentsRepository } from "src/comments/domain/repositories/ICommentsRepository";

@QueryHandler(GetCommentsByEpisodeId)
export class GetCommentsByEpisodeIdQueryHandler
  implements IQueryHandler<GetCommentsByEpisodeId>
{
  constructor(
    @Inject(ICommentsRepository)
    private commentsRepository: ICommentsRepository,
  ) {}
  execute(query: GetCommentsByEpisodeId) {
    return this.commentsRepository.getCommentsByEpisodeId(query.episodeId);
  }
}