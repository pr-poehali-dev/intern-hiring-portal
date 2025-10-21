import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEO = ({ 
  title = "РеалтиКарьера — Работа агентом по недвижимости с обучением | Вакансии для стажеров",
  description = "Станьте агентом по недвижимости с нуля! Бесплатное обучение 6 недель, доход от 50 000₽, гибкий график. Открытые вакансии для стажеров без опыта. Первый доход уже через месяц.",
  keywords = "работа агентом недвижимости, вакансии риэлтор, обучение агентов, стажировка недвижимость, риэлтор без опыта, карьера в недвижимости",
  ogImage = "https://cdn.poehali.dev/intertnal/img/og.png",
  canonicalUrl = "https://intern-hiring-portal.poehali.dev/"
}: SEOProps) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default SEO;
