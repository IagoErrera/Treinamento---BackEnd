import {
  Entity,
  PrimaryGeneratedColumn,
  Column, UpdateDateColumn,
  CreateDateColumn,
  JoinTable,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import User from '@modules/User/infra/typeorm/entities/User';

@Entity('pius')
class Piu {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @JoinTable()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @Column('simple-json')
    likes: JSON;

    @Column()
    text: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Piu;
