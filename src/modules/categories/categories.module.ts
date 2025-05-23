import { TypeOrmModule } from '@nestjs/typeorm';
import {Module} from "@nestjs/common";
import {Category} from "./category.entity";
import {CategoriesController} from "./categories.controller";
import {CategoriesService} from "./categories.service";


@Module({
    imports: [
        TypeOrmModule.forFeature([Category])
    ],
    controllers: [ CategoriesController ],
    providers: [ CategoriesService ]
})
export class CategoriesModule {}


