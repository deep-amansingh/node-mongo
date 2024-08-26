import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Comment {
    @Prop()
    id: number;

    @Prop()
    postId: number;

    @Prop()
    comment: string;

    @Prop()
    createdAt: string
}

export const CommentSchema = SchemaFactory.createForClass(Comment)