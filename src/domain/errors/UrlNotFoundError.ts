export class UrlNotFoundError extends Error {
    constructor(message: string = 'Url não encontrada') {
        super(message);
    }
}