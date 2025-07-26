import { Url } from "../../entities/Url";

export interface IUrlUseCase {
    create(url: Url): Promise<Url>;
    findAll(): Promise<Url[]>;
    findBySlug(slug: string): Promise<Url>;
    update(url: Url): Promise<Url>;
    delete(slug: string): Promise<Url>;
}