import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
    constructor(
        private authorservice: AuthorService
    ){}

    @Get()
    getAuthors() {
        return this.authorservice.finOneById(1);
    }

    @Post()
    createAuthor(@Body() body: any) {
        return this.authorservice.create(body);
    }

}
