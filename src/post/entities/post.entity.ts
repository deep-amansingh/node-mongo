import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
    @Prop()
    title: string;

    @Prop()
    user: string;

    @Prop()
    comments: number
}

export const PostSchema = SchemaFactory.createForClass(Post);
