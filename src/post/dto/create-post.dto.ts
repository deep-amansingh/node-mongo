import { IsString, IsInt, IsOptional, IsNotEmpty } from "class-validator";
export class CreatePostDto {
    @IsString()
    @IsNotEmpty({message: "Title is required."})
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly user: string;

    @IsInt()
    readonly comments: number
}
