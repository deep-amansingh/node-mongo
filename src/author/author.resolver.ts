import { Args, Resolver, Query } from "@nestjs/graphql";
import { AuthorService } from "./author.service";

@Resolver('Author')
export class AuthorResolver {

    constructor(
        private authorService: AuthorService
    ){}

    @Query()
    async author(@Args('id') id: number) {
        return await this.authorService.finOneById(id)
    }
}