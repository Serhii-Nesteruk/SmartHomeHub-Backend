import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ name: 'color_start' })
    colorStart: string;

    @Column({ name: 'color_end' })
    colorEnd: string;

    @Column({ name: 'icon_name' })
    iconName: string;
}