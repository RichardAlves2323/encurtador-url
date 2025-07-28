import { Router } from 'express'
import { urlService } from '../../infra/dependency_injection/dependencies'
import { Url } from '../../domain/entities/Url'
import { DuplicateSlugError } from '../../domain/errors/DuplicateSlugError'
import { UrlNotFoundError } from '../../domain/errors/UrlNotFoundError'

const urlRouter = Router()

urlRouter.post('/', async (req, res) => {
  const { longUrl } = req.body
  try {
    const url = await urlService.create(new Url(longUrl));
    res.status(201).json(url);
  } catch (error: any) {
    if (error instanceof DuplicateSlugError) {
      return res.status(409).json({ error: 'O Slug gerado já está em uso' });
    }
    res.status(500).json({ error: 'Erro interno no servidor' })
  }
})

urlRouter.get('/', async (req, res) => {
  try {
    const urls = await urlService.findAll()
    res.status(200).json(urls);
  } catch (error: any) {
    res.status(500).json({ error: 'Erro interno no servidor' })
  }
})


urlRouter.get('/:slug', async (req, res) => {
  const { slug } = req.params
  try {

    const url = await urlService.redirectBySlug(slug);
    res.redirect(url);
  } catch (error: any) {
    if (error instanceof UrlNotFoundError) {
      return res.status(404).json({ error: 'URL não encontrada' });
    }
    res.status(500).json({ error: 'Erro interno no servidor' })
  }
})

urlRouter.delete('/:slug', async (req, res) => {
  const { slug } = req.params
  try {
    await urlService.delete(slug);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})


export default urlRouter;