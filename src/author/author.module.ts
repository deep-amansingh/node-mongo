import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './schemas/author.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Author', schema: AuthorSchema}]),
        ConfigModule
    ],
    providers: [AuthorService],
    controllers: [AuthorController]
})
export class AuthorModule {}
