import { translations, defaultLang, type SupportedLanguage, languages } from './translations';

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage = defaultLang) {
  return translations[lang] || translations[defaultLang];
}

export function getLocalizedPath(currentPathname: string, targetLang: SupportedLanguage): string {
  // Normalize pathname: remove leading '/en' if present
  let cleanPath = currentPathname;
  if (cleanPath.startsWith('/en/')) {
    cleanPath = cleanPath.replace(/^\/en/, '');
  } else if (cleanPath === '/en') {
    cleanPath = '/';
  }

  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }

  if (targetLang === 'ms') {
    return cleanPath;
  }

  // targetLang is 'en'
  if (cleanPath === '/') {
    return '/en/';
  }
  return `/en${cleanPath}`;
}
