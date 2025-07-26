import { Url } from "../../entities/Url";

export interface IUrlRepository {
    save(url: Url): Promise<Url>;
    findAll(): Promise<Url[]>;
    findBySlug(slug: string): Promise<Url>;
    update(url: Url): Promise<Url>;
    deleteBySlug(slug: string): Promise<Url>;
}