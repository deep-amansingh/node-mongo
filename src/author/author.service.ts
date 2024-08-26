import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './schemas/author.schema';

@Injectable()
export class AuthorService {
    constructor(
        private configService: ConfigService,
        @InjectModel('Author') private authorModel:  Model<Author>
    ) {}

    async create(data) {
        const author = new this.authorModel(data);
        return author.save();
    }

    async finOneById(id: number) {
        console.log(this.configService.get<string>('DB_USER'))
        return {
            id: 1,
            firstName: 'FirstName',
            lastName: 'LastName',
            posts: []
        }
    }
}
