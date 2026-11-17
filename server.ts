// Source: Google Maps Platform Code Assist (Places API New Place Details pattern)
import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CMB_XPRESS_PLACE_ID = 'ChIJ9ZHtrfb34joR0C_5rGjtRoE';
const PORT = Number(process.env.PORT || 3000);

function getMapsApiKey(): string {
  return (
    process.env.GOOGLE_MAPS_API_KEY ||
    process.env.VITE_GOOGLE_MAPS_API_KEY ||
    ''
  ).trim();
}

async function startServer() {
  const app = express();

  app.get('/api/maps-client-config', (_req, res) => {
    const apiKey = getMapsApiKey();
    res.json({
      hasKey: Boolean(apiKey),
      apiKey,
      placeId: CMB_XPRESS_PLACE_ID,
    });
  });

  app.get('/api/google-reviews', async (_req, res) => {
    const apiKey = getMapsApiKey();
    if (!apiKey) {
      return res.status(200).json({
        configured: false,
        placeId: CMB_XPRESS_PLACE_ID,
        reviews: [],
        message: 'Google Maps Platform API key is not configured in server runtime.',
      });
    }

    try {
      const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
        CMB_XPRESS_PLACE_ID
      )}`;

      const fieldMask = [
        'id',
        'displayName',
        'rating',
        'userRatingCount',
        'reviews',
        'googleMapsUri',
        'googleMapsLinks',
      ].join(',');

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': fieldMask,
          'X-Goog-Maps-Solution-ID': 'gmp_mcp_codeassist_v1_aistudio',
        },
      });

      if (response.status === 429) {
        return res.status(429).json({
          configured: true,
          quotaExceeded: true,
          error: { status: 'RESOURCE_EXHAUSTED' },
          reviews: [],
        });
      }

      const data = await response.json();

      if (!response.ok) {
        const isQuota =
          data?.error?.status === 'RESOURCE_EXHAUSTED' ||
          String(data?.error?.message || '').toLowerCase().includes('quota');
        return res.status(response.status).json({
          configured: true,
          quotaExceeded: isQuota,
          error: data?.error || { message: 'Places API request failed' },
          reviews: [],
        });
      }

      const rawReviews = Array.isArray(data?.reviews) ? data.reviews : [];
      const reviews = rawReviews.map((r: any) => ({
        name: r?.name || '',
        rating: typeof r?.rating === 'number' ? r.rating : null,
        relativePublishTimeDescription: r?.relativePublishTimeDescription || '',
        publishTime: r?.publishTime || '',
        text: r?.text?.text || r?.originalText?.text || '',
        googleMapsUri: r?.googleMapsUri || data?.googleMapsLinks?.reviewsUri || data?.googleMapsUri || '',
        authorAttribution: {
          displayName: r?.authorAttribution?.displayName || 'Google User',
          uri: r?.authorAttribution?.uri || '',
          photoUri: r?.authorAttribution?.photoUri || '',
        },
      }));

      return res.json({
        configured: true,
        placeId: data?.id || CMB_XPRESS_PLACE_ID,
        displayName: data?.displayName?.text || 'CMB Xpress Courier & Cargo - Wattala',
        rating: typeof data?.rating === 'number' ? data.rating : null,
        userRatingCount:
          typeof data?.userRatingCount === 'number' ? data.userRatingCount : null,
        googleMapsUri: data?.googleMapsUri || '',
        reviewsUri: data?.googleMapsLinks?.reviewsUri || '',
        writeAReviewUri: data?.googleMapsLinks?.writeAReviewUri || '',
        directionsUri: data?.googleMapsLinks?.directionsUri || '',
        reviews,
      });
    } catch (err) {
      return res.status(500).json({
        configured: true,
        error: { message: err instanceof Error ? err.message : 'Server error' },
        reviews: [],
      });
    }
  });

  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      const indexFile = path.join(distDir, 'index.html');
      if (fs.existsSync(indexFile)) {
        res.sendFile(indexFile);
      } else {
        res.status(404).send('Build output not found.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
