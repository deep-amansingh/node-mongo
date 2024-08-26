import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comment.entity';

@Injectable()
export class CommentService {
    constructor(
        @InjectModel('Comment') private commentModel: Model<Comment>
    ) {}
    getAllComments() {

    }

    createComment(createComment: CreateCommentDto) {
        return this.commentModel.create(createComment);
    }
}
