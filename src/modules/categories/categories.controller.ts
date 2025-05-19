import {Controller, Get, UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CategoriesService} from "./categories.service";
import {AuthService} from "../auth/auth.service";
import {Repository} from "typeorm";
import {Category} from "./category.entity";

@Controller('categories')
export class CategoriesController {

    constructor(
        private readonly categoriesService: CategoriesService,
    ) { }

    @Get('categories')
    async getCategories(): Promise<Category[]> {
        return await this.categoriesService.findAll();
    }
}