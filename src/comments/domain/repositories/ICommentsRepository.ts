/* eslint-disable prettier/prettier */
import { CommentAnime } from "../aggregates/CommentAnime";
import { CommentEpisode } from "../aggregates/CommentEpisode";

export const ICommentsRepository = "ICommentsRepository";
export interface ICommentsRepository{
    getCommentsByAnimeId(animeId: string);
    getCommentsByEpisodeId(episodeId: string);
    createCommentForEpisode(comment: CommentEpisode);
    createCommentForAnime(comment: CommentAnime);
    deleteCommentAnime(commentId: string);
    deleteCommentEpisode(commentId: string);
}