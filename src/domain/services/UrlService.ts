import { Url } from "../entities/Url";
import { DuplicateSlugError } from "../errors/DuplicateSlugError";
import { UrlNotFoundError } from "../errors/UrlNotFoundError";
import { IUrlRepository } from "../interfaces/repositories/IUrlRespository";
import { ICreateSlugService } from "../interfaces/services/ICreateSlugService";
import { IUrlService } from "../interfaces/services/IUrlService";

export class UrlService implements IUrlService {
    private readonly urlRepository: IUrlRepository;
    private readonly createSlug: ICreateSlugService;

    constructor(urlRepository: IUrlRepository, createSlug: ICreateSlugService) {
        this.urlRepository = urlRepository;
        this.createSlug = createSlug;
    }
    
    public async create(url: Url): Promise<Url> {
        const newSlug = await this.createSlug.create();

        const existSlug = await this.urlRepository.findBySlug(newSlug);
        if (existSlug) throw new DuplicateSlugError();

        url.setSlug(newSlug);
        const createdUrl = await this.urlRepository.save(url);

        return createdUrl;
    }

    public async findAll(): Promise<Url[]> {
        return this.urlRepository.findAll();
    }

    public async redirectBySlug(slug: string): Promise<string> {
        const url = await this.urlRepository.findBySlug(slug);

        if (!url) throw new UrlNotFoundError();
        
        url.addOneClick();
        await this.urlRepository.updateClicksBySlug(url.getSlug()!);

        return url.getLongUrl();
    }

    public async update(url: Url): Promise<void> {
        await this.urlRepository.update(url);
    }

    public async delete(slug: string): Promise<void> {
        await this.urlRepository.deleteBySlug(slug);
    }
    
}