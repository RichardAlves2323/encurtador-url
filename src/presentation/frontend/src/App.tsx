import { useState, useEffect } from 'react'
import axios from 'axios';

interface UrlItem {
  id: string;
  slug: string;
  longUrl: string;
  clicks: number;
}
const URL_API = `${window.location.origin}/api`;

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [urls, setUrls] = useState<UrlItem[]>([]);

  const api = axios.create({
    baseURL: `${URL_API}`,
  });

  const fetchUrls = async () => {  
      const response = await api.get('/url');
      setUrls(response.data);
  };

  const createUrl = async () => {

    try {
      const response = await api.post('/url', { longUrl });
      setUrls([...urls, response.data]);
    } catch (error: any) {
      alert(error.response?.data?.error);
    } finally {
      setLongUrl('');
    }
  };

  const deleteUrl = async (slug: string) => {
    await api.delete(`/url/${slug}`);
    setUrls(urls.filter(url => url.slug !== slug));
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h1 className="mb-4 text-center">Encurtador de URL</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cole a URL completa aqui..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button className="btn btn-primary" onClick={createUrl}>
          Encurtar
        </button>
      </div>

      <div className="d-flex flex-column gap-3">
        {urls.map((url) => (
          <div key={url.id} className="card shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-2 small">{url.longUrl}</p>
              <p className="mb-2">
                <strong>Encurtada:</strong>{' '}
                <a href={`${URL_API}/url/${url.slug}`} target="_blank" rel="noopener noreferrer" onClick={() => {
                  setTimeout(() => {
                    fetchUrls();
                  }, 1000)
                }}>
                  {`${URL_API}/url/${url.slug}`}
                </a>
              </p>
              <p className="mb-2">
                <strong>Cliques:</strong> {url.clicks}
              </p>
              <button className="btn btn-outline-danger btn-sm" onClick={() => deleteUrl(url.slug)}>
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
