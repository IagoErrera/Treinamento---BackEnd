import Piu from '@modules/Pius/infra/typeorm/entities/Pius';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    about: string;

    @Column()
    photo: string;

    @OneToMany(() => Piu, (piu) => piu)
    pius: Piu[];

    @Column('simple-json')
    likes: JSON;

    @Column('simple-json')
    following: JSON;

    @Column('simple-json')
    followers: JSON;

    @Column('simple-json')
    favorites: JSON;
}

export default User;
