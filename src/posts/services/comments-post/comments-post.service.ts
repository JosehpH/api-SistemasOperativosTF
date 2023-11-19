/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { Model, Types } from 'mongoose';
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';
import { NotificationEntity } from 'src/notifications/infraestructure/entities/NotificationEntity';
import { CreateCommentPostDto } from 'src/posts/dtos/CreateCommentPostDto';
import { CommentPost } from 'src/posts/repositories/CommentPost';
import { Post } from 'src/posts/repositories/Post';
import uploadFileToStorage from 'src/shared/services/UploadFiles';

@Injectable()
export class CommentsPostService {
  constructor(
    @InjectModel(CommentPost.name) private repoComments: Model<CommentPost>,
    @InjectModel(UserEntity.name) private readonly repoUser: Model<UserEntity>,
    @InjectModel(NotificationEntity.name)
      private readonly repoNotification: Model<NotificationEntity>,
    @InjectModel(Post.name) private readonly repoPost: Model<Post>,
  ) {}

  async createComment(comment: CreateCommentPostDto) {
    const commentPost = new CommentPost();
    commentPost.content = comment.content;
    commentPost.userId = comment.userId;
    commentPost.postId = new Types.ObjectId(comment.postId);

    const commentNew = await this.repoComments.create(commentPost);
    if (comment.resource) {
      commentNew.resourceUrl = await uploadFileToStorage(
        comment.resource,
        commentNew._id.toString(),
      );
    }
      //Notificar al usuario que ha comentado su publicacion
      const post = await this.repoPost.findById(comment.postId);
        const user = await this.repoUser.findById(comment.userId);
      const message = `ha comentado tu publicacion`;
      const notification = new NotificationEntity();
      notification.user = new Types.ObjectId(post.userId);
      notification.message = `El usuario ${user.email} ` + message;
      const newNotification = await this.repoNotification.create(notification);
        await newNotification.save();
    return commentNew.save();
  }
  async getComments(postId: string) {
    return this.repoComments
      .find({ postId: new Types.ObjectId(postId) })
      .populate('userId');
  }

    updateLikesComment(commentId: string, userId: string) {
        const message = `le ha dado like a tu comentario`;
      this.notifyUser(commentId, userId, message);
      
    return this.repoComments.updateOne(
      { _id: new Types.ObjectId(commentId) },
      { $addToSet: { likes: new Types.ObjectId(userId) } },
    );
  }
    updateDislikesComment(commentId: string, userId: string) {
        const message = `le ha dado dislike a tu comentario`;
      this.notifyUser(commentId, userId,message);
    return this.repoComments.updateOne(
      { _id: new Types.ObjectId(commentId) },
      { $addToSet: { dislikes: new Types.ObjectId(userId) } },
    );
  }
  removeLikesComment(commentId: string, userId: string) {
    return this.repoComments.updateOne(
      { _id: new Types.ObjectId(commentId) },
      { $pull: { likes: new Types.ObjectId(userId) } },
    );
  }
  removeDislikesComment(commentId: string, userId: string) {
    return this.repoComments.updateOne(
      { _id: new Types.ObjectId(commentId) },
      { $pull: { dislikes: new Types.ObjectId(userId) } },
    );
  }
  async notifyUser(commentId: string, userId: string, message) {
      const notification = new NotificationEntity();
      const comment = await this.repoComments.findById(commentId);
      const user = await this.repoUser.findById(userId);
      notification.user = new Types.ObjectId(comment.userId);
      notification.message = `El usuario ${user.email} `+message;
      const newNotification = await this.repoNotification.create(notification);
        return newNotification.save();
  }
}
