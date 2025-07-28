import express from 'express'
import path from 'path'
import cors from 'cors'
import urlRoutes from './routes/urlRoutes'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/url', urlRoutes);

const staticPath = path.join(__dirname, './frontend/dist')
app.use(express.static(staticPath))

app.get('/*splat', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'))
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})



