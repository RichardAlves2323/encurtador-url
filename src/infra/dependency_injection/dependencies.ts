import { UrlService } from "../../domain/services/UrlService";
import { CreateSlugByNanoId } from "../create_slug/CreateSlugByNanoId";
import { PrismaUrlRepository } from "../database/prisma/PrismaUrlRepository";

const urlRepository = new PrismaUrlRepository();
const createSlugService = new CreateSlugByNanoId();
const urlService = new UrlService(urlRepository, createSlugService);

export { urlService }