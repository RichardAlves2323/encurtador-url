import { nanoid } from "nanoid";
import { ICreateSlugService } from "../../domain/interfaces/services/ICreateSlugService";

export class CreateSlugByNanoId implements ICreateSlugService {
    
    public async create(): Promise<string> {
        const slug = nanoid(8);
        return slug;
    }
    
}