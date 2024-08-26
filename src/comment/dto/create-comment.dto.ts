import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {
    @IsInt()
    postId: number;

    @IsString()
    @IsNotEmpty()
    comment: string;

    @IsString()
    createAt: string
}