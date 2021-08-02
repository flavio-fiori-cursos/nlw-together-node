import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {

    async execute(name: string) {
        
        const tagsRespositories = getCustomRepository(TagsRepositories);

        if(!name) {
            throw new Error('Incorrect name');
        }

        const tagAlreadyExists = await tagsRespositories.findOne({
            name
        });

        if(tagAlreadyExists) {
            throw new Error('tags already exists');
        }

        const tag = tagsRespositories.create({
            name
        });

        await tagsRespositories.save(tag);

        return tag;

    }

};

export { CreateTagService };