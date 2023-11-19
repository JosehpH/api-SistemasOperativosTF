import { ObjectId, Types } from 'mongoose';
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/posts/dtos/CreatePostDto';
import { Post } from 'src/posts/repositories/Post';
import uploadFileToStorage from 'src/shared/services/UploadFiles';
import { UserEntity } from 'src/auth/infraestructure/persitence/entities/UserEntity';
import { NotificationEntity } from 'src/notifications/infraestructure/entities/NotificationEntity';
@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly repoPost: Model<Post>,
    @InjectModel(UserEntity.name) private readonly repoUser: Model<UserEntity>,
    @InjectModel(NotificationEntity.name)
    private readonly repoNotification: Model<NotificationEntity>,
  ) {}

  async createPost(postDto: CreatePostDto) {
    const post = new Post();
    post.userId = new Types.ObjectId(postDto.userId);
    post.content = postDto.content;
    const newPost = await this.repoPost.create(post);
    if (postDto.Resource) {

      const url = await uploadFileToStorage(
        postDto.Resource,
        newPost._id.toString(),
      );
      newPost.urlResource = url;
      await newPost.save();
    }
    else {
      newPost.urlResource = null;
    }

    return newPost.save();
  }
  async getPosts() {
    return this.repoPost
      .find()
      .populate('userId')
      .populate('comments')
      .populate('likes')
      .populate('dislikes');
  }
  updateLikesPost(postId: string, userId: string) {
    const message = `le ha dado like a tu publicacion`;
    this.notifyUser(postId, userId, message);
    return this.repoPost.updateOne(
      { _id: new Types.ObjectId(postId) },
      { $addToSet: { likes: new Types.ObjectId(userId) } },
    ).exec();
  }
  updateDislikesPost(postId: string, userId: string) {
    const message = `le ha dado dislike a tu publicacion`;
    this.notifyUser(postId, userId, message);
    
    return this.repoPost.updateOne(
      { _id: new Types.ObjectId(postId) },
      { $addToSet: { dislikes: new Types.ObjectId(userId) } },
    );
  }
  removeLikesPost(postId: string, userId: string) {
    return this.repoPost.updateOne(
      { _id: new Types.ObjectId(postId) },
      { $pull: { likes: new Types.ObjectId(userId) } },
    );
  }
  removeDislikesPost(postId: string, userId: string) {
    return this.repoPost.updateOne(
      { _id: new Types.ObjectId(postId) },
      { $pull: { dislikes: new Types.ObjectId(userId) } },
    );
  }
  async notifyUser(postId: string, userId: string, message) {
    const notification = new NotificationEntity();
    const post = await this.repoPost.findById(postId);
    const user = await this.repoUser.findById(userId);
    notification.user = new Types.ObjectId(post.userId);
    notification.message = `El usuario ${user.email} ` + message;
    Logger.log(notification.message);
    const newNotification = await this.repoNotification.create(notification);
    return newNotification.save();
  }
}
