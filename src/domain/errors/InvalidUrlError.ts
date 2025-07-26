export class InvalidUrlError extends Error {
    constructor(message: string = 'Url invalida') {
        super(message);
    }
}