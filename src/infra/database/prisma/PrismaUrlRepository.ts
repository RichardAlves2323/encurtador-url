import { Url } from "../../../domain/entities/Url";
import { IUrlRepository } from "../../../domain/interfaces/repositories/IUrlRespository";
import { PrismaClient } from "./generated-client";

export class PrismaUrlRepository implements IUrlRepository {
    
    private readonly prisma = new PrismaClient();
    
    public async save(url: Url): Promise<Url> {
        const newUrl = await this.prisma.url.create({
            data: {
                slug: url.getSlug()!,
                longUrl: url.getLongUrl(),
                clicks: url.getClicks()
            }
        });

        return new Url(newUrl.longUrl, newUrl.slug, newUrl.id, newUrl.clicks);
    }

    public async findAll(): Promise<Url[]> {
        const urls = await this.prisma.url.findMany();

        return urls.map((url) => new Url(url.longUrl, url.slug, url.id, url.clicks));
    }


    public async findBySlug(slug: string): Promise<Url | null> {
        const url = await this.prisma.url.findUnique({where: {slug}});

        if (url) {
            return new Url(url.longUrl, url.slug, url.id, url.clicks);
        }

        return null;
    }

    public async update(url: Url): Promise<void> {
        await this.prisma.url.update({where: {id: url.getId()},
        data: {
            slug: url.getSlug()
        }});
    }

    public async updateClicksBySlug(slug: string): Promise<void> {
        await this.prisma.url.update({
            where: {slug},
            data: {
                clicks: {increment: 1}
            }
        });
    }

    public async deleteBySlug(slug: string): Promise<void> {
        await this.prisma.url.delete({where: {slug}});
    }
    
}