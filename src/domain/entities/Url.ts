import { InvalidUrlError } from "../errors/InvalidUrlError";

export class Url {
    private id?: string;
    private slug?: string;
    private longUrl: string;
    private clicks: number;

    constructor(longUrl: string, slug?: string, id?: string, clicks: number = 0) {
        this.id = id;
        this.slug = slug;
        this.longUrl = this.checkLongUrl(longUrl);
        this.clicks = clicks;
    }

    public getId(): string | undefined {
        return this.id;
    }

    public getSlug(): string | undefined {
        return this.slug;
    }

    public setSlug(slug: string) {
        this.slug = slug;
    }

    public getLongUrl(): string {
        return this.longUrl;
    }

    public setlongUrl(longUrl: string) {
        this.longUrl = this.checkLongUrl(longUrl);
    }

    public getClicks(): number {
        return this.clicks;
    }

    public addOneClick() {
        this.clicks += 1;
    }

    public checkLongUrl(longUrl: string): string {
        const existUrl= new URL(longUrl);

        if (!existUrl) {
            throw new InvalidUrlError();
        }

        return longUrl;
    }
}