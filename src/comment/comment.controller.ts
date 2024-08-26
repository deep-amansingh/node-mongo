import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';


@Controller('comment')
export class CommentController {
    constructor(
        private commentService: CommentService
    ){}
    @Get()
    getAllComments() {
        return this.commentService.getAllComments();
    }

    @Post()
    createComment(@Body() createComment: CreateCommentDto) {
        return this.commentService.createComment(createComment);
    }
}
