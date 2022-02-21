import User from '../infra/typeorm/entities/User';
import ICreateDTO from '../dtos/ICreateDTO';

export default interface IUsersRepository {
    create(data: ICreateDTO): Promise<User>;
    save(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | undefined>;
    findByUsername(username: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
// eslint-disable-next-line semi
}
