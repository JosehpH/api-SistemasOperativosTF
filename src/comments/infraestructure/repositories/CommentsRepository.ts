/* eslint-disable prettier/prettier */
import { Model, Types } from 'mongoose';
import { CommentAnime } from "src/comments/domain/aggregates/CommentAnime";
import { CommentEpisode } from "src/comments/domain/aggregates/CommentEpisode";
import { ICommentsRepository } from "src/comments/domain/repositories/ICommentsRepository";
import { CommentAnimeEntity } from "../persistence/CommentAnimeEntity";
import { CommentEpisodeEntity } from '../persistence/CommentEpisodeEntity';
import { InjectModel } from '@nestjs/mongoose';
import { types } from 'util';

export class CommentsRepository implements ICommentsRepository{
    constructor(
        @InjectModel(CommentAnimeEntity.name)
        private commentAnimeRepo: Model<CommentAnimeEntity>,
        @InjectModel(CommentEpisodeEntity.name)
        private commentEpisodeRepo: Model<CommentEpisodeEntity>
    ) {}
    getCommentsByAnimeId(animeId: string) {
        this.commentAnimeRepo.find({anime:{_id:animeId}});
    }
    async createCommentForAnime(comment: CommentAnime) {
        try {
            const newComment = new CommentAnimeEntity();
            newComment.anime = new Types.ObjectId(comment.animeId);
            newComment.text = comment.text;
            newComment.media = comment.media;
            newComment.likes = comment.likes;
            newComment.dislikes = comment.dislikes;
            newComment.user = new Types.ObjectId(comment.userId);
            if(comment.parentId.length > 0)
                newComment.parentComment = new Types.ObjectId(comment.parentId);
            
            const addComment = await this.commentAnimeRepo.create(newComment);
            addComment.save();
        } catch (error) {
            throw new Error(error);
        }
    }
    deleteCommentAnime(commentId: string) {
        try {
            this.commentAnimeRepo.deleteOne({_id:new Types.ObjectId(commentId)});
        } catch (error) {
            throw new Error(error);
        }
    }
  
    getCommentsByEpisodeId(episodeId: string) {
        this.commentEpisodeRepo.find({episode:{_id:episodeId}});
    }
    async createCommentForEpisode(comment: CommentEpisode) {
        try {
            const newComment = new CommentEpisodeEntity();
            newComment.episode = new Types.ObjectId(comment.episodeId);
            newComment.text = comment.text;
            newComment.media = comment.media;
            newComment.likes = comment.likes;
            newComment.dislikes = comment.dislikes;
            newComment.user = new Types.ObjectId(comment.userId);
            if(comment.parentId.length > 0)
                newComment.parentComment = new Types.ObjectId(comment.parentId);

            const addComment = await this.commentEpisodeRepo.create(newComment);
            addComment.save();
            
        } catch (error) {
            throw new Error(error);
        }   
    }
    deleteCommentEpisode(commentId: string) {
        try {
             this.commentEpisodeRepo.deleteOne({_id: new Types.ObjectId(commentId)});   
        }
        catch (error) {
            throw new Error(error);
        }
    }

}