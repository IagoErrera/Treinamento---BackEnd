import ICreateDTO from '../dtos/ICreateDTO';
import Piu from '../infra/typeorm/entities/Pius';

export default interface IPiusRepository {
    create(piuData: ICreateDTO): Promise<Piu>;
    save(piu: Piu): Promise<Piu>;
    findById(id: string): Promise<Piu | undefined>;
    findAll(): Promise<Piu[]>;
    delete(piu_id: string): Promise<Piu>;
// eslint-disable-next-line semi
}
