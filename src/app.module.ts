import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./modules/users/user.entity";
import {UsersModule} from "./modules/users/users.module";
import {AuthModule} from "./modules/auth/auth.module";
import {CategoriesModule} from "./modules/categories/categories.module";
import {Category} from "./modules/categories/category.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '201704',
      database: 'shop',
      entities: [User, Category],
      synchronize: true
    }),
    UsersModule,
    AuthModule,
    CategoriesModule
  ]
})
export class AppModule {}
