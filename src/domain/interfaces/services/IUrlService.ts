import { Url } from "../../entities/Url";

export interface IUrlService {
    create(url: Url): Promise<Url>;
    findAll(): Promise<Url[]>;
    redirectBySlug(slug: string): Promise<Url>;
    update(url: Url): Promise<Url>;
    delete(slug: string): Promise<Url>;
}