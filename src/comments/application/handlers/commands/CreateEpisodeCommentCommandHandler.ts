/* eslint-disable prettier/prettier */
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateEpisodeComment } from "../../messages/commands/CreateEpisodeComment";
import { Inject } from "@nestjs/common";
import { ICommentsRepository } from "src/comments/domain/repositories/ICommentsRepository";
import { CommentEpisode } from "src/comments/domain/aggregates/CommentEpisode";

@CommandHandler(CreateEpisodeComment)
export class CreateEpisodeCommentCommandHandler
  implements ICommandHandler<CreateEpisodeComment>
{
  constructor(
    @Inject(ICommentsRepository)
    private commentsRepository: ICommentsRepository,
  ) {}
  execute(command: CreateEpisodeComment) {
      const comment = new CommentEpisode();
      comment.episodeId = command.episodeId;
      comment.text = command.comment;
      comment.userId = command.userId;
      comment.media = command.media;
      comment.likes = 0;
      comment.dislikes = 0;
      comment.parentId = command.parentId;
        return this.commentsRepository.createCommentForEpisode(comment);
      
  }
}