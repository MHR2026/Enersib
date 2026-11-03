import { languages, routes } from '../i18n/ui';

const site = 'https://www.enersib.com';

export function GET() {
  const pages = [...Object.values(routes), 'legal/'];
  const urls = Object.keys(languages).flatMap((l) => pages.map((p) => `${site}/${l}/${p}`));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
