import { Url } from "../../../domain/entities/Url";

export interface IUrlRepository {
    save(url: Url): Promise<Url>;
    findAll(): Promise<Url[]>;
    findBySlug(slug: string): Promise<Url | null>;
    update(url: Url): Promise<void>;
    updateClicksBySlug(slug: string): Promise<void>;
    deleteBySlug(slug: string): Promise<void>;
}