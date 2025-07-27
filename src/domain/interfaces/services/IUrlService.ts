import { Url } from "../../entities/Url";

export interface IUrlService {
    create(url: Url): Promise<Url>;
    findAll(): Promise<Url[]>;
    redirectBySlug(slug: string): Promise<string>;
    update(url: Url): Promise<void>;
    delete(slug: string): Promise<void>;
}