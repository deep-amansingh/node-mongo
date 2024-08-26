import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    age: number
}

export const AuthorSchema = SchemaFactory.createForClass(Author);