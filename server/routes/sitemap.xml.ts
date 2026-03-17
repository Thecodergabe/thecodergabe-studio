import { editorFiles } from '~/data/editorFileData' 

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://thecodergabe.com'
  const staticRoutes = ['', '/work', '/about', '/inquiry']
  
  // Dynamically add work[id] routes
  const projectRoutes = Object.keys(editorFiles).map(id => `/work/${id}`)
  const allRoutes = [...staticRoutes, ...projectRoutes]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map(route => `
          <url>
            <loc>${baseUrl}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>${route === '' ? 'daily' : 'monthly'}</changefreq>
            <priority>${route === '' ? '1.0' : '0.8'}</priority>
          </url>
        `)
        .join('')}
    </urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return sitemap
})