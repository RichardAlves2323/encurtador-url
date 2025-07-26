export interface ICreateSlugUseCase {
    create(): Promise<string>;
}