import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

export interface PageSeoConfig {
  title: string;
  description: string;
  canonical?: string;
  schema?: object | object[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

const BASE_URL = 'https://doctor-skripnik.com.ua';
const DEFAULT_IMAGE = `${BASE_URL}/assets/owner.webp`;
const PAGE_SCRIPT_ID = 'json-ld-page';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updatePage(config: PageSeoConfig): void {
    const ogTitle = config.ogTitle ?? config.title;
    const ogDesc  = config.ogDescription ?? config.description;
    const ogImage = config.ogImage ?? DEFAULT_IMAGE;
    const ogType  = config.ogType ?? 'website';

    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title',       content: ogTitle });
    this.meta.updateTag({ property: 'og:description', content: ogDesc });
    this.meta.updateTag({ property: 'og:image',       content: ogImage });
    this.meta.updateTag({ property: 'og:type',        content: ogType });
    this.meta.updateTag({ property: 'og:url',         content: config.canonical ? this.fullUrl(config.canonical) : BASE_URL });
    this.meta.updateTag({ name: 'twitter:title',       content: ogTitle });
    this.meta.updateTag({ name: 'twitter:description', content: ogDesc });
    this.meta.updateTag({ name: 'twitter:image',       content: ogImage });

    if (config.canonical) {
      this.setCanonical(config.canonical);
    }

    if (config.schema) {
      this.setJsonLd(Array.isArray(config.schema) ? config.schema : [config.schema]);
    }
  }

  private setCanonical(path: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.href = this.fullUrl(path);
  }

  private setJsonLd(schemas: object[]): void {
    const existing = this.document.getElementById(PAGE_SCRIPT_ID);
    if (existing) existing.remove();

    const script = this.document.createElement('script');
    script.id = PAGE_SCRIPT_ID;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    this.document.head.appendChild(script);
  }

  private fullUrl(path: string): string {
    return path.startsWith('http') ? path : `${BASE_URL}${path}`;
  }
}
