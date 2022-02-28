import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import User from '@modules/User/infra/typeorm/entities/User';
import Piu from '@modules/Pius/infra/typeorm/entities/Pius';

@Entity('piuslike')
class PiusLike {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column()
    piu_id: string;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    user: User;

    @ManyToOne(() => Piu, (piu) => piu.id)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    piu: Piu;
}

export default PiusLike;
