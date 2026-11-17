import { useEffect } from 'react';
import { companyConfig } from '../config/companyConfig';

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
}

export function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = title.includes(companyConfig.companyName)
      ? title
      : `${title} | ${companyConfig.companyName}`;
    document.title = fullTitle;

    const canonicalUrl = `${companyConfig.website}${path === '/' ? '/' : path}`;

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, path]);

  return null;
}
