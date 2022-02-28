import ICreateDTO from '../dtos/ICreateDTO';
import PiusLike from '../infra/typeorm/entities/PiusLike';

export default interface IPiusRepository {
    create(piusLikeData: ICreateDTO): Promise<PiusLike>;
    save(piuLike: PiusLike): Promise<PiusLike>;
    wasLiked(user_id: string, piu_id: string): Promise<PiusLike | null>;
    findAll(): Promise<PiusLike[]>;
    delete(piuLike_id: string): Promise<PiusLike>;
// eslint-disable-next-line semi
}
