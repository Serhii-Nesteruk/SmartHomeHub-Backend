import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {Category} from "./category.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly repo: Repository<Category>,
    ) { }

    async findAll() : Promise<Category[]> {
        return await this.repo.find();
    }
}