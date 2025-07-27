export class DuplicateSlugError extends Error {
    constructor(message: string = 'Slug já está em uso') {
        super(message);
    }
}