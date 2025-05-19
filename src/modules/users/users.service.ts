import {Inject, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>
    ) { }

    async create(email: string, password: string) : Promise<User> {
        const user = this.repo.create({ email, password });
        return this.repo.save(user);
    }

    async findByEmail(email: string) : Promise<User | null> {
        return this.repo.findOne({ where: { email } });
    }

    async findById(id: number) : Promise<User | null> {
        return this.repo.findOne({ where: { id } });
    }
}